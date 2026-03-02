import React from "react";
import { motion } from "framer-motion";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";
import "./Process.css";

const stepsData = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We audit your current LinkedIn presence and identify key growth opportunities.",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "A tailored roadmap designed around your goals, industry, and target audience.",
  },
  {
    icon: Rocket,
    title: "Execute",
    desc: "We implement optimizations across your profile, content, and network strategy.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Monitor results, refine tactics, and scale your professional influence.",
  },
];

const Process = () => {
  return (
    <section className="process-section" id="about">
      <div className="process-container">

        {/* Header */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-badge">How It Works</span>
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">
            A proven four-step framework to transform your LinkedIn presence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="process-grid">

          {/* Connector line (desktop only) */}
          <div className="process-line" />

          {stepsData.map((step, index) => (
            <motion.div
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="process-icon-wrapper">
                <step.icon size={28} />
              </div>

              <span className="process-step-label">
                Step {index + 1}
              </span>

              <h3 className="process-step-title">
                {step.title}
              </h3>

              <p className="process-step-desc">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Process;