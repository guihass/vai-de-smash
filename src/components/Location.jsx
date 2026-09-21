import { Clock, MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { business, whatsappUrl } from "../data/business";
import Reveal from "./Reveal";

export default function Location() {
  const mapsQuery = encodeURIComponent(business.address);

  return (
    <section id="localizacao" className="bg-bg py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.25rem] uppercase leading-none tracking-tight text-cream sm:text-5xl">
            Localização, <span className="text-brand-red">Horários</span> e Contato
          </h2>
          <p className="mt-3 text-[15px] text-zinc-400 sm:text-base">
            Vem matar a fome com a gente ou peça no conforto de casa.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          <Reveal y={16} className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4 sm:gap-4 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 sm:h-11 sm:w-11">
                <Clock className="h-5 w-5 text-brand-red" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white sm:text-base">Horário de Funcionamento</h3>
                <p className="mt-0.5 text-[13px] text-zinc-400 sm:mt-1 sm:text-sm">{business.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4 sm:gap-4 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 sm:h-11 sm:w-11">
                <MapPin className="h-5 w-5 text-brand-red" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white sm:text-base">Endereço</h3>
                <p className="mt-0.5 text-[13px] text-zinc-400 sm:mt-1 sm:text-sm">{business.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-block py-1.5 text-sm font-semibold text-brand-amber hover:underline"
                >
                  Ver no mapa
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4 sm:gap-4 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 sm:h-11 sm:w-11">
                <MessageCircle className="h-5 w-5 text-brand-red" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white sm:text-base">WhatsApp</h3>
                <p className="mt-0.5 text-[13px] text-zinc-400 sm:mt-1 sm:text-sm">{business.phoneDisplay}</p>
                <a
                  href={whatsappUrl("Oi! Vim pelo site e quero fazer um pedido 🍔")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-block py-1.5 text-sm font-semibold text-brand-amber hover:underline"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4 sm:gap-4 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 sm:h-11 sm:w-11">
                <InstagramIcon className="h-5 w-5 text-brand-red" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white sm:text-base">Instagram</h3>
                <p className="mt-0.5 text-[13px] text-zinc-400 sm:mt-1 sm:text-sm">{business.instagramHandle}</p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-block py-1.5 text-sm font-semibold text-brand-amber hover:underline"
                >
                  Seguir perfil
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal y={16} delay={0.15} className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Localização Brasa Burger"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[260px] w-full sm:min-h-[380px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
