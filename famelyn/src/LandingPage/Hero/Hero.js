import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";
import "./Hero.css";

const stats = [
  { icon: Users, label: "Followers", value: "12.4K", change: "+24%" },
  { icon: BarChart3, label: "Impressions", value: "89K", change: "+156%" },
  { icon: TrendingUp, label: "Engagement", value: "8.2%", change: "+42%" },
];

const HeroLandingPage = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            LinkedIn Growth Partner
          </span>

          <h1 className="hero-title">
            Transform Your <span className="gradient-text">LinkedIn Presence</span> with Famelyn
          </h1>

          <p className="hero-description">
            We help you stand out, connect better, and unlock career
            opportunities through data-driven strategies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Book a Free Strategy Call
              <ArrowRight size={18} />
            </a>

            <a href="#service" className="btn-secondary">
              Our Services
            </a>
          </div>
        </motion.div>

        {/* RIGHT DASHBOARD */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="dashboard-card">

            <div className="dashboard-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>LinkedIn Analytics</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <stat.icon size={18} className="stat-icon" />
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                  <span className="stat-change">{stat.change}</span>
                </div>
              ))}
            </div>

            {/* Animated Bars */}
            <div className="bars-container">
              {[40, 55, 35, 70, 50, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                />
              ))}
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            className="floating-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="floating-label">Profile Views</p>
            <p className="floating-value">+200%</p>
            <p className="floating-sub">This month</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroLandingPage;