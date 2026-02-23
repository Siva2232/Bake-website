import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Chatbot } from "./components/Chatbot";
import LoadingPage from "./components/LoadingPage";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  // hide the loader once it reports 100%
  const handleLoaded = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingPage onComplete={handleLoaded} />;
  }

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
