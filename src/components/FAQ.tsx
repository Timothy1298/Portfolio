import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Node.js, PHP, MySQL, networking, and AI-driven financial systems.",
  },
  {
    question: "How can I contact you for a project?",
    answer: "You can use the contact form below or email me directly at Tkuria30@gmail.com.",
  },
  {
    question: "Do you offer remote work or consulting?",
    answer: "Yes, I am available for remote projects and consulting opportunities.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border rounded-lg p-4 bg-sky-50 dark:bg-gray-900"
            >
              <button
                className="w-full text-left font-semibold text-sky-700 dark:text-sky-300"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.question}
              </button>
              {open === i && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-gray-700 dark:text-gray-300"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
