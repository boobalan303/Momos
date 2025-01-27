import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import p1 from "./Image/chicken momos.png";
import p2 from "./Image/spicy momos.png";
import p3 from "./Image/tandoori momos.png";
import p4 from "./Image/fried momo.png";

// Declare momosList with categories
const momosList = {
  steamed: [
    {
      name: "Steamed Momos",
      description: "Soft and healthy momos filled with fresh vegetables or meat.",
      originalPrice: 120,
      offerPrice: 100,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p1,
    },{
      name: "Steamed Momos",
      description: "Soft and healthy momos filled with fresh vegetables or meat.",
      originalPrice: 120,
      offerPrice: 100,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p1,
    },{
      name: "Steamed Momos",
      description: "Soft and healthy momos filled with fresh vegetables or meat.",
      originalPrice: 120,
      offerPrice: 100,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p1,
    },
  ],
  fried: [
    {
      name: "Fried Momos",
      description: "Crispy fried momos served with spicy chutney.",
      originalPrice: 140,
      offerPrice: 120,
      saleEndsAt: new Date().getTime() + 7200000, // 2 hours from now
      isNew: true,
      image: p2,
    },
    {
      name: "Fried Momos",
      description: "Crispy fried momos served with spicy chutney.",
      originalPrice: 140,
      offerPrice: 120,
      saleEndsAt: new Date().getTime() + 7200000, // 2 hours from now
      isNew: true,
      image: p2,
    },
    {
      name: "Fried Momos",
      description: "Crispy fried momos served with spicy chutney.",
      originalPrice: 140,
      offerPrice: 120,
      saleEndsAt: new Date().getTime() + 7200000, // 2 hours from now
      isNew: true,
      image: p2,
    },
  ],
  tandoori: [
    {
      name: "Tandoori Momos",
      description: "Smoky and flavorful momos cooked in tandoor.",
      originalPrice: 160,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 10800000, // 3 hours from now
      isNew: true,
      image: p3,
    },
    {
      name: "Tandoori Momos",
      description: "Smoky and flavorful momos cooked in tandoor.",
      originalPrice: 160,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 10800000, // 3 hours from now
      isNew: true,
      image: p3,
    },
    {
      name: "Tandoori Momos",
      description: "Smoky and flavorful momos cooked in tandoor.",
      originalPrice: 160,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 10800000, // 3 hours from now
      isNew: true,
      image: p3,
    },
  ],
  dessert: [
    {
      name: "Chocolate Momos",
      description: "Delicious dessert momos filled with molten chocolate.",
      originalPrice: 150,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p4,
    },
    {
      name: "Chocolate Momos",
      description: "Delicious dessert momos filled with molten chocolate.",
      originalPrice: 150,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p4,
    },
    {
      name: "Chocolate Momos",
      description: "Delicious dessert momos filled with molten chocolate.",
      originalPrice: 150,
      offerPrice: 140,
      saleEndsAt: new Date().getTime() + 3600000, // 1 hour from now
      isNew: false,
      image: p4,
    },
  ],
};

const Menu = ({ addToCart }) => {
  const navigate = useNavigate();

  const calculateTimeLeft = (saleEndsAt) => {
    const difference = saleEndsAt - new Date().getTime();
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    steamed: momosList.steamed.map((item) => calculateTimeLeft(item.saleEndsAt)),
    fried: momosList.fried.map((item) => calculateTimeLeft(item.saleEndsAt)),
    tandoori: momosList.tandoori.map((item) => calculateTimeLeft(item.saleEndsAt)),
    dessert: momosList.dessert.map((item) => calculateTimeLeft(item.saleEndsAt)),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft({
        steamed: momosList.steamed.map((item) => calculateTimeLeft(item.saleEndsAt)),
        fried: momosList.fried.map((item) => calculateTimeLeft(item.saleEndsAt)),
        tandoori: momosList.tandoori.map((item) => calculateTimeLeft(item.saleEndsAt)),
        dessert: momosList.dessert.map((item) => calculateTimeLeft(item.saleEndsAt)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4">🥟 Our Momos Menu</h2>
      <hr></hr>
      {/* Render each category */}
      {Object.entries(momosList).map(([category, items]) => (
        <div key={category} className="category-section mb-5">
          <h3 className="text-center text-primary py-3 mb-3">🥟{category.charAt(0).toUpperCase() + category.slice(1)} Momos</h3>
          <div className="row g-4">
            {items.map((momo, index) => (
              <MomoCard
                key={index}
                momo={momo}
                timeLeft={timeLeft[category][index]}
                addToCart={addToCart}
                navigate={navigate}
              />
            ))}
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

const MomoCard = ({ momo, timeLeft, addToCart, navigate }) => (
  <div className="col-md-4">
    <div className="card h-100 shadow-sm position-relative">
      {momo.isNew && (
        <span
          className="badge bg-danger position-absolute top-0 start-0 m-2"
          style={{ zIndex: 1 }}
        >
          New Arrival
        </span>
      )}
      <img src={momo.image} className="card-img-top" alt={momo.name} />
      <div className="card-body">
        <h5 className="card-title text-warning">{momo.name}</h5>
        <p className="card-text text-muted">{momo.description}</p>
        <div className="mb-3">
          <span className="text-decoration-line-through text-muted me-2">
            ₹{momo.originalPrice}
          </span>
          <span className="fw-bold text-success">₹{momo.offerPrice}</span>
        </div>
        {timeLeft ? (
          <div className="text-danger mb-3">
            Sale ends in:{" "}
            <strong>
              {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </strong>
          </div>
        ) : (
          <div className="text-muted mb-3">Sale Ended</div>
        )}
        <div className="d-grid">
          <button
            className="btn btn-warning"
            onClick={() => addToCart(momo)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
