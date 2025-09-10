// src/components/Industries.jsx
import React from "react";
import { Briefcase, Heart, CreditCard, BookOpen } from "lucide-react";

function Industries() {
  const industries = [
    {
      icon: <Heart className="w-12 h-12 text-indigo-300" />,
      title: "Healthcare",
      desc: "AI-driven solutions for hospitals, patient care, and healthcare management systems.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-300" />,
      title: "Finance",
      desc: "Smart financial analytics, fraud detection, and process automation for banking and fintech.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-indigo-300" />,
      title: "Retail",
      desc: "Inventory management, personalized marketing, and predictive analytics for retail businesses.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-indigo-300" />,
      title: "Education",
      desc: "Adaptive learning platforms, student analytics, and AI-driven educational tools.",
    },
  ];

  return (
    <section id="industries" className="relative py-20 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="relative inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-lg text-gray-200 mb-12">
          We provide industry-specific AI, IT, and cloud solutions to drive innovation and efficiency.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-purple-500/20 transition"
            >
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-200 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
