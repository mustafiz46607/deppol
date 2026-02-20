import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How Long Does a Design Project Take?",
    answer:
      "Project timelines vary depending on scope and complexity. On average, most branding and website projects take between 3–6 weeks.",
  },
  {
    question: "Why is Design Monks Different?",
    answer:
      "We combine strategic thinking, user-centered design, and modern technologies to deliver impactful results that drive growth.",
  },
  {
    question: "How Much Does a Design Project Cost at Your Agency?",
    answer:
      "Pricing depends on project scope. We offer flexible packages tailored to startups and growing businesses.",
  },
  {
    question: "Is Design Monks a start-up-friendly agency?",
    answer:
      "Absolutely! We love working with startups and provide scalable solutions based on your growth stage.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "We use Figma, Adobe Suite, Webflow, React, and modern development frameworks to build high-quality products.",
  },
  {
    question:
      "Do you create WordPress e-commerce sites, and develop apps?",
    answer:
      "Yes, we develop WordPress websites, e-commerce platforms, and scalable web & mobile applications.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-black py-20 px-6 lg:px-32">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="border border-green-500 text-green-500 px-5 py-2 rounded-full text-sm">
          Frequently Asked Questions
        </span>

        <h2 className="text-4xl lg:text-5xl font-semibold mt-6">
          Your Questions
        </h2>

        <h2 className="text-4xl lg:text-5xl font-semibold italic font-serif">
          Answered!
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-6"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg lg:text-xl font-medium">
                {faq.question}
              </h3>

              <div
                className={`border border-purple-500 rounded-full p-2 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="text-purple-500" size={20} />
              </div>
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;