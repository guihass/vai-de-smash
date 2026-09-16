import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";

/**
 * Barra fixa no rodapé (só celular) com o resumo do pedido.
 * Aparece assim que o cliente adiciona o primeiro item, sem interromper a navegação.
 */
export default function CartBar() {
  const { count, total, hasEstimate, isOpen, openCart } = useCart();
  const visible = count > 0 && !isOpen;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="pb-safe fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden"
        >
          <button
            type="button"
            onClick={openCart}
            className="flex w-full items-center gap-3 rounded-2xl border border-brand-red/40 bg-surface/95 p-3 pl-4 text-left shadow-2xl shadow-black/60 backdrop-blur active:scale-[0.99]"
            aria-label={`Ver pedido com ${count} ${count === 1 ? "item" : "itens"}, total ${formatBRL(total)}`}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
              <ShoppingBag className="h-5 w-5" />
              <motion.span
                key={count}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cream px-1 text-[11px] font-extrabold text-bg"
              >
                {count}
              </motion.span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Seu pedido{hasEstimate ? " · estimado" : ""}
              </span>
              <span className="block font-display text-xl leading-tight text-brand-amber">
                {formatBRL(total)}
              </span>
            </span>

            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-red px-4 py-2.5 text-sm font-bold text-white">
              Ver pedido
              <ChevronUp className="h-4 w-4" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
