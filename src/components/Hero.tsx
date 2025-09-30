import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  cta: { label: string; href: string; download?: boolean }[];
}

const Hero: React.FC<HeroProps> = ({ name, title, summary, cta }) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="min-h-[70vh] flex items-center bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content with animations */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-3"
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-700 dark:text-sky-300 mb-4"
          >
            {title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 max-w-lg text-gray-700 dark:text-gray-300"
          >
            {summary}
          </motion.p>

          <motion.div
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {cta.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.download ? { download: true } : {})}
                className="px-5 py-2 rounded-md border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition"
              >
                {c.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile image with zoom-in effect */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-sky-200 dark:ring-sky-700 flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-gray-900 dark:to-black">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User Icon"
              className="w-44 h-44 object-contain rounded-full"
            />
          </div>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Timothy1298" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 text-2xl hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://linkedin.com/in/timothy-kuria" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 text-2xl hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 text-2xl hover:scale-110 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 1.997 1.397 3.872 3.448 4.292a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-8">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sky-600 dark:text-sky-300 text-3xl animate-bounce">
            ↓
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scroll Down</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;