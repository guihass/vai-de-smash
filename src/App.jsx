import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Signature from "./components/Signature";
import Menu from "./components/Menu";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CartDrawer from "./components/CartDrawer";
import CartBar from "./components/CartBar";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-bg">
        <Header />
        <main>
          <Hero />
          <Signature />
          <Menu />
          <About />
          <Location />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <CartBar />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
