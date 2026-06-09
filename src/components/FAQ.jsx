import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is TaskFlow AI free to use?",
      a: "Yes, we offer a free starter plan for individuals.",
    },
    {
      q: "Can I use it for team collaboration?",
      a: "Yes, you can invite team members and manage projects together.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use industry-standard encryption and secure cloud storage.",
    },
    {
      q: "Does it work on mobile?",
      a: "Yes, TaskFlow AI is fully responsive across all devices.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">FAQ</h2>
        <p className="text-slate-400 mt-4">
          Frequently asked questions
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                {item.q}
              </h3>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="text-slate-400 mt-4">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;