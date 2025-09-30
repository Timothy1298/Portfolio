import React, { useState, useEffect, createContext, useContext } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot"; // ✅ new
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import content from "./data/content";
import { motion } from "framer-motion";

// -------------------- Theme Context --------------------
const ThemeContext = createContext({ theme: "light", toggle: () => {} });
const useTheme = () => useContext(ThemeContext);

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="px-3 py-2 border rounded hover:scale-105 transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

// Language Switcher
const LanguageSwitcher: React.FC<{ lang: string; setLang: (l: string) => void }> = ({ lang, setLang }) => (
  <select
    value={lang}
    onChange={e => setLang(e.target.value)}
    className="px-2 py-1 border rounded text-sm bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-300"
    aria-label="Switch Language"
  >
    <option value="en">English</option>
    <option value="sw">Swahili</option>
  </select>
);

// -------------------- Header --------------------
const Header: React.FC<{ lang: string; setLang: (l: string) => void }> = ({ lang, setLang }) => {
  return (
    <header className="sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">{content.name.split(" ")[0]}</h1>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <ThemeToggle />
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </nav>
      </div>
    </header>
  );
};

// -------------------- Main App --------------------
const App: React.FC = () => {
  // Google Analytics (replace with your GA ID)
  useEffect(() => {
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your real GA ID
    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    }
  }, []);
  // Auto-detect system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  };
  const [theme, setTheme] = useState<"light" | "dark">(getSystemTheme());
  const [lang, setLang] = useState("en");
  const [loading] = useState(false);
  const typedContent = content as {
    name: string;
    title: string;
    summary: string;
    heroCTA: Array<{ label: string; href: string; download?: boolean }>;
    about: {
      bio: string;
      experience: Array<{ role: string; company: string; year: string; details?: string }>;
      education: Array<{ degree: string; school: string; year: string }>;
      certifications: Array<{ name: string; year: string }>;
    };
    skills: {
      languages: string[];
      frameworks: string[];
      databases: string[];
      others: string[];
      stats: Array<{ label: string; value: number }>;
    };
    projects: Array<{
      id: string;
      title: string;
      summary: string;
      tags: string[];
      image: string;
      link: string;
    }>;
    testimonials: Array<{
      name: string;
      role: string;
      feedback: string;
      avatar: string;
    }>;
    blog: Array<{
      id: string;
      title: string;
      date: string;
      summary: string;
      tags: string[];
      link: string;
    }>;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  // Listen for system theme changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Header lang={lang} setLang={setLang} />
        {loading && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-full shadow-lg"
            >
              <svg className="animate-spin w-10 h-10 text-sky-600 dark:text-sky-300" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            </motion.div>
          </div>
        )}
        <main>
          <Hero
            name={typedContent.name}
            title={typedContent.title}
            summary={typedContent.summary}
            cta={typedContent.heroCTA}
          />
          <About
            bio={typedContent.about.bio}
            experience={typedContent.about.experience}
            education={typedContent.about.education}
            certifications={typedContent.about.certifications}
          />
          <Skills
            languages={typedContent.skills.languages}
            frameworks={typedContent.skills.frameworks}
            databases={typedContent.skills.databases}
            others={typedContent.skills.others}
            stats={typedContent.skills.stats}
          />
          <Projects projects={typedContent.projects} />
          <Testimonials testimonials={typedContent.testimonials} />
          <Blog blog={typedContent.blog} />
          <FAQ />
          <Contact />
        </main>
        <div className="flex justify-center py-8">
          <Chatbot />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;