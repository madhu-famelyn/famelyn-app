import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import coursesData from "../../Data/coursesData";
import "./Cart.css";

const CART_KEY = "course_cart";
const GST_PERCENTAGE = 18;

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    const detailedCourses = cart
      .map((item) =>
        coursesData.find((course) => course.id === item.id)
      )
      .filter(Boolean);

    setCartItems(detailedCourses);
  };

  const removeFromCart = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this course?"
    );

    if (!confirmDelete) return;

    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    cart = cart.filter((item) => item.id !== id);

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    loadCart();
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const gst = Math.round((subtotal * GST_PERCENTAGE) / 100);
  const total = subtotal + gst;

  return (
    <>
      <Header />

      <div className="cart-page">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-container">
          {/* LEFT - Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>

            {cartItems.length === 0 ? (
              <p className="empty">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((course) => (
                  <div key={course.id} className="summary-item">
                    <div>
                      <p>{course.title}</p>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(course.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <span>₹{course.price.toLocaleString()}</span>
                  </div>
                ))}

                <div className="summary-line">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>

                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>

          {/* RIGHT - Payment */}
          <div className="payment-section">
            <h2>Payment Method</h2>

            <div className="payment-options">
              <button
                className={`pay-option ${
                  paymentMethod === "card" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                Credit / Debit Card
              </button>

              <button
                className={`pay-option ${
                  paymentMethod === "upi" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("upi")}
              >
                UPI
              </button>

              <button
                className={`pay-option ${
                  paymentMethod === "netbanking" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("netbanking")}
              >
                Net Banking
              </button>
            </div>

            {/* Dynamic Inputs */}
            <div className="payment-form">
              {paymentMethod === "card" && (
                <>
                  <input type="text" placeholder="Card Number" />
                  <div className="row">
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="CVV" />
                  </div>
                  <input type="text" placeholder="Name on Card" />
                </>
              )}

              {paymentMethod === "upi" && (
                <input type="text" placeholder="Enter UPI ID" />
              )}

              {paymentMethod === "netbanking" && (
                <>
                  <select>
                    <option>Select Bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>SBI</option>
                    <option>Axis Bank</option>
                  </select>
                  <input type="text" placeholder="Account Holder Name" />
                </>
              )}
            </div>

            <button className="pay-button">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;