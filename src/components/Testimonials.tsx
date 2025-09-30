import React, { useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
        <div className="flex justify-center items-center gap-6">
          <button onClick={prev} className="p-2 text-sky-600 dark:text-sky-300 text-2xl hover:scale-110 transition">&#8592;</button>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-sky-50 dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center min-w-[260px]"
          >
            <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-16 h-16 rounded-full mb-4 border-2 border-sky-300" />
            <p className="text-gray-700 dark:text-gray-300 italic mb-3">“{testimonials[index].feedback}”</p>
            <span className="font-semibold text-sky-700 dark:text-sky-300">{testimonials[index].name}</span>
            <span className="text-xs text-gray-500">{testimonials[index].role}</span>
          </motion.div>
          <button onClick={next} className="p-2 text-sky-600 dark:text-sky-300 text-2xl hover:scale-110 transition">&#8594;</button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-sky-600' : 'bg-gray-300 dark:bg-gray-700'} transition`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;