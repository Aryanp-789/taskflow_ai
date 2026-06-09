import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-slate-800 bg-slate-950/90 text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          TaskFlow AI
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          <li><a href="#features" className="hover:text-white">Features</a></li>
          <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          <li><a href="#faq" className="hover:text-white">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg">
            Start Free Trial
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-4 flex flex-col gap-4">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <button className="bg-blue-600 px-4 py-2 rounded-lg mt-2">
            Start Free Trial
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;