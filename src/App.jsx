import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
