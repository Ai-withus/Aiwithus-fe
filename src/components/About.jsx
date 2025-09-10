// import React from "react";

// function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">About Us</h2>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           At <strong>AI With Us</strong>, we specialize in delivering AI-driven solutions 
//           that improve efficiency, productivity, and customer experience. 
//           Our mission is to make artificial intelligence accessible to every business.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      {/* Gradient background overlay */}
      <div className="relative inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      {/* Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white max-w-6xl w-full shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

        {/* Company History */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">Our Journey</h3>
          <p className="text-lg leading-relaxed">
            Founded in <span className="font-semibold">2025</span>, <strong>AI With Us </strong> 
            started as a small team of innovators passionate about Artificial Intelligence and 
            cloud technologies. Over the years, we have grown into a trusted technology partner, 
            delivering AI-driven solutions across multiple industries including healthcare, finance, 
            and retail.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p>
              To empower businesses and individuals by making AI and digital 
              innovation accessible, impactful, and practical.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p>
              To be a global leader in next-gen AI solutions, shaping a smarter, 
              more connected world.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-bold mb-2">Values</h3>
            <p>
              Innovation, Integrity, Collaboration, and Customer-Centric Excellence.
            </p>
          </div>
        </div>

        {/* Team Section (optional) */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-center">Our Team</h3>
          <p className="text-lg leading-relaxed text-center mb-6">
            Behind every solution is a diverse team of AI engineers, cloud experts, 
            and cybersecurity professionals who work tirelessly to bring ideas to life.
          </p>
              {/* Example team members (replace with real images later) */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/20 mb-3" />
              <h4 className="font-bold">Dinesh Babu</h4>
              <p className="text-sm opacity-80">Founder & CEO</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/20 mb-3" />
              <h4 className="font-bold">Priya Sharma</h4>
              <p className="text-sm opacity-80">AI Lead</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/20 mb-3" />
              <h4 className="font-bold">Rahul Mehta</h4>
              <p className="text-sm opacity-80">Cloud Architect</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
