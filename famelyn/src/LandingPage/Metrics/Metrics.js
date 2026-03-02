import React from "react";
import { motion } from "framer-motion";
import { Eye, Heart, TrendingUp, BarChart3 } from "lucide-react";
import "./Metrics.css";

const metrics = [
  {
    icon: Eye,
    title: "Profile Views",
    value: "12,450",
    change: "+180%",
    desc: "Monthly profile view growth",
  },
  {
    icon: Heart,
    title: "Engagement Rate",
    value: "8.2%",
    change: "+156%",
    desc: "Average post engagement",
  },
  {
    icon: TrendingUp,
    title: "Connection Growth",
    value: "2,340",
    change: "+240%",
    desc: "New connections per quarter",
  },
  {
    icon: BarChart3,
    title: "Content Reach",
    value: "89K",
    change: "+320%",
    desc: "Average monthly impressions",
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className="metrics-section">
      <div className="metrics-container">

        <motion.div
          className="metrics-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="metrics-badge">Results That Speak</span>
          <h2>Performance Metrics</h2>
          <p>
            Real results from real clients. See the impact of our LinkedIn growth strategies.
          </p>
        </motion.div>

        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <motion.div
              key={m.title}
              className="metric-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <m.icon size={24} className="metric-icon" />
              <h3 className="metric-value">{m.value}</h3>
              <span className="metric-change">{m.change}</span>
              <h4 className="metric-title">{m.title}</h4>
              <p className="metric-desc">{m.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Metrics;