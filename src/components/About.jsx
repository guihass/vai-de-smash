import { motion } from "framer-motion";
import { Quote, Flame, Leaf, Timer } from "lucide-react";
import { testimonials } from "../data/business";
import Reveal from "./Reveal";

const values = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Selecionamos tudo com cuidado para garantir sabor de verdade em cada mordida.",
  },
  {
    icon: Flame,
    title: "Ponto Perfeito",
    description: "Carne prensada na chapa quente, selada por fora e suculenta por dentro.",
  },
  {
    icon: Timer,
    title: "Preparo Artesanal",
    description: "Cada lanche é montado na hora, com carinho e atenção nos detalhes.",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="sobre" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.25rem] uppercase leading-none tracking-tight text-cream sm:text-5xl">
            Feito com <span className="text-brand-red">fogo</span> e carinho
          </h2>
          <p className="mt-3 text-[15px] text-zinc-400 sm:text-base">
            Compromisso com ingredientes frescos, o ponto perfeito do smash e o cuidado
            artesanal em cada pedido.
          </p>
        </Reveal>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 sm:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface-2 p-4 text-left sm:block sm:p-6 sm:text-center"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 sm:mx-auto sm:h-12 sm:w-12">
                <value.icon className="h-5 w-5 text-brand-red sm:h-6 sm:w-6" />
              </span>
              <div>
                <h3 className="font-bold text-white sm:mt-4">{value.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-zinc-400 sm:mt-2 sm:text-sm sm:leading-normal">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-3 sm:mt-16 sm:gap-5 sm:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={cardVariants}
              className="flex flex-col rounded-2xl border border-border bg-surface-2 p-5 sm:p-6"
            >
              <Quote className="h-6 w-6 text-brand-amber" />
              <blockquote className="mt-3 flex-1 text-sm italic text-zinc-300">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-zinc-500">
                — {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
