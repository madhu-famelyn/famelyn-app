import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Amara Johnson",
    role: "Entrepreneur & Reader",
    initial: "A",
    rating: 5,
    text: `Famelyn’s books have completely shifted my perspective on life. 
    Every chapter feels like a personal conversation with a wise friend.`
  },
  {
    name: "David Chen",
    role: "Life Coach",
    initial: "D",
    rating: 5,
    text: `The Path Within is one of the most impactful books I've ever read. 
    I recommend it to all of my clients without hesitation.`
  },
  {
    name: "Sarah Mitchell",
    role: "Book Club Organizer",
    initial: "S",
    rating: 5,
    text: `Our entire book club was moved by Rising Above. 
    The writing is beautiful and the message is timeless.`
  },
  {
    name: "Kwame Asante",
    role: "University Professor",
    initial: "K",
    rating: 4,
    text: `A rare talent for weaving profound insights into accessible, 
    engaging prose. Famelyn is a must-read author.`
  },
  {
    name: "Lisa Park",
    role: "Wellness Blogger",
    initial: "L",
    rating: 5,
    text: `These books are a gift. Every page is filled with wisdom, warmth, 
    and genuine care for the reader's journey.`
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Readers Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            
            {/* Stars */}
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < item.rating ? "filled" : ""}>
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p className="testimonial-text">“{item.text}”</p>

            {/* Author */}
            <div className="author">
              <div className="avatar">{item.initial}</div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;