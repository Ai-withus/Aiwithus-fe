// src/components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does AI With Us offer?",
    answer:
      "We provide AI-powered solutions, cloud & IT services, custom software development, cybersecurity, and DevOps automation to help businesses scale efficiently.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on scope and complexity. Typically, small to medium projects take 4-12 weeks, while large-scale implementations may take several months.",
  },
  {
    question: "Do you offer support after deployment?",
    answer:
      "Yes! We provide ongoing maintenance, support, and optimization to ensure your systems remain secure, updated, and performing at their best.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on project scope, complexity, and technologies used. We offer transparent quotes and flexible plans tailored to your needs.",
  },
  {
    question: "Can I request custom AI solutions?",
    answer:
      "Absolutely. Our team works closely with clients to design and develop tailor-made AI solutions to meet specific business requirements.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<section
  id="faq"
  className="relative py-20 bg-gradient-to-b from-indigo-900/10 to-purple-900/20 text-white"
>
  {/* Background overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

  <div className="max-w-4xl mx-auto px-6 relative z-10">
    {/* Heading in pure white */}
    <h2 className="text-3xl font-bold mb-8 text-center text-white !text-white">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 cursor-pointer hover:bg-white/20 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              {isActive ? (
                <ChevronUp className="w-5 h-5 text-yellow-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-yellow-400" />
              )}
            </div>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-200 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}

export default FAQ;
