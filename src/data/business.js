const env = import.meta.env;

export const siteUrl = (env.VITE_SITE_URL || "https://vaidesmash.com.br").replace(/\/$/, "");

export const business = {
  name: "Vai de Smash",
  tagline: "Hamburgueria Artesanal",
  city: "Louveira - SP",
  address: "Rua Pedro Chicalhone, 104 - Jardim Diamante, Louveira - SP, CEP 13294-504",
  hours: "Segunda a Domingo, das 18:00 às 00:00",
  phoneDisplay: "(19) 98906-1037",
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || "5519989061037",
  instagramHandle: "@vai_de_smash",
  instagramUrl: env.VITE_INSTAGRAM_URL || "https://instagram.com/vai_de_smash",
  menuUrl: env.VITE_MENU_URL || "https://app.cardapioweb.com/vaide_smash",
  rating: 4.8,
  soldCount: "+ de 60 mil",
};

export const whatsappUrl = (message = "") => {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const testimonials = [
  {
    text: "Tudo perfeito o melhor lanche de louveira sem duvidas!!!!!",
    author: "Cliente Google",
  },
  {
    text: "Hambúrguer saboroso e entrega muito rápida, além do horário de atendimento estendido.",
    author: "Cliente Google",
  },
  {
    text: "Lugar top limpo ótimo atendimento.",
    author: "Cliente Google",
  },
];
