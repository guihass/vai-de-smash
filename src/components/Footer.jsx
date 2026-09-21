import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import Logo from "./Logo";
import { business, navLinks, whatsappUrl } from "../data/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg pb-28 pt-10 sm:py-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 md:flex md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-zinc-500">
            {business.tagline} em {business.city}.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-zinc-300 transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-zinc-300 transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wide text-zinc-500">
            Links rápidos
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1">
          <span className="text-xs font-bold uppercase tracking-wide text-zinc-500">
            Contato
          </span>
          <span className="text-sm text-zinc-400">{business.address}</span>
          <span className="text-sm text-zinc-400">{business.phoneDisplay}</span>
          <span className="text-sm text-zinc-400">{business.hours}</span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border px-4 pt-6 text-center text-xs leading-relaxed text-zinc-600 sm:mt-10 sm:px-6">
        © {year} {business.name} | {business.tagline}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
