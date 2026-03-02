import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  FileText,
  Network,
  BarChart3,
  Award,
  Palette,
} from "lucide-react";
import "./Services.css";

const servicesData = [
  {
    icon: UserCheck,
    title: "Profile Optimization",
    desc: "Craft a compelling LinkedIn profile that attracts the right opportunities and connections.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Develop engaging content plans that position you as a thought leader in your industry.",
  },
  {
    icon: Network,
    title: "Network Growth",
    desc: "Strategically expand your professional network with meaningful, high-value connections.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Track and optimize your LinkedIn performance with detailed data-driven insights.",
  },
  {
    icon: Award,
    title: "Thought Leadership",
    desc: "Establish your authority and influence through strategic thought leadership positioning.",
  },
  {
    icon: Palette,
    title: "Brand Development",
    desc: "Build a cohesive personal brand that resonates across all professional touchpoints.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="service">
      <div className="services-container">

        {/* Heading */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-badge">What We Offer</span>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive LinkedIn growth solutions tailored to elevate your professional brand.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="service-icon-wrapper">
                <service.icon size={26} className="service-icon" />
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;