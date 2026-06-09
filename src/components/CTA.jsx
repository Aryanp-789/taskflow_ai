const CTA = () => {
  return (
    <section className="py-24 px-6">
      
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to boost your productivity?
        </h2>

        <p className="text-white/80 mt-4 text-lg">
          Join thousands of teams already using TaskFlow AI to manage smarter.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
            Get Started Free
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition">
            Book Demo
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;