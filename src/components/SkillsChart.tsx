import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillsChartProps {
  data: { name: string; level: number; fill: string }[];
}

const SkillsChart: React.FC<SkillsChartProps> = ({ data }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-80"
    >
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          barSize={15}
          data={data}
          startAngle={90}
          endAngle={-270} // full clockwise circle
        >
            <RadialBar
              background
              dataKey="level"
              label={{ position: "insideStart", fill: "#fff" }}
              cornerRadius={10}
              // Use colors from data array
              fill={undefined}
            />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SkillsChart;