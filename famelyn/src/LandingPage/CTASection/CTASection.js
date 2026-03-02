// CTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">
            Transform Your LinkedIn <br /> Presence
          </h2>

          <p className="cta-description">
            Join me for a complimentary 15-minute strategy session.
            Discover how we can elevate your professional brand and
            unlock new opportunities.
          </p>

          <a href="#contact" className="cta-button">
            Book a Free Strategy Call
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;