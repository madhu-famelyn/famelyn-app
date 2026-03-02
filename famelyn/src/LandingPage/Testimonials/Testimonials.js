import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Marketing, TechCorp",
    quote:
      "Famelyn completely transformed my LinkedIn presence. Within 3 months, my profile views increased by 300% and I started receiving inbound opportunities I never imagined.",
  },
  {
    name: "James Rodriguez",
    role: "Founder & CEO, StartupXYZ",
    quote:
      "The strategic approach Famelyn takes is unlike anything I've seen. They don't just optimize your profile — they build a complete personal brand ecosystem.",
  },
  {
    name: "Priya Sharma",
    role: "Director of HR, GlobalFinance",
    quote:
      "Working with Famelyn was a game-changer. Their data-driven content strategy helped me become a recognized voice in the HR community on LinkedIn.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(2);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">

        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="testimonials-badge">Client Stories</span>
          <h2>What Our Clients Say</h2>
        </motion.div>

        <div className="testimonial-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <Quote size={34} className="quote-icon" />

              <p className="testimonial-quote">
                "{testimonials[current].quote}"
              </p>

              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon" />
                ))}
              </div>

              <div className="testimonial-avatar">
                {testimonials[current].name[0]}
              </div>

              <p className="testimonial-name">
                {testimonials[current].name}
              </p>

              <p className="testimonial-role">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="testimonial-controls">
            <button onClick={prev} className="nav-btn">
              <ChevronLeft size={18} />
            </button>

            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`dot ${i === current ? "active" : ""}`}
                />
              ))}
            </div>

            <button onClick={next} className="nav-btn">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;