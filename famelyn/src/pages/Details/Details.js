import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import coursesData from "../../Data/coursesData";
import Header from "../Header/header";
import "./Details.css";

const CART_KEY = "course_cart";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const course = coursesData.find(
    (item) => item.id === parseInt(id)
  );

  // Check if already in cart on load
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const exists = cart.find(
      (item) => item.id === parseInt(id)
    );
    if (exists) {
      setIsAdded(true);
    }
  }, [id]);

  const addCourseToCart = () => {
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    const alreadyExists = cart.find(
      (item) => item.id === course.id
    );

    if (!alreadyExists) {
      cart.push({ id: course.id });
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      setIsAdded(true);
    }
  };

  const handleAddToCart = () => {
    addCourseToCart();
  };

  const handleBuyNow = () => {
    addCourseToCart();
    navigate("/cart"); // Navigate after adding
  };

  if (!course) {
    return <h2 style={{ padding: "40px" }}>Course Not Found</h2>;
  }

  return (
    <>
      <Header />

      <div className="details-container">
        <div className="details-wrapper">

          {/* Left Side */}
          <div className="details-image">
            <img src={course.image} alt={course.title} />
          </div>

          {/* Right Side */}
          <div className="details-content">
            <h1>{course.title}</h1>
            <h4>by {course.instructor}</h4>

            <p className="full-description">
              {course.fullDescription}
            </p>

            <div className="rating-section">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
              <span>{course.rating}</span>
            </div>

            <h2 className="price">
              ₹{course.price.toLocaleString()}
            </h2>

            <div className="includes">
              <h3>What's Included</h3>
              {course.includes.map((item, index) => (
                <div key={index} className="include-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="details-buttons">
              <button
                className={`cart-btn ${isAdded ? "added" : ""}`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? "Added ✓" : "Add to Cart"}
              </button>

              <button
                className="buy-btn"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;