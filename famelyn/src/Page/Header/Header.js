import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleTestimonialsClick = () => {
    closeMenu();

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
      }, 300);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">Famelyn</div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/course" className="nav-link">Courses</Link>

            <button
              className="nav-link testimonials-btn"
              onClick={handleTestimonialsClick}
            >
              Testimonials
            </button>

            <button
              className="buy-btn"
              onClick={() => navigate("/course")}
            >
              Buy Books
            </button>
          </nav>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <X size={28} onClick={closeMenu} className="close-icon" />
        </div>

        <nav className="sidebar-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/course" onClick={closeMenu}>Courses</Link>

          <button onClick={handleTestimonialsClick}>
            Testimonials
          </button>

          <button
            className="sidebar-buy-btn"
            onClick={() => {
              navigate("/course");
              closeMenu();
            }}
          >
            Buy Books
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;