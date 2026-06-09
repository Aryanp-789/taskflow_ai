import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-blue-500">
            TaskFlow AI
          </h1>
          <p className="text-slate-400 mt-4">
            AI-powered productivity platform for modern teams.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-slate-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl text-slate-400">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="text-center text-slate-500 mt-12">
        © {new Date().getFullYear()} TaskFlow AI. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;