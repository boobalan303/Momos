import React from "react";
import { useCart } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Dynamic from "../components/Dynamic";
import p1 from "./Image/chicken momos.png";
import p2 from "./Image/fried momo.png";
import p3 from "./Image/spicy momos.png";
import p4 from "./Image/tandoori momos.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();  // For navigation to the menu page

  const newArrivals = [
    {
      id: 1,
      name: "Spicy Momos",
      description: "Hot and spicy momos for a fiery taste.",
      price: "₹130",
      image: p1,
    },
    {
      id: 2,
      name: "Fried Momos",
      description: "Crispy fried momos served with spicy chutney.",
      price: "₹140",
      image: p2,
    },
    {
      id: 3,
      name: "Tandoori Momos",
      description: "Smoky and flavorful momos cooked in tandoor.",
      price: "₹160",
      image: p3,
    },
    {
      id: 4,
      name: "Chocolate Momos",
      description: "Delicious dessert momos filled with molten chocolate.",
      price: "₹150",
      image: p4,
    }
    // Additional products...
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="banner vh-100 d-flex justify-content-center align-items-center text-center text-white">
        <div>
          <h1 className="display-4 fw-bold">Welcome to Momo's Shop</h1>
          <p className="lead">Discover delicious varieties of momos crafted with love.</p>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>
        </div>
      </div>

      {/* Dynamic Section (if any dynamic content like a rotating slider or special offers) */}
      {/* <Dynamic /> */}

      {/* New Arrivals Section */}
      <div className="container py-5">
        <h2 className="text-center text-warning mb-4">🆕 New Arrivals</h2>
        <div className="row g-4">
          {newArrivals.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={product.image}
                  className="card-img-top rounded-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-warning">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">{product.price}</span>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Top Flaours*/}
    <div className="container py-5">
        <h2 className="text-center text-warning mb-4">Top Flavors</h2>
        <div className="row g-4">
          {newArrivals.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={product.image}
                  className="card-img-top rounded-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-warning">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">{product.price}</span>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
