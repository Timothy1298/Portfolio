import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  bio: string;
  experience: { role: string; company: string; year: string; details?: string }[];
  education: { degree: string; school: string; year: string }[];
  certifications: { name: string; year: string }[];
}

const About: React.FC<AboutProps> = ({ bio, experience, education, certifications }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  // Fallbacks to prevent .map on undefined
  const safeExperience = Array.isArray(experience) ? experience : [];
  const safeEducation = Array.isArray(education) ? education : [];
  const safeCertifications = Array.isArray(certifications) ? certifications : [];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-white dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
                  <button
                    type="button"
                    onClick={() => window.open('/assets/Timothy_Kuria_CV.pdf', '_blank')}
                    className="px-2 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 transition text-xs ml-2"
                  >
                    Print CV
                  </button>
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          {bio}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ✅ Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <ul className="space-y-3">
              {safeExperience.map((exp, i) => (
                <li key={i} className="text-sm mb-2">
                  <span className="font-semibold text-sky-700 dark:text-sky-300">{exp.role}</span> <span className="text-gray-500">– {exp.company} ({exp.year})</span>
                  {exp.details && <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.details}</p>}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <ul className="space-y-2">
              {safeEducation.map((e, i) => (
                <li key={i} className="text-sm">
                  <span className="font-semibold">{e.degree}</span> – {e.school} ({e.year})
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <ul className="space-y-2">
                {safeCertifications.map((c, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    {c.name} ({c.year})
                    {/* If certificate file exists, show download link. Placeholder for now. */}
                    {/* Example: <a href="/assets/certificates/certificate-name.pdf" download className="text-blue-500 underline text-xs">Download</a> */}
                  </li>
                ))}
                {/* CV Download Link */}
                <li className="text-sm mt-2">
                  <a href="/assets/Timothy_Kuria_CV.pdf" download className="text-blue-500 underline">Download CV (PDF)</a>
                </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;