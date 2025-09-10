// import React from "react";
// import { Stethoscope, Laptop, BugPlay } from "lucide-react"; // npm i lucide-react

// function Services() {
//   const services = [
//     {
//       icon: <Stethoscope className="w-12 h-12 text-indigo-300" />,
//       title: "Healthcare Solutions",
//       desc: "AI-powered platforms designed to enhance patient care, streamline hospital operations, and support smarter healthcare decisions."
//     },
//     {
//       icon: <Laptop className="w-12 h-12 text-indigo-300" />,
//       title: "IT Services",
//       desc: "End-to-end application and website development, combined with robust automation testing to ensure quality and scalability."
//     },
//     {
//       icon: <BugPlay className="w-12 h-12 text-indigo-300" />,
//       title: "Custom Applications",
//       desc: "Tailor-made mobile and web applications built to match your unique requirements and deliver seamless user experiences."
//     }
//   ];

//   return (
//     <section id="services" className="relative py-20 text-white overflow-hidden">
//       {/* Transparent Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

//       {/* Foreground Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//         <p className="text-lg text-gray-200 mb-12">
//           Innovating across industries with AI-driven solutions, IT expertise, and custom app development.
//         </p>

//         <div className="grid md:grid-cols-3 gap-12">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
//             >
//               <div className="mb-4 flex justify-center">{s.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//               <p className="text-gray-200">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React, { useState, useEffect } from "react";
import {
  Stethoscope,
  Laptop,
  Cpu,
  Cloud,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-indigo-300" />,
      title: "Software Development",
      desc: "Custom web and mobile applications built with scalability, security, and performance in mind.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-indigo-300" />,
      title: "Cloud Solutions",
      desc: "Cloud-native applications, migration, and management services for agility and cost efficiency.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-300" />,
      title: "Artificial Intelligence",
      desc: "AI-powered platforms for predictive analytics, automation, and intelligent decision-making.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-indigo-300" />,
      title: "Cybersecurity",
      desc: "Comprehensive security services to protect your digital assets and ensure compliance.",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-indigo-300" />,
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, monitoring, and infrastructure automation for faster deployments.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextService = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Helper to get circular index
  const getService = (offset) => {
    return services[(index + offset + services.length) % services.length];
  };

  return (
    <section
      id="services"
      className="relative py-20 text-white overflow-hidden select-none"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-200 mb-12">
          Innovating across industries with cutting-edge AI, scalable IT
          solutions, and secure cloud services.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevService}
            className="absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {/* Left (blurred smaller card) */}
            <motion.div
              key={index - 1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <div className="mb-4 flex justify-center">
                {getService(-1).icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {getService(-1).title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-3">
                {getService(-1).desc}
              </p>
            </motion.div>

            {/* Center (main card) */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-80 h-72 flex flex-col justify-center"
            >
              <div className="mb-4 flex justify-center">
                {getService(0).icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getService(0).title}
              </h3>
              <p className="text-gray-200">{getService(0).desc}</p>
            </motion.div>

            {/* Right (blurred smaller card) */}
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-center blur-sm"
            >
              <div className="mb-4 flex justify-center">
                {getService(1).icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {getService(1).title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-3">
                {getService(1).desc}
              </p>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextService}
            className="absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;



