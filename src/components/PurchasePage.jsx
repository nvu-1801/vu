import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PurchasePage = () => {
  const { state } = useLocation();
  const { item } = state || {};
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!item) {
    return <div>Product not found!</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    alert(
      `You have purchased ${quantity} of ${item.title} for $${(
        item.price * quantity
      ).toFixed(2)}`
    );
    navigate("/"); // Redirect back to home after purchase
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the PizzaHouse page
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Purchase {item.title}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={item.image} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-md-6">
          <h5>{item.title}</h5>
          <p>Price: ${item.price.toFixed(2)}</p>
          {item.originalPrice && (
            <p>
              Original Price: <del>${item.originalPrice.toFixed(2)}</del>
            </p>
          )}
          <form onSubmit={handlePurchase}>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="mb-3">
              <p>Total Price: ${(item.price * quantity).toFixed(2)}</p>
            </div>
            <button type="submit" className="btn btn-success">
              Confirm Purchase
            </button>
          </form>
          {/* Back Button */}
          <button onClick={handleBackClick} className="btn-hover  mt-3">
            Back to Pizza Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
