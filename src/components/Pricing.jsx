import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      desc: "Perfect for individuals",
      features: [
        "5 Projects",
        "Basic AI Suggestions",
        "Task Management",
        "Email Support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹499",
      desc: "Best for professionals",
      features: [
        "Unlimited Projects",
        "Advanced AI",
        "Team Collaboration",
        "Analytics Dashboard",
        "Priority Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large teams",
      features: [
        "Everything in Pro",
        "Dedicated Manager",
        "Custom Integrations",
        "Advanced Security",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Simple Pricing
        </h2>
        <p className="text-slate-400 mt-4">
          Choose the plan that fits your workflow
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border transition transform hover:scale-105 ${
              plan.highlighted
                ? "bg-blue-600 border-blue-400 text-white"
                : "bg-slate-900 border-slate-800"
            }`}
          >
            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="text-sm mt-2 opacity-80">
              {plan.desc}
            </p>

            <h1 className="text-4xl font-bold mt-6">
              {plan.price}
            </h1>

            <div className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheck className="text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-blue-600 hover:bg-slate-200"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;