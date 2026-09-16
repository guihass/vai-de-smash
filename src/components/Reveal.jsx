import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
