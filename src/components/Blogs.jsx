// src/components/Blog.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "AI in Healthcare: Transforming Patient Care",
    date: "Aug 15, 2025",
    excerpt:
      "Discover how AI-powered platforms are revolutionizing diagnostics, patient monitoring, and healthcare management.",
    link: "#",
  },
  {
    id: 2,
    title: "Cloud Adoption Trends in 2025",
    date: "Jul 30, 2025",
    excerpt:
      "Explore the latest cloud computing strategies, multi-cloud solutions, and how enterprises are scaling efficiently.",
    link: "#",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Startups",
    date: "Jul 10, 2025",
    excerpt:
      "Learn how to protect your digital assets with modern security frameworks, automation, and monitoring tools.",
    link: "#",
  },
  {
    id: 4,
    title: "AI Automation in Business Operations",
    date: "Jun 25, 2025",
    excerpt:
      "Maximizing productivity with AI-driven workflows, predictive analytics, and intelligent decision-making.",
    link: "#",
  },
];

function Blog() {
  const [index, setIndex] = useState(0);

  const nextPost = () => setIndex((prev) => (prev + 1) % blogPosts.length);
  const prevPost = () =>
    setIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextPost();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Circular helper
  const getPost = (offset) => {
    return blogPosts[(index + offset + blogPosts.length) % blogPosts.length];
  };

  return (
    <section
      id="blog"
      className="relative py-20 text-white overflow-hidden select-none"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-600/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog / Insights</h2>
        <p className="text-lg text-gray-200 mb-12">
          Stay updated with our latest articles on AI, cloud, IT, and industry trends.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevPost}
            className="absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition z-20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {/* Left blurred card */}
            <motion.div
              key={index - 1}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-between blur-sm"
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {getPost(-1).title}
              </h3>
              <p className="text-gray-300 text-sm">{getPost(-1).date}</p>
              <p className="text-gray-200 text-sm line-clamp-3">
                {getPost(-1).excerpt}
              </p>
            </motion.div>

            {/* Center main card */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-80 h-72 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {getPost(0).title}
              </h3>
              <p className="text-gray-300 text-sm">{getPost(0).date}</p>
              <p className="text-gray-200 text-sm line-clamp-4">{getPost(0).excerpt}</p>
              <a
                href={getPost(0).link}
                className="mt-3 text-yellow-300 font-medium hover:underline text-left"
              >
                Read More
              </a>
            </motion.div>

            {/* Right blurred card */}
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 w-64 h-64 flex flex-col justify-between blur-sm"
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {getPost(1).title}
              </h3>
              <p className="text-gray-300 text-sm">{getPost(1).date}</p>
              <p className="text-gray-200 text-sm line-clamp-3">
                {getPost(1).excerpt}
              </p>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextPost}
            className="absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition z-20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
