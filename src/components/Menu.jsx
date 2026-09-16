import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Plus } from "lucide-react";
import { menuCategories } from "../data/menu";
import { whatsappUrl } from "../data/business";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";
import Reveal from "./Reveal";

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

function AddButton({ item, onAdd }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <button
      type="button"
      onClick={() => {
        onAdd(item);
        setAdded(true);
      }}
      aria-label={`Adicionar ${item.name} ao pedido`}
      className={`inline-flex min-h-[40px] shrink-0 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-bold text-white transition-all active:scale-95 ${
        added ? "bg-emerald-600" : "bg-brand-red hover:bg-brand-red-dark"
      }`}
    >
      {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      <span>{added ? "Adicionado" : "Adicionar"}</span>
    </button>
  );
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((c) => c.id === activeId);
  const { addItem } = useCart();
  const tabsRef = useRef(null);

  // Centraliza a aba ativa na faixa rolável (celular) sem mexer no scroll da página
  useEffect(() => {
    const list = tabsRef.current;
    const el = list?.querySelector(`[data-tab="${activeId}"]`);
    if (!list || !el || list.scrollWidth <= list.clientWidth) return;
    const left = el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeId]);

  const selectCategory = (id) => {
    setActiveId(id);
    // No celular, volta o topo da lista para logo abaixo das abas
    if (window.innerWidth < 640) {
      const top = document.getElementById("cardapio-lista");
      if (top) {
        const y = top.getBoundingClientRect().top + window.scrollY - 128;
        if (window.scrollY > y) window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="cardapio" className="bg-bg py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.25rem] uppercase leading-none tracking-tight text-cream sm:text-5xl">
            Nosso <span className="text-brand-red">Cardápio</span>
          </h2>
          <p className="mt-3 text-[15px] text-zinc-400 sm:text-base">
            Tudo que a gente serve, direto aqui no site — dá uma olhada e já peça o seu.
          </p>
        </Reveal>
      </div>

      {/* Abas: fixas abaixo do header e roláveis na horizontal no celular */}
      <div className="sticky top-[60px] z-30 mt-6 border-y border-border/60 bg-bg/90 backdrop-blur sm:static sm:mt-10 sm:border-0 sm:bg-transparent sm:backdrop-blur-none">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Categorias do cardápio"
          className="no-scrollbar mx-auto flex max-w-6xl snap-x gap-1.5 overflow-x-auto px-4 py-2.5 sm:flex-wrap sm:justify-center sm:gap-2 sm:px-6 sm:py-0"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              data-tab={cat.id}
              aria-selected={activeId === cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`relative min-h-[40px] shrink-0 snap-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeId === cat.id
                  ? "text-white"
                  : "bg-surface text-zinc-400 hover:text-white sm:bg-transparent"
              }`}
            >
              {activeId === cat.id && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-brand-red"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div id="cardapio-lista" className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="mt-4 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {active.items.map((item) => (
              <motion.article
                key={item.name}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group flex overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-brand-red/50 sm:flex-col"
              >
                {/* Imagem: quadrada à esquerda no celular, 4:3 no topo em telas maiores */}
                <div className="relative w-[7.25rem] shrink-0 self-stretch overflow-hidden bg-surface-2 sm:aspect-[4/3] sm:w-auto sm:self-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-brand-amber px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-black shadow sm:hidden">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-3.5 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-bold leading-snug text-white sm:text-base">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="hidden shrink-0 rounded-full bg-brand-amber/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-amber sm:inline-block">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 flex-1 text-[13px] leading-snug text-zinc-400 sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-normal">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                    <span className="min-w-0 text-sm font-bold text-brand-amber sm:text-base">
                      {item.price === null ? (
                        "Monte o seu"
                      ) : (
                        <>
                          {item.priceFrom && (
                            <span className="mr-1 block text-[10px] font-medium leading-none text-zinc-500 sm:inline sm:text-[11px]">
                              a partir de
                            </span>
                          )}
                          {formatBRL(item.price)}
                        </>
                      )}
                    </span>

                    {item.price === null ? (
                      <a
                        href={whatsappUrl(`Oi! Quero montar: ${item.name}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-full border border-zinc-700 px-4 text-xs font-bold text-cream transition-colors hover:border-cream active:scale-95"
                      >
                        Montar
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <AddButton item={item} onAdd={addItem} />
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
