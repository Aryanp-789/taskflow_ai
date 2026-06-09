import {
  FaRobot,
  FaClock,
  FaUsers,
  FaChartLine,
  FaCloud,
  FaBell,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Prioritization",
      desc: "Automatically ranks tasks by importance."
    },
    {
      icon: <FaClock />,
      title: "Smart Scheduling",
      desc: "AI suggests the best work timings."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Manage projects together seamlessly."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      desc: "Track productivity and performance."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Sync",
      desc: "Access your work from anywhere."
    },
    {
      icon: <FaBell />,
      title: "Reminders",
      desc: "Never miss important deadlines."
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center mb-5">
        Powerful Features
      </h2>

      <p className="text-center text-slate-400 mb-16">
        Everything your team needs to stay productive.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition"
          >
            <div className="text-4xl text-blue-500 mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-slate-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;