import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const CART_KEY = "course_cart";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Famelyn
      </h2>

      <div
        className="cart"
        onClick={handleCartClick}
        style={{ cursor: "pointer" }}
      >
        <FaShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
    </nav>
  );
}

export default Header;