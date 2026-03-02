import React from "react";
import "./CommunitySection.css";

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-container">
        
        {/* Dots */}
        <div className="dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>

        {/* Heading */}
        <h1 className="community-title">
          Join Our Growing Community
        </h1>

        {/* Description */}
        <p className="community-description">
          Connect with thousands of readers and lifelong learners. Get exclusive access to
          events, early book releases, and inspiring content delivered straight to your inbox.
        </p>

        {/* Button */}
        <button className="community-btn">
          Join the Community
        </button>

      </div>
    </section>
  );
};

export default CommunitySection;