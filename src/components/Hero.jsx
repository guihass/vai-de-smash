import { motion } from "framer-motion";
import { ArrowDownRight, Beef, Sandwich, Star, UtensilsCrossed, Zap } from "lucide-react";
import { business } from "../data/business";
import { asset } from "../lib/asset";
import Scribble from "./decor/Scribble";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const strip = [
  { icon: Zap, label: "Entrega Rápida" },
  { icon: Sandwich, label: "Feito na Hora" },
  { icon: Beef, label: "100% Carne" },
  { icon: Star, label: `${business.rating} no Google` },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-bg pt-24 sm:pt-32">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[300px] w-[300px] rounded-full bg-brand-red/25 blur-[100px] sm:h-[460px] sm:w-[460px] sm:blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-brand-amber/10 blur-[100px] sm:h-[380px] sm:w-[380px] sm:blur-[130px]"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12"
      >
        <div className="contents lg:block">
          <motion.div variants={item} className="order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-amber sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
              Hamburgueria em {business.city}
            </span>

            <h1 className="mt-5 font-display text-[clamp(2.75rem,13vw,5.25rem)] uppercase leading-[0.95] tracking-tight text-cream sm:mt-6">
              Prensado.
              <br />
              Empilhado.
              <br />
              <span className="relative inline-block">
                Imparável.
                <Scribble className="absolute -bottom-2 left-0 h-4 w-full text-brand-red sm:-bottom-3 sm:h-5" />
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="order-2 lg:order-3 lg:mt-8">
            <p className="max-w-md text-[15px] leading-relaxed text-zinc-400 sm:text-lg">
              {business.soldCount} hambúrgueres vendidos. Smash prensado na chapa e o delivery
              mais rápido de Louveira.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <a
                href="#cardapio"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-brand-red px-8 py-3.5 font-display text-base uppercase tracking-wide text-white shadow-xl shadow-red-950/40 transition-colors hover:bg-brand-red-dark active:scale-[0.98] sm:py-4"
              >
                Pedir Agora
                <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#cardapio"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm border border-zinc-700 px-8 py-3.5 font-display text-base uppercase tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream hover:text-bg active:scale-[0.98] sm:py-4"
              >
                <UtensilsCrossed className="h-4 w-4" />
                Ver Cardápio
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400 sm:mt-7 sm:text-xs">
              <Star className="h-4 w-4 shrink-0 fill-brand-red text-brand-red" />
              Carne fresca. Sem atalhos.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative order-3 mx-auto w-full max-w-[320px] sm:max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-square">
            <div
              className="pointer-events-none absolute inset-[14%] rounded-full bg-brand-red/45 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={asset("/images/hero-smash.jpg")}
              alt="Smash Burger duplo com bacon, cheddar e molho barbecue"
              className="relative h-full w-full object-cover"
              style={{
                maskImage:
                  "radial-gradient(ellipse 58% 56% at 50% 54%, #000 38%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 58% 56% at 50% 54%, #000 38%, transparent 72%)",
                filter: "contrast(1.12) saturate(1.2) brightness(1.04)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute right-0 top-2 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-brand-red text-center font-display text-xs uppercase leading-tight text-white shadow-lg shadow-red-950/50 sm:h-28 sm:w-28 sm:text-base"
            >
              Feito
              <br />
              na hora
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 0.5, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-6 left-0 bg-cream px-4 py-1.5 font-script text-xl font-bold text-bg shadow-lg shadow-black/40 sm:px-5 sm:py-2 sm:text-2xl"
            >
              smash duplo
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-8 border-y border-border bg-surface/50 sm:mt-16"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:px-6 lg:justify-between">
          {strip.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 sm:text-[11px] sm:tracking-[0.16em]"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-red" />
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
