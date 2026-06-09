import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-8 pt-24">

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Work Less.
          <span className="text-blue-500"> Achieve More.</span>
        </h1>

        <p className="text-slate-400 mt-6 text-lg">
          AI-powered productivity platform that helps
          teams organize tasks, automate workflows,
          and maximize performance.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Start Free Trial
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-lg">
            Watch Demo
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h3 className="text-2xl font-bold mb-6">
          TaskFlow Dashboard
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-800 p-3 rounded-lg">
            ✅ Design Landing Page
          </div>

          <div className="bg-slate-800 p-3 rounded-lg">
            ✅ Client Meeting
          </div>

          <div className="bg-slate-800 p-3 rounded-lg">
            ⏳ API Integration
          </div>
        </div>

        <div className="mt-8">
          <p className="text-slate-400">
            Productivity Score
          </p>

          <h2 className="text-5xl font-bold text-blue-500">
            92%
          </h2>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;