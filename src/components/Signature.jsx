import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { menuCategories } from "../data/menu";
import { asset } from "../lib/asset";
import { useCart } from "../context/CartContext";

// Item do cardápio exibido como destaque — o botão adiciona direto ao pedido
const featured = menuCategories
  .flatMap((c) => c.items)
  .find((i) => i.name === "Combo Casal 2.0 com Desconto");

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Signature() {
  const { addItem, openCart } = useCart();

  const order = () => {
    addItem(featured);
    openCart();
  };

  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-24">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-red/15 blur-[130px]"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto grid max-w-6xl items-center gap-7 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-14"
      >
        <motion.div variants={fade} className="relative mx-auto w-full max-w-md px-2 sm:px-0 lg:max-w-none">
          <img
            src={asset("/images/signature-combo.jpg")}
            alt="Combo Casal 2.0 com dois smash burgers, duas porções de fritas e dois refrigerantes"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl shadow-black/50 sm:aspect-auto sm:rounded-sm"
            loading="lazy"
          />
          <div className="absolute right-0 -top-3 rotate-[8deg] rounded-full border-2 border-brand-red bg-bg/90 px-3.5 py-1.5 font-display text-xs uppercase tracking-wider text-brand-red sm:-right-2 sm:px-4 sm:text-sm">
            Mais Pedido
          </div>
        </motion.div>

        <div>
          <motion.p variants={fade} className="font-script text-2xl text-brand-red sm:text-3xl">
            Destaque da casa
          </motion.p>

          <motion.h2
            variants={fade}
            className="mt-1 font-display text-[clamp(2.5rem,11vw,4rem)] uppercase leading-[0.9] tracking-tight text-cream"
          >
            Combo
            <br />
            Casal <span className="text-brand-red italic">2.0</span>
          </motion.h2>

          <motion.p variants={fade} className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400 sm:mt-5 sm:text-base">
            2 Lanches Smash 2.0, 2 porções de fritas e 2 refrigerantes 350ml. Tudo com desconto,
            pra dividir com quem você gosta.
          </motion.p>

          <motion.div variants={fade} className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-7 sm:justify-start sm:gap-5">
            <span className="font-display text-5xl text-brand-amber sm:text-6xl">
              R$ 91
              <span className="align-top text-2xl sm:text-3xl">,00</span>
            </span>

            <button
              type="button"
              onClick={order}
              className="group inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-brand-red px-6 py-3 font-display text-base uppercase tracking-wide text-white shadow-xl shadow-red-950/40 transition-colors hover:bg-brand-red-dark active:scale-[0.98] sm:px-7 sm:py-3.5"
            >
              <ShoppingBag className="h-5 w-5" />
              Pedir Combo
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
