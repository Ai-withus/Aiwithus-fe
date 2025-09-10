import React from "react";
import "./Person.css"; // custom styles

const Person = () => {
  return (
    <section id="person" className="relative min-h-screen flex justify-center items-center">
      {/* Gradient Overlay */}
      <div className="relative inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      {/* Card */}
      <div className="relative z-10 flex justify-center items-center py-10">
        <div className="person-card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                src="https://via.placeholder.com/200"
                alt="Person"
                className="rounded-full w-40 h-40 object-cover shadow-lg"
              />
              <h2 className="text-xl font-semibold mt-4 text-white">John Doe</h2>
              <p className="text-gray-200">Senior Developer</p>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <h2 className="text-xl font-semibold mb-2 text-white">John Doe</h2>
              <p className="text-gray-200">Position: Senior Developer</p>
              <p className="text-gray-200">Email: john@example.com</p>
              <p className="text-gray-200">Phone: +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Person;
