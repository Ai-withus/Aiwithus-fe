// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya R.",
    company: "MediCare Hospital",
    feedback:
      "AI With Us developed an AI monitoring system that drastically improved our patient response time.",
    logo: "/logos/medicare.png",
  },
  {
    id: 2,
    name: "Mr. Arjun K.",
    company: "FinTech Corp",
    feedback:
      "Their fraud detection AI helped reduce transaction fraud by 35% in just 6 months.",
    logo: "/logos/fintech.png",
  },
  {
    id: 3,
    name: "Ms. Kavya S.",
    company: "RetailPro",
    feedback:
      "The smart inventory AI system optimized our stock levels and improved turnover significantly.",
    logo: "/logos/retailpro.png",
  },
  {
    id: 4,
    name: "Mr. Ramesh T.",
    company: "EduTech",
    feedback:
      "AI With Us created adaptive learning modules that increased student engagement by 30%.",
    logo: "/logos/edutech.png",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTestimonial = (offset) => {
    return testimonials[(index + offset + testimonials.length) % testimonials.length];
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-900/10 to-purple-900/20 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-300 mb-12">
          What our clients say about us.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition z-20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {/* Left (blurred) */}
            <motion.div
              key={index - 1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <img
                src={getTestimonial(-1).logo}
                alt={getTestimonial(-1).company}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <p className="text-gray-200 text-sm line-clamp-3">
                {getTestimonial(-1).feedback}
              </p>
              <p className="mt-2 text-yellow-300 font-medium text-sm">
                {getTestimonial(-1).name}, {getTestimonial(-1).company}
              </p>
            </motion.div>

            {/* Center (main) */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-80 h-72 flex flex-col justify-center"
            >
              <img
                src={getTestimonial(0).logo}
                alt={getTestimonial(0).company}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <p className="text-gray-200">{getTestimonial(0).feedback}</p>
              <p className="mt-2 text-yellow-400 font-semibold">
                {getTestimonial(0).name}, {getTestimonial(0).company}
              </p>
            </motion.div>

            {/* Right (blurred) */}
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <img
                src={getTestimonial(1).logo}
                alt={getTestimonial(1).company}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <p className="text-gray-200 text-sm line-clamp-3">
                {getTestimonial(1).feedback}
              </p>
              <p className="mt-2 text-yellow-300 font-medium text-sm">
                {getTestimonial(1).name}, {getTestimonial(1).company}
              </p>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition z-20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
