import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, ThumbsUp } from "lucide-react";
import "./Stats.css";

const statsData = [
  { icon: Users, value: "500+", label: "Profiles Optimized" },
  { icon: TrendingUp, value: "200%", label: "Average Growth" },
  { icon: ThumbsUp, value: "98%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stats-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="stats-icon-wrapper">
                <stat.icon size={26} className="stats-icon" />
              </div>

              <h2 className="stats-value">{stat.value}</h2>
              <p className="stats-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;