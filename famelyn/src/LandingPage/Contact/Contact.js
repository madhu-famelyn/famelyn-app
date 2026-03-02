// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
    _honey: "",
    _captcha: "false"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/xanjlkyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          message: "",
          _honey: "",
          _captcha: "false"
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">Let’s Connect</h2>
          <p className="contact-subtitle">
            Ready to elevate your LinkedIn presence? We're here to help.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Phone size={26} className="contact-icon" />
              <h3>Schedule a Strategy Call</h3>
              <p>Book a complimentary 15-minute consultation</p>

              <a
                href="https://calendly.com/y-famelyn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Schedule Now →
              </a>
            </motion.div>

            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail size={26} className="contact-icon" />
              <h3>Email Us Directly</h3>
              <p>Get a response within 24 hours</p>

              <a
                href="mailto:y@famelyn.com"
                className="contact-link"
              >
                y@famelyn.com
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">

              {/* Anti-spam */}
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  value={form.linkedin}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your LinkedIn goals..."
                required
                value={form.message}
                onChange={handleChange}
              />

              <button type="submit" className="contact-button">
                Send Message
                <Send size={18} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;