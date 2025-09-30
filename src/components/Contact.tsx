import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);
  // Hide success message after 4 seconds
  React.useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [sent]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState<{ name: boolean; email: boolean; message: boolean }>({ name: false, email: false, message: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.type === "file") {
      const input = e.target as HTMLInputElement;
      setFile(input.files?.[0] || null);
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isNameValid = form.name.trim().length > 0;
  const isEmailValid = validateEmail(form.email);
  const isMessageValid = form.message.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields (file upload is optional).");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    // Prepare EmailJS params
    const params: any = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };
    if (file) {
      params.attachment = file;
    }

    emailjs
      .send(
        "service_adl8gec", // EmailJS Service ID
        "template_26f5l4p", // EmailJS Template ID
        params,
        "uep77a4F699pj4DXJ" // EmailJS Public Key
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setFile(null);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to send message. Please try again later.");
        console.error("Email error:", err);
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full p-3 rounded border bg-gray-50 dark:bg-gray-700 ${touched.name && !isNameValid ? 'border-red-500' : ''}`}
          />
          {/* Phone number display */}
          <div className="w-full p-3 rounded border bg-gray-50 dark:bg-gray-700 flex items-center justify-between">
            <div>
              <span className="font-semibold text-sky-700 dark:text-sky-300 mr-2">Phone:</span>
              <a href="tel:+254748386783" className="text-sky-600 dark:text-sky-300 underline">+254 748 386 783</a>
            </div>
            <a href="/Timothy_Kuria.vcf" download className="px-3 py-1 rounded bg-sky-600 text-white hover:bg-sky-700 transition text-xs ml-2">Download vCard</a>
            <button
              type="button"
              onClick={() => window.open('/assets/Timothy_Kuria_CV.pdf', '_blank')}
              className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 transition text-xs ml-2"
            >
              Print CV
            </button>
          </div>
          {touched.name && !isNameValid && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500">Name is required.</motion.p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full p-3 rounded border bg-gray-50 dark:bg-gray-700 ${touched.email && !isEmailValid ? 'border-red-500' : ''}`}
          />
          {touched.email && !isEmailValid && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500">Enter a valid email address.</motion.p>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            required
            className={`w-full p-3 rounded border bg-gray-50 dark:bg-gray-700 ${touched.message && !isMessageValid ? 'border-red-500' : ''}`}
          ></textarea>
          {/* File upload */}
          <label className="block text-xs text-gray-500 mb-1">File upload (optional):</label>
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
            onChange={handleChange}
            className="w-full p-3 rounded border bg-gray-50 dark:bg-gray-700"
          />
          {file && (
            <div className="text-xs text-gray-500 mt-1">Attached: {file.name}</div>
          )}
          {touched.message && !isMessageValid && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500">Message is required.</motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-600 dark:text-red-400"
          >
            ❌ {error}
          </motion.p>
        )}
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center mt-4"
          >
            <svg className="w-12 h-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 dark:text-green-400">Message sent successfully! I’ll get back to you soon.</motion.p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;