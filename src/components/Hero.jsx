// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Typewriter from "./Typewriter";
// // import aiuser from "../assets/ai_user.png";
// // import Management from "../assets/ai_management.png";
// // import Flowchart from "../assets/ai_flowchart.png";

// // const slides = [
// //   {
// //     id: 1,
// //     title: "Welcome to AI With Us",
// //     subtitle:
// //       "Innovate your business with Artificial Intelligence and Automation. Transform your ideas into reality with our cutting-edge AI solutions.",
// //     img: aiuser,
// //   },
// //   {
// //     id: 2,
// //     title: "AI Management System",
// //     subtitle:
// //       "Streamline all services with our AI-powered management dashboard. Monitor, analyze, and optimize your workflows efficiently.",
// //     img: Management,
// //   },
// //   {
// //     id: 3,
// //     title: "AI Flowchart Visualization",
// //     subtitle:
// //       "Visualize AI processes and data flows with interactive, futuristic diagrams. Simplify complex systems for better decision-making.",
// //     img: Flowchart,
// //   },
// // ];

// // function HeroSlider() {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section
// //       id="home"
// //       className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden"
// //     >
// //       <AnimatePresence>
// //         {slides.map(
// //           (slide, index) =>
// //             index === current && (
// //               <motion.div
// //                 key={slide.id}
// //                 className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6"
// //                 initial={{ opacity: 0, x: 100 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -100 }}
// //                 transition={{ duration: 1 }}
// //               >
// //                 {/* Left Content with typewriter effect */}
// //                 <div className="relative z-10 text-white text-center md:text-left max-w-xl">
// //                   <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
// //                     <Typewriter text={slide.title} />
// //                   </h1>
// //                   <p className="text-lg md:text-xl mb-6">
// //                     <Typewriter text={slide.subtitle} speed={20} />
// //                   </p>
// //                 </div>

// //                 {/* Right Image with PNG glow and edge blur */}
// //                 <div className="relative z-10 mt-10 md:mt-0 md:ml-10 flex flex-col items-center">
// //                   <motion.div
// //                     className="rounded-xl overflow-hidden"
// //                     animate={{ y: [0, -15, 0] }}
// //                     transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
// //                     style={{
// //                       // Glow + edge blur
// //                       filter:
// //                         "drop-shadow(0 0 25px rgba(255, 255, 255, 0.1)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))",
// //                     }}
// //                   >
// //                     <img
// //                       src={slide.img}
// //                       alt={slide.title}
// //                       className="w-72 md:w-96"
// //                       style={{
// //                         maskImage:
// //                           "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
// //                         WebkitMaskImage:
// //                           "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
// //                       }}
// //                     />
// //                   </motion.div>

// //                   {/* Shadow for floating effect */}
// //                   <div className="w-72 md:w-96 h-4 bg-black/20 rounded-full blur-md -mt-4" />
// //                 </div>
// //               </motion.div>
// //             )
// //         )}
// //       </AnimatePresence>

// //       {/* Bottom Navigation Dots */}
// //       <div className="absolute bottom-8 flex space-x-3 z-20">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrent(index)}
// //             className={`w-4 h-4 rounded-full transition-all duration-300 ${
// //               current === index ? "bg-yellow-300" : "bg-white/50 hover:bg-white"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default HeroSlider;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Typewriter from "./Typewriter";
// import aiuser from "../assets/ai_user.png";
// import Management from "../assets/ai_management.png";
// import Flowchart from "../assets/ai_flowchart.png";
// import bgImage from "../assets/background.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Welcome to AI With Us",
//     subtitle:
//       "Innovate your business with Artificial Intelligence and Automation. Transform your ideas into reality with our cutting-edge AI solutions.",
//     img: aiuser,
//   },
//   {
//     id: 2,
//     title: "AI Management System",
//     subtitle:
//       "Streamline all services with our AI-powered management dashboard. Monitor, analyze, and optimize your workflows efficiently.",
//     img: Management,
//   },
//   {
//     id: 3,
//     title: "AI Flowchart Visualization",
//     subtitle:
//       "Visualize AI processes and data flows with interactive, futuristic diagrams. Simplify complex systems for better decision-making.",
//     img: Flowchart,
//   },
// ];

// function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-[6rem] md:pt-[7rem]"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

//       <AnimatePresence mode="wait">
//         {slides.map(
//           (slide, index) =>
//             index === current && (
//               <motion.div
//                 key={slide.id}
//                 className="relative flex flex-col md:flex-row items-center justify-center px-6 z-10 gap-8 md:gap-16"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1 }}
//               >
//                 {/* Text content */}
//                 <div className="relative text-white text-center md:text-left max-w-xl md:max-w-2xl flex-1">
//                   <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
//                     <Typewriter text={slide.title} />
//                   </h1>
//                   <p className="text-xl md:text-2xl mb-6">
//                     <Typewriter text={slide.subtitle} speed={20} />
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <motion.div
//                   className="relative flex-1 flex flex-col items-center justify-center"
//                   initial={{ x: 300, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -300, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
//                 >
//                   <div
//                     className="rounded-xl overflow-hidden"
//                     style={{
//                       filter:
//                         "drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.25))",
//                     }}
//                   >
//                     <img
//                       src={slide.img}
//                       alt={slide.title}
//                     //   className="w-full h-auto max-w-md md:max-w-2xl"
//                       className="max-w-full h-auto sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem] 
//              object-contain rounded-lg shadow-lg p-2"
//                       style={{
//                         maskImage:
//                           "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
//                         WebkitMaskImage:
//                           "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
//                       }}
//                     />
//                   </div>

