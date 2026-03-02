import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero/Founder.png"; // <-- adjust filename if needed

const HeroSection = () => {
  return (
    <section className="hero-fixed">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left-hero">
          <h1 className="hero-title">
            Transform Your Life <br />
            Through Powerful <br />
            Stories
          </h1>

          <p className="hero-description">
            Famelyn is an acclaimed author, speaker, and storyteller
            dedicated to inspiring transformation through the written
            word. With a passion for authentic narratives, she has
            touched the lives of thousands worldwide.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Books</button>
            <button className="secondary-btn">View Events</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={heroImage} alt="Famelyn" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;