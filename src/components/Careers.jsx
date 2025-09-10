// src/components/Careers.jsx
import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote / Bangalore",
    type: "Full-time",
    description:
      "Build interactive and responsive web applications using React, TailwindCSS, and modern JavaScript frameworks.",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    location: "Remote / Hyderabad",
    type: "Full-time",
    description:
      "Develop AI and ML models for healthcare, finance, and enterprise applications with Python, TensorFlow, or PyTorch.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    location: "Remote / Pune",
    type: "Full-time",
    description:
      "Design, implement, and maintain CI/CD pipelines, cloud infrastructure, and automation for scalable deployments.",
  },
];

function Careers() {
  return (
    <section
      id="careers"
      className="relative py-20 bg-gradient-to-b from-indigo-900/10 to-purple-900/20 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Careers</h2>
        <p className="text-lg text-gray-200 mb-12">
          Join our team of innovators and help us build smarter solutions with AI, Cloud, and Software Development.
        </p>

        {/* Work Culture */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-200">
              Work in a team-driven environment with open communication, knowledge sharing, and innovation.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
            <p className="text-gray-200">
              Remote-friendly options, flexible timings, and a focus on work-life balance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Employee Benefits</h3>
            <p className="text-gray-200">
              Health insurance, learning budget, team events, and growth opportunities.
            </p>
          </div>
        </div>

        {/* Job Openings */}
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-300 mb-1">{job.location}</p>
                <p className="text-gray-300 mb-3">{job.type}</p>
                <p className="text-gray-200 text-sm line-clamp-4">{job.description}</p>
              </div>
              <a
                href="#apply"
                className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Careers;
