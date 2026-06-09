const Stats = () => {
  const stats = [
    {
      number: "50K+",
      label: "Users"
    },
    {
      number: "1M+",
      label: "Tasks Managed"
    },
    {
      number: "98%",
      label: "Customer Satisfaction"
    },
    {
      number: "120+",
      label: "Countries"
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl"
          >
            <h3 className="text-5xl font-bold text-blue-500 mb-3">
              {stat.number}
            </h3>

            <p className="text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;