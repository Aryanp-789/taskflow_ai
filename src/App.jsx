import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-slate-950 text-white" : "bg-white text-black"}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="space-y-32">
        <Hero />
        <Companies />
        <Features />
        <Stats />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>

    </div>
  );
}

export default App;