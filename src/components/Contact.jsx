// import React from "react";
// import { MapPin, Phone, Mail } from "lucide-react"; // icons

// function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen flex items-center justify-center px-6 py-20"
//     >
//       {/* Background Gradient Overlay */}
//       <div className="relative inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

//       {/* Content */}
//       <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white max-w-6xl w-full grid md:grid-cols-2 gap-10 z-10 shadow-lg">
        
//         {/* Left Side - Office Details */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
//           <p className="mb-6 text-gray-200">
//             We’d love to hear from you! Reach out directly or use the form to
//             discuss how our IT services and AI solutions can help your business grow.
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <MapPin className="w-6 h-6 text-yellow-400" />
//               <p>Chennai, Tamil Nadu, India</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <Phone className="w-6 h-6 text-yellow-400" />
//               <p>+91 98765 43210</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="w-6 h-6 text-yellow-400" />
//               <p>Aiwithus@outlook.com</p>
//             </div>
//           </div>

//           {/* Social Links */}
//           {/* <div className="flex gap-4 mt-6">
//             <a href="#"
//               className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a href="#"
//               className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//           </div> */}
//         </div>

//         {/* Right Side - Contact Form */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
//             Contact Form
//           </h2>
//           <form className="grid gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="5"
//               className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               required
//             ></textarea>

//             {/* File Attachment */}
//             <input
//               type="file"
//               className="p-2 border border-white/30 rounded-lg bg-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-indigo-900 hover:file:bg-yellow-300 focus:outline-none"
//               accept=".pdf,.doc,.docx,.jpg,.png"
//             />

//             <button className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
//               Send Message
//             </button>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      {/* Content */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-10 text-white max-w-6xl w-full grid md:grid-cols-2 gap-10 z-10 shadow-lg">
        
        {/* Left Side - Office Details + Google Map */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-200">
            We’d love to hear from you! Reach out directly or use the form to
            discuss how our IT services and AI solutions can help your business grow.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <p>Chennai, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <p>Aiwithus@outlook.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="AI With Us Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.123456789!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c5b7f5a001%3A0x123456789abcdef!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1693123456789!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Contact Form
          </h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
            <input
              type="file"
              className="p-2 border border-white/30 rounded-lg bg-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-indigo-900 hover:file:bg-yellow-300 focus:outline-none"
              accept=".pdf,.doc,.docx,.jpg,.png"
            />
            <button className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
