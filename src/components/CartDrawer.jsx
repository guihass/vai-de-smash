import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";
import { asset } from "../lib/asset";

export default function CartDrawer() {
  const { items, count, total, hasEstimate, isOpen, closeCart, setQty, removeItem, clear, checkoutUrl } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.aside
            role="dialog"
            aria-label="Seu pedido"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 38 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-border bg-surface shadow-2xl"
            style={{ height: "100dvh" }}
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="flex items-center gap-2 font-display text-xl uppercase tracking-tight text-cream">
                <ShoppingBag className="h-5 w-5 text-brand-red" />
                Seu Pedido
                {count > 0 && <span className="text-brand-red">({count})</span>}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Fechar carrinho"
                className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-surface-2 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
                <ShoppingBag className="h-12 w-12 text-zinc-700" />
                <p className="font-display text-lg uppercase text-cream">Carrinho vazio</p>
                <p className="text-sm text-zinc-500">
                  Escolha seus lanches no cardápio e eles aparecem aqui.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 min-h-[44px] rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
                >
                  Ver cardápio
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-border overflow-y-auto overscroll-contain px-4 sm:px-5">
                  {items.map((item) => (
                    <li key={item.name} className="flex gap-3 py-4">
                      <img
                        src={asset(item.image)}
                        alt=""
                        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-bold leading-snug text-white">{item.name}</p>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {item.priceFrom && "a partir de "}
                          {formatBRL(item.price)} cada
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => setQty(item.name, item.qty - 1)}
                              aria-label={`Diminuir ${item.name}`}
                              className="flex h-9 w-9 items-center justify-center text-zinc-300 transition-colors hover:text-white active:bg-surface-2"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-6 text-center text-sm font-bold text-white">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(item.name, item.qty + 1)}
                              aria-label={`Aumentar ${item.name}`}
                              className="flex h-9 w-9 items-center justify-center text-zinc-300 transition-colors hover:text-white active:bg-surface-2"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.name)}
                            aria-label={`Remover ${item.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-surface-2 hover:text-brand-red"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <span className="shrink-0 text-sm font-bold text-brand-amber">
                        {formatBRL(item.price * item.qty)}
                      </span>
                    </li>
                  ))}
                </ul>

                <footer className="pb-safe border-t border-border bg-surface px-4 py-4 sm:px-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-lg uppercase text-cream">Total</span>
                    <span className="font-display text-3xl text-brand-amber">{formatBRL(total)}</span>
                  </div>

                  {hasEstimate && (
                    <p className="mt-1 text-[11px] text-zinc-500">
                      Combos marcados como "a partir de" podem variar conforme os lanches escolhidos.
                    </p>
                  )}

                  <a
                    href={checkoutUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block rounded-sm bg-[#25D366] py-4 text-center font-display text-base uppercase tracking-wide text-black transition-transform hover:scale-[1.02] active:scale-[0.99]"
                  >
                    Enviar pedido no WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={clear}
                    className="mt-2 min-h-[44px] w-full text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 transition-colors hover:text-brand-red"
                  >
                    Limpar carrinho
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
