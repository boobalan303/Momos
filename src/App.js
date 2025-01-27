import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import CartPage from "./pages/CartPage";
import Contact from './pages/Contact';
import FranchiseEnquiryPage from './pages/Franciase';
import { CartProvider } from "./pages/CartContext";

function App() {
  const addToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <CartProvider> 
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/FranchiseEnquiryPage" element={<FranchiseEnquiryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </CartProvider>
  );
}

export default App;
