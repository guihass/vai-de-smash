import { createContext, useContext, useEffect, useState } from "react";
import { business, whatsappUrl } from "../data/business";
import { formatBRL } from "../lib/format";

const STORAGE_KEY = "vaidesmash:carrinho";

const CartContext = createContext(null);

const readStored = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // navegação privada / armazenamento bloqueado: o carrinho segue só em memória
    }
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          name: item.name,
          price: item.price,
          priceFrom: Boolean(item.priceFrom),
          image: item.image,
          qty: 1,
        },
      ];
    });
    // Em telas grandes a gaveta abre como confirmação; no celular a barra
    // inferior (CartBar) mostra o resumo sem interromper a navegação.
    if (window.matchMedia("(min-width: 768px)").matches) setIsOpen(true);
  };

  const setQty = (name, qty) =>
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.name !== name) : prev.map((i) => (i.name === name ? { ...i, qty } : i))
    );

  const removeItem = (name) => setItems((prev) => prev.filter((i) => i.name !== name));
  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const hasEstimate = items.some((i) => i.priceFrom);

  const checkoutUrl = () => {
    const lines = items.map(
      (i) => `• ${i.qty}x ${i.name}${i.priceFrom ? " (a partir de)" : ""} — ${formatBRL(i.price * i.qty)}`
    );
    const message = [
      "Olá! Quero fazer um pedido pelo site:",
      "",
      ...lines,
      "",
      `Total: ${formatBRL(total)}${hasEstimate ? " (valor estimado)" : ""}`,
    ].join("\n");
    return whatsappUrl(message);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        hasEstimate,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        setQty,
        removeItem,
        clear,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
