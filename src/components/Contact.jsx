import { MessageCircle, UtensilsCrossed } from "lucide-react";
import { whatsappUrl } from "../data/business";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contato" className="bg-surface py-14 sm:py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-[2.25rem] uppercase leading-none tracking-tight text-cream sm:text-5xl">
          Bateu aquela <span className="text-brand-red">fome</span>?
        </h2>
        <p className="mt-3 text-[15px] text-zinc-400 sm:text-base">
          Peça agora e receba seu smash quentinho com o delivery mais rápido de Louveira.
        </p>

        <div className="mx-auto mt-7 flex max-w-sm flex-col justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row">
          <a
            href={whatsappUrl("Oi! Vim pelo site e quero fazer um pedido 🍔")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-[15px] font-bold text-black shadow-xl transition-transform hover:scale-105 active:scale-[0.98] sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
          <a
            href="#cardapio"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-red-950/40 transition-transform hover:scale-105 hover:bg-brand-red-dark active:scale-[0.98] sm:text-base"
          >
            <UtensilsCrossed className="h-4 w-4" />
            Pedir no Cardápio
          </a>
        </div>
      </Reveal>
    </section>
  );
}
