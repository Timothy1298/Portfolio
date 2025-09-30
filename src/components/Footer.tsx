import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Timothy1298", // replace with your GitHub
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/timothy-kuria", // replace with LinkedIn
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/", // replace with your Twitter/X
    },
  ];

  const [visitorCount, setVisitorCount] = React.useState<number>(0);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const count = parseInt(window.localStorage.visitorCount || '0') + 1;
      window.localStorage.visitorCount = count.toString();
      setVisitorCount(count);
    }
  }, []);

  return (
    <footer className="bg-gradient-to-r from-sky-100 via-white to-purple-100 dark:from-gray-900 dark:via-black dark:to-gray-900 border-t border-sky-200 dark:border-gray-800 py-10 mt-16 relative shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Visitor Counter */}
        <div className="absolute left-6 bottom-6 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded shadow">
          Visitors: <span id="visitor-count">{visitorCount > 0 ? visitorCount : '...'}</span>
        </div>
        {/* Copyright & Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-lg font-semibold text-sky-700 dark:text-sky-300">Timothy Kuria</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Software Developer | Network Specialist | AI & Finance Enthusiast</p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow text-sky-600 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-gray-700 hover:scale-110 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-1 text-sm">
          <a href="#about" className="hover:underline text-sky-600 dark:text-sky-300">About</a>
          <a href="#skills" className="hover:underline text-sky-600 dark:text-sky-300">Skills</a>
          <a href="#projects" className="hover:underline text-sky-600 dark:text-sky-300">Projects</a>
          <a href="#contact" className="hover:underline text-sky-600 dark:text-sky-300">Contact</a>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 p-3 bg-gradient-to-r from-sky-600 to-purple-500 text-white rounded-full shadow-lg hover:bg-sky-700 transition border-2 border-white dark:border-gray-900"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;