import React, { useState } from "react";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link: string;
}

interface BlogProps {
  blog: Article[];
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const [search, setSearch] = useState("");
  const filtered = blog.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.summary.toLowerCase().includes(search.toLowerCase()) ||
    a.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Blog & Articles</h2>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 rounded border bg-white dark:bg-gray-800 text-sky-700 dark:text-sky-300"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col"
            >
              <span className="text-xs text-gray-500 mb-2">{a.date}</span>
              <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{a.summary}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {a.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs border rounded bg-sky-50 dark:bg-gray-700">{t}</span>
                ))}
              </div>
              <a href={a.link} className="mt-auto inline-block px-4 py-2 border rounded text-sky-600 hover:bg-sky-600 hover:text-white transition">Read More</a>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">No articles found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;