//                   {/* Shadow */}
//                   {/* <div className="w-full max-w-md md:max-w-2xl h-6 bg-black/25 rounded-full blur-md mt-4" /> */}
//                   <div
//     className="h-6 rounded-full blur-xl mt-4"
//     style={{
//       width: "100%",
//       maxWidth: "30rem", // Match the largest image width
//       background: "rgba(0, 0, 0, 0.50)",
//     }}
//   />
//                 </motion.div>
//               </motion.div>
//             )
//         )}
//       </AnimatePresence>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 flex space-x-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 ${
//               current === index
//                 ? "bg-yellow-300"
//                 : "bg-white/50 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HeroSlider;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "./Typewriter";
import aiuser from "../assets/ai_user.png";
import Management from "../assets/ai_management.png";
import Flowchart from "../assets/ai_flowchart.png";
import bgImage from "../assets/background.jpg";
// import bgVideo from "../assets/background.mp4"; 


const slides = [
  {
    id: 1,
    title: "Welcome to AI With Us",
    subtitle:
      "We are a startup passionate about building smarter solutions using Artificial Intelligence. Together, let’s transform ideas into impactful realities.",
    img: aiuser,
  },
  {
    id: 2,
    title: "Healthcare AI Solutions",
    subtitle:
      "Revolutionizing patient care with AI-driven diagnostics, predictive analytics, and healthcare management systems for better outcomes.",
    img: Management,
  },
  {
    id: 3,
    title: "Smart IT Services",
    subtitle:
      "From cloud integration to AI automation, we provide scalable IT services that help businesses grow smarter and faster.",
    img: Flowchart,
  },
  {
    id: 4,
    title: "Custom Mobile & Web Apps",
    subtitle:
      "Your ideas, our innovation. We design and build tailor-made apps to fit your business and personal needs with AI-powered features.",
    img: aiuser,
  },
  {
    id: 5,
    title: "Why Choose Us?",
    subtitle:
      "Innovation-driven, customer-focused, and future-ready. We combine AI expertise with creativity to deliver reliable, scalable, and impactful solutions.",
    img: Management,
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

//   // Generate floating balls data
//   const balls = Array.from({ length: 12 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 15 + 5, // 5px - 20px
//     top: Math.random() * 100,
//     left: Math.random() * 100,
//     duration: 5 + Math.random() * 5, // 5s - 10s
//     xMovement: (Math.random() - 0.5) * 50, // horizontal movement
//     yMovement: (Math.random() - 0.5) * 50, // vertical movement
//   }));

  return (
    <>
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-[6rem] md:pt-[7rem]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
       {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      {/* Floating Balls */}
      {/* <div className="absolute inset-0 z-5 pointer-events-none">
        {balls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full bg-white/50"
            style={{
              width: `${ball.size}px`,
              height: `${ball.size}px`,
              top: `${ball.top}%`,
              left: `${ball.left}%`,
            }}
            animate={{
              x: [0, ball.xMovement, 0],
              y: [0, ball.yMovement, 0],
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

      {/* Floating Balls 3D */}
{/* Floating Balls 3D White & Yellow */}
<div className="absolute inset-0 z-5 pointer-events-none">
  {Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 20 + 10; // 10px - 30px
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 6; // 6s - 12s
    const xMovement = (Math.random() - 0.5) * 60;
    const yMovement = (Math.random() - 0.5) * 60;
    const color = Math.random() > 0.5 ? "255,255,255" : "255,215,0"; // white or gold/yellow

    return (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background: `radial-gradient(circle at 30% 30%, rgba(${color},0.9), rgba(${color},0.3))`,
        }}
        animate={{
          x: [0, xMovement, 0],
          y: [0, yMovement, 0],
          scale: [1, 1.2, 1], // subtle pulsing
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    );
  })}
</div>



      <AnimatePresence mode="wait">
  {slides.map(
    (slide, index) =>
      index === current && (
        <motion.div
          key={slide.id}
          className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 z-10 gap-8 md:gap-16 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, x: 50 }}     // slide in from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}       // slide out to left
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Text content (LEFT) */}
          <div className="relative text-white text-center md:text-left max-w-xl md:max-w-2xl flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <Typewriter text={slide.title} />
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              <Typewriter text={slide.subtitle} speed={20} />
            </p>
          </div>

          {/* Image (RIGHT) */}
          <motion.div
            className="relative flex-1 flex flex-col items-center md:items-end justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.25))",
              }}
              animate={{
                y: [0, -15, 0], // floating effect
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="max-w-full h-auto sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem] object-contain rounded-lg shadow-lg p-2"
                style={{
                  maskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                }}
              />
            </motion.div>

            {/* Shadow */}
            {/* <div
              className="h-6 rounded-full blur-xl mt-4"
              style={{
                width: "100%",
                maxWidth: "30rem",
                background: "rgba(0, 0, 0, 0.50)",
              }}
            /> */}
          </motion.div>
        </motion.div>
      )
  )}
</AnimatePresence>


      {/* Navigation Dots */}
      <div className="absolute bottom-8 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-yellow-300"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>

     <section className="relative z-20 py-20 bg-gradient-to-b from-transparent to-indigo-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md text-center text-white hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-3">AI Solutions</h3>
          <p>Transform your business with next-gen Artificial Intelligence & automation tools.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md text-center text-white hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-3">Cloud & DevOps</h3>
          <p>Seamless cloud integration, CI/CD pipelines, and DevOps expertise for scalability.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md text-center text-white hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-3">Cybersecurity</h3>
          <p>Robust security frameworks to protect your data, infrastructure, and customers.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSlider;
