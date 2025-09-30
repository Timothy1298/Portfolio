import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillsChart from "./SkillsChart";

interface SkillsProps {
  languages: string[];
  frameworks: string[];
  databases: string[];
  others: string[];
  stats: { label: string; value: number }[];
}

// ✅ Counter animation (fixed)
const Counter: React.FC<{ value: number }> = ({ value }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Motion value that drives animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      className={
        `text-4xl font-bold ` +
        (value > 10 ? "text-orange-500 dark:text-orange-400" :
         value > 5 ? "text-emerald-500 dark:text-emerald-400" :
         "text-sky-600 dark:text-sky-300")
      }
    >
      {display}+
    </motion.span>
  );
};

const Skills: React.FC<SkillsProps> = ({
  languages,
  frameworks,
  databases,
  others,
  stats,
}) => {
  // ✅ Chart data for SkillsChart with distinct colors
  const chartData = [
    { name: "Languages", level: 80, fill: "#0284c7" },      // sky-600
    { name: "Frameworks", level: 70, fill: "#f59e42" },     // orange-400
    { name: "Databases", level: 65, fill: "#10b981" },      // emerald-500
    { name: "Other Tools", level: 60, fill: "#a78bfa" },    // purple-400
  ];

  const all = [
    { category: "Languages", items: languages },
    { category: "Frameworks", items: frameworks },
    { category: "Databases", items: databases },
    { category: "Other Tools", items: others },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ✅ Skill categories */}
          <div className="flex-1 min-w-0">
            {all.map((cat, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border rounded-full text-sm bg-sky-50 dark:bg-gray-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* ✅ Animated counters */}
            <div className="flex gap-6 mt-8 flex-wrap">
              {stats.map((st, i) => (
                <div key={i} className="text-center flex-1 min-w-[120px]">
                  <Counter value={st.value} />
                  <p className="text-gray-700 dark:text-gray-400">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Chart (encapsulated in SkillsChart) */}
          <div className="flex-1 min-w-0 flex items-center justify-center">
            <SkillsChart data={chartData} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;