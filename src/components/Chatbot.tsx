import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m Timothy’s AI assistant. You can ask me about his skills, projects, and experience." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 p-4 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition"
      >
        <FaComments />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-sky-600 text-white">
              <h3 className="font-semibold">AI Assistant</h3>
              <button onClick={() => setOpen(false)} className="text-lg">
                <FaTimes />
              </button>
            </div>

            {/* Body: Conversation */}
            <div className="p-4 flex-1 text-sm text-gray-700 dark:text-gray-300 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={msg.sender === "bot" ? "text-left" : "text-right"}>
                  <span className={msg.sender === "bot"
                    ? "inline-block bg-sky-100 dark:bg-gray-700 text-sky-800 dark:text-sky-200 px-3 py-2 rounded-lg"
                    : "inline-block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-2 rounded-lg"}
                  >{msg.text}</span>
                </div>
              ))}
              {loading && (
                <div className="text-left">
                  <span className="inline-block bg-sky-100 dark:bg-gray-700 text-sky-800 dark:text-sky-200 px-3 py-2 rounded-lg animate-pulse">Thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              className="p-2 border-t dark:border-gray-700"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!input.trim()) return;
                setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
                setLoading(true);
                try {
                  const res = await fetch("http://localhost:3001/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ question: input }),
                  });
                  const data = await res.json();
                  setMessages((msgs) => [...msgs, { sender: "bot", text: data.answer }]);
                } catch (err) {
                  setMessages((msgs) => [...msgs, { sender: "bot", text: "Sorry, I couldn't fetch an answer." }]);
                }
                setInput("");
                setLoading(false);
              }}
            >
              <input
                type="text"
                placeholder="Type a question..."
                className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;