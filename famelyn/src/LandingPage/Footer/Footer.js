// Footer.jsx
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTestimonialsClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("testimonials");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("testimonials");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Left */}
          <div className="footer-brand">
            <h3>Famelyn</h3>
            <p>
              Helping professionals transform their LinkedIn presence
              through data-driven personal branding strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button
                  className="footer-link-btn"
                  onClick={handleHomeClick}
                >
                  Home
                </button>
              </li>

              <li>
                <Link to="/course" className="footer-link">
                  Courses
                </Link>
              </li>

              <li>
                <button
                  className="footer-link-btn"
                  onClick={handleTestimonialsClick}
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-connect">
            <a
              href="https://www.linkedin.com/company/famelyn"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <Linkedin size={18} />
              Follow us on LinkedIn
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Famelyn. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;