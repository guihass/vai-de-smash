import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { navLinks } from "../data/business";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-surface/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Abrir carrinho${count > 0 ? ` com ${count} ${count === 1 ? "item" : "itens"}` : ""}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-surface-2 active:bg-surface-2"
          >
            <ShoppingBag className="h-6 w-6" />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[11px] font-bold text-white"
              >
                {count}
              </motion.span>
            )}
          </button>

          <a
            href="#cardapio"
            className="hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition-transform hover:scale-105 hover:bg-brand-red-dark md:block"
          >
            Pedir no Cardápio
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white active:bg-surface-2 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full -z-10 h-screen bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {open && (
        <div className="border-t border-border bg-surface px-4 pb-6 pt-2 shadow-2xl shadow-black/50 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-surface-2 active:bg-surface-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#cardapio"
            onClick={() => setOpen(false)}
            className="mt-3 block min-h-[48px] rounded-full bg-brand-red px-5 py-3 text-center text-[15px] font-bold leading-6 text-white active:scale-[0.98]"
          >
            Pedir no Cardápio
          </a>
        </div>
      )}
    </motion.header>
  );
}
