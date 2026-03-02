import React, { useState } from "react";
import "./Books.css";

import book1 from "../../assets/Books/book-cover-1.jpg";
import book2 from "../../assets/Books/book-cover-2.jpg";
import book3 from "../../assets/Books/book-cover-3.jpg";

const API_URL = "http://127.0.0.1:8000/contact/send-hi";

const BooksSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const books = [
    {
      image: book1,
      title: "Unlocking LinkedIn’s Best Kept Secret",
      description: "The Complete Guide to Maximising Your LinkedIn SSI.",
      link: "https://www.amazon.com/Unlocking-LinkedIns-Best-Kept-Secret-ebook/dp/B0G4QTHR55",
    },
    {
      image: book2,
      title: "How to get a job through LinkedIn",
      description: "The 7-Figure Career Growth Playbook.",
      link: "https://www.amazon.com/How-get-job-through-LinkedIn-ebook/dp/B0DXTVN6YS",
    },
    {
      image: book3,
      title: "How Can I Become a LinkedIn Influencer?",
      description:
        "The Complete Step-by-Step Guide to Building a Personal Brand, Engaging Your Network, and Monetizing Your Expertise",
      link: "https://www.amazon.com/Become-LinkedIn-Influencer-Step-Step-ebook/dp/B0DHYHRKPT",
    },
  ];

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
        throw new Error(data.detail || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error sending message:", err);
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

  const handleBuyNow = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="books">
      <div className="books-container">
        <h2 className="books-title">Our Books</h2>

        <div className="books-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <div className="book-image-wrapper">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="info-wrapper">
                <h3 className="book-name">{book.title}</h3>
                <p className="book-description">{book.description}</p>

                <div className="book-buttons">
                  <button
                    className="primary-btn"
                    onClick={() => handleBuyNow(book.link)}
                  >
                    Buy Now
                  </button>

                  <button
                    className="secondary-btn"
                    onClick={() => setModalOpen(true)}
                  >
                    Get a Sample
                  </button>
                </div>
              </div>
            </div>
          ))}
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
                <h3>Submitted Successfully!</h3>
                <p>We’ve sent a Hi message to your email.</p>
              </div>
            ) : (
              <>
                <h3 className="modal-title">Get a Free Sample</h3>

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

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
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

export default BooksSection;