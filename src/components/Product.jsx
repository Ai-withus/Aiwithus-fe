// src/components/Products.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

/**
 * Products Component
 *
 * - Replace screenshots (placeholder URLs) with your local imports or real images.
 * - Replace demo links / learn more links with real URLs.
 */

const sampleProducts = [
  {
    id: "p1",
    title: "HealthAI Suite",
    tagline: "AI diagnostics & reporting for hospitals",
    desc:
      "A HIPAA-aware analytics dashboard that uses ML models to flag abnormal vitals, auto-generate reports and provide clinician alerts.",
    tech: ["Python", "TensorFlow", "React", "Postgres"],
    screenshots: [
      "https://via.placeholder.com/900x600?text=HealthAI+1",
      "https://via.placeholder.com/900x600?text=HealthAI+2",
      "https://via.placeholder.com/900x600?text=HealthAI+3",
    ],
    demo: "#",
    learnMore: "#",
  },
  {
    id: "p2",
    title: "CloudOps Manager",
    tagline: "Cloud cost & infra automation",
    desc:
      "Automates cloud housekeeping, cost reporting and infra-as-code deployments across AWS/GCP/Azure with policy-driven actions.",
    tech: ["Terraform", "Node.js", "Kubernetes"],
    screenshots: [
      "https://via.placeholder.com/900x600?text=CloudOps+1",
      "https://via.placeholder.com/900x600?text=CloudOps+2",
    ],
    demo: "#",
    learnMore: "#",
  },
  {
    id: "p3",
    title: "ChatAssist SDK",
    tagline: "Conversational SDK for apps",
    desc:
      "Embed intelligent conversational experiences into mobile & web apps with offline-first caching and RAG support for enterprise docs.",
    tech: ["React Native", "TypeScript", "SQLite"],
    screenshots: [
      "https://via.placeholder.com/900x600?text=ChatAssist+1",
      "https://via.placeholder.com/900x600?text=ChatAssist+2",
      "https://via.placeholder.com/900x600?text=ChatAssist+3",
      "https://via.placeholder.com/900x600?text=ChatAssist+4",
    ],
    demo: "#",
    learnMore: "#",
  },
];

function Products({ products = sampleProducts }) {
  const [openProduct, setOpenProduct] = useState(null); // product object
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (!openProduct) return;
    // reset carousel index when opening a new product
    setCarouselIndex(0);
  }, [openProduct]);

  // keyboard support for modal (Esc to close, arrows to navigate)
  useEffect(() => {
    const onKey = (e) => {
      if (!openProduct) return;
      if (e.key === "Escape") setOpenProduct(null);
      if (e.key === "ArrowRight")
        setCarouselIndex((i) => (i + 1) % openProduct.screenshots.length);
      if (e.key === "ArrowLeft")
        setCarouselIndex((i) =>
          (i - 1 + openProduct.screenshots.length) %
            openProduct.screenshots.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openProduct]);

  return (
    <section id="products" className="relative py-20 bg-transparent text-white">
      <div className="relative inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-purple-900/10 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Products & Tools</h2>
        <p className="text-gray-300 mb-12">
          Showcase of our software products, demos, and screenshots.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.article
              key={p.id}
              layout
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-5 shadow-md overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="rounded-lg overflow-hidden mb-4 bg-black/20 h-44 flex items-center justify-center">
                {/* show first screenshot as thumbnail */}
                <img
                  src={p.screenshots?.[0] || "https://via.placeholder.com/900x600"}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-yellow-300 text-sm mt-1">{p.tagline}</p>
              <p className="text-gray-300 text-sm mt-3 line-clamp-3">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white/6 rounded-md text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => {
                    setOpenProduct(p);
                    setCarouselIndex(0);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/90 text-black rounded-lg font-medium shadow hover:brightness-95 transition"
                >
                  <PlayCircle className="w-5 h-5" />
                  View Demo
                </button>

                <a
                  href={p.learnMore}
                  className="ml-2 text-sm text-gray-200 underline underline-offset-2"
                >
                  Learn more
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpenProduct(null)}
            />

            {/* Modal content */}
            <motion.div
              className="relative z-10 max-w-4xl w-full mx-4 rounded-xl overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-white/5 backdrop-blur-md p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{openProduct.title}</h3>
                  <p className="text-sm text-gray-300">{openProduct.tagline}</p>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setOpenProduct(null)}
                  className="p-2 rounded-md hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Carousel area */}
              <div className="bg-black/20 p-6 flex items-center gap-4">
                <button
                  onClick={() =>
                    setCarouselIndex((i) =>
                      (i - 1 + openProduct.screenshots.length) %
                      openProduct.screenshots.length
                    )
                  }
                  className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex-1">
                  <div className="w-full h-[420px] rounded-md overflow-hidden bg-black/30 flex items-center justify-center">
                    <img
                      src={openProduct.screenshots[carouselIndex]}
                      alt={`${openProduct.title} - ${carouselIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* thumbnails */}
                  <div className="mt-3 flex gap-2 items-center justify-center overflow-x-auto">
                    {openProduct.screenshots.map((sh, idx) => (
                      <button
                        key={sh}
                        onClick={() => setCarouselIndex(idx)}
                        className={`w-20 h-12 rounded-md overflow-hidden border ${
                          idx === carouselIndex
                            ? "border-yellow-400"
                            : "border-transparent"
                        }`}
                      >
                        <img src={sh} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    setCarouselIndex((i) => (i + 1) % openProduct.screenshots.length)
                  }
                  className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* modal footer */}
              <div className="bg-white/4 p-4 flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  {carouselIndex + 1} / {openProduct.screenshots.length} screenshots
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={openProduct.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-yellow-400/90 text-black rounded-md"
                  >
                    Open Demo
                  </a>
                  <a
                    href={openProduct.learnMore}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-white/10 rounded-md text-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Products;
