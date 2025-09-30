import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* Filter buttons */}
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-md border transition ${
              filter === "All" ? "bg-sky-600 text-white" : "hover:bg-sky-100 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 rounded-md border transition ${
                filter === t ? "bg-sky-600 text-white" : "hover:bg-sky-100 dark:hover:bg-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Animated project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="border rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition-transform hover:scale-[1.02]"
              >
                {/* Project icon/image styled */}
                <div className="flex items-center justify-center h-40 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-gray-800 dark:to-gray-700">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-24 h-24 rounded-full shadow-lg border-4 border-white dark:border-gray-900 object-contain transition-transform duration-300 hover:scale-110"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                    {p.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs border rounded bg-sky-50 dark:bg-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Modal button */}
                  <button
                    onClick={() => setModal(p)}
                    className="inline-block mt-4 px-4 py-2 border rounded text-sky-600 hover:bg-sky-600 hover:text-white transition"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal popup for project details */}
        {modal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 text-xl text-gray-400 hover:text-sky-600"
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <div className="flex items-center justify-center mb-4">
                <img src={modal.image} alt={modal.title} className="w-28 h-28 rounded-full shadow-lg border-4 border-white dark:border-gray-900 object-contain" />
              </div>
              <h3 className="font-bold text-2xl mb-2">{modal.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{modal.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modal.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs border rounded bg-sky-50 dark:bg-gray-700">{t}</span>
                ))}
              </div>
              {/* Visit Project button removed as requested */}
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;