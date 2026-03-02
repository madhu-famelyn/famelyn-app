import React, { useState } from "react";
import "./UpcomingEvents.css";
import eventImage from "../../assets/Events/event-banner.jpg";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const API_URL = "http://127.0.0.1:8000/contact/send-hi";

const UpcomingEvents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to register");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setError("");
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <section className="events">
      <div className="events-container">
        <h2 className="events-title">Upcoming Events</h2>

        <div className="event-card">
          <div className="event-image">
            <img src={eventImage} alt="Stories That Heal Event" />
          </div>

          <div className="event-content">
            <h3 className="event-name">
              Stories That Heal — Live Reading
            </h3>

            <p className="event-description">
              An intimate evening of live readings and conversations about
              the power of storytelling in personal growth.
            </p>

            <div className="event-meta">
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                <span>March 15, 2026</span>
              </div>

              <div className="meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <button
              className="event-btn"
              onClick={() => setModalOpen(true)}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h3>Registered Successfully!</h3>
                <p>We’ve sent a confirmation message to your email.</p>
              </div>
            ) : (
              <>
                <h3 className="modal-title">Register for Event</h3>

                <form onSubmit={handleSubmit} className="modal-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />

                  {error && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Submit"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;