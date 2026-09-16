import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/business";
import { useCart } from "../context/CartContext";

export default function WhatsAppButton() {
  const { count, isOpen } = useCart();
  const lifted = count > 0 && !isOpen;

  return (
    <motion.a
      href={whatsappUrl("Oi! Vim pelo site e quero fazer um pedido 🍔")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`mb-safe fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-2xl shadow-black/40 transition-[bottom] duration-300 sm:right-6 md:bottom-6 ${
        lifted ? "bottom-[5.75rem]" : "bottom-5"
      }`}
    >
      <MessageCircle className="h-7 w-7" fill="black" />
    </motion.a>
  );
}
