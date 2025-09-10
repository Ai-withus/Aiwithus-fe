// src/components/CaseStudies.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "MediCare Hospital",
    project: "AI Patient Monitoring System",
    desc: "Implemented AI-based monitoring that reduced response time to patient alerts by 40%.",
    result: "Improved patient safety and operational efficiency.",
  },
  {
    id: 2,
    client: "FinTech Corp",
    project: "Fraud Detection AI Engine",
    desc: "Developed ML models to detect fraudulent transactions in real-time.",
    result: "Reduced fraudulent activities by 35% within 6 months.",
  },
  {
    id: 3,
    client: "RetailPro",
    project: "Smart Inventory Management",
    desc: "Built predictive AI system for inventory forecasting and supply chain optimization.",
    result: "Decreased overstock by 25% and improved stock turnover.",
  },
  {
    id: 4,
    client: "HealthPlus",
    project: "Telemedicine AI Assistant",
    desc: "Implemented AI assistant to triage patient requests and schedule appointments.",
    result: "Enhanced patient satisfaction and reduced admin workload.",
  },
  {
    id: 5,
    client: "EduTech",
    project: "Adaptive Learning Platform",
    desc: "Created AI-driven adaptive learning modules for personalized student experience.",
    result: "Increased student engagement and completion rates by 30%.",
  },
];

function CaseStudies() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  // Helper to get circular index
  const getStudy = (offset) => caseStudies[(index + offset + caseStudies.length) % caseStudies.length];

  return (
    <section id="case-studies" className="relative py-20 text-white overflow-hidden select-none">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Case Studies / Portfolio</h2>
        <p className="text-lg text-gray-200 mb-12">
          Projects completed with clients and measurable results.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {/* Left blurred card */}
            <motion.div
              key={index - 1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <h3 className="text-lg font-semibold mb-1">{getStudy(-1).project}</h3>
              <p className="text-sm text-gray-300 mb-2">{getStudy(-1).client}</p>
              <p className="text-gray-200 text-sm mb-2 line-clamp-3">{getStudy(-1).desc}</p>
              <p className="text-yellow-300 text-sm font-medium">{getStudy(-1).result}</p>
            </motion.div>

            {/* Center main card */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-80 h-72 flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-1">{getStudy(0).project}</h3>
              <p className="text-sm text-gray-300 mb-2">{getStudy(0).client}</p>
              <p className="text-gray-200 text-sm mb-2 line-clamp-3">{getStudy(0).desc}</p>
              <p className="text-yellow-300 text-sm font-medium">{getStudy(0).result}</p>
            </motion.div>

            {/* Right blurred card */}
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <h3 className="text-lg font-semibold mb-1">{getStudy(1).project}</h3>
              <p className="text-sm text-gray-300 mb-2">{getStudy(1).client}</p>
              <p className="text-gray-200 text-sm mb-2 line-clamp-3">{getStudy(1).desc}</p>
              <p className="text-yellow-300 text-sm font-medium">{getStudy(1).result}</p>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
