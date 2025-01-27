import React, { useState } from "react";

const MomosShopSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&#]/.test(password))
      return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(evaluatePasswordStrength(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password && phone) {
      setSuccessMessage("Sign-Up Successful! Welcome to Momos Shop!");
      setErrorMessage("");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setPasswordStrength("");
    } else {
      setErrorMessage("Please fill in all fields correctly.");
      setSuccessMessage("");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login functionality goes here.");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login functionality goes here.");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow-sm p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2 className="text-warning">🍜 Momos Shop</h2>
          <p className="text-muted">Sign up to enjoy delicious momos!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="e.g., momoslover@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Create a strong password"
            />
            {password && (
              <div
                className={`mt-2 badge ${passwordStrength === "Strong"
                    ? "bg-success"
                    : passwordStrength === "Medium"
                      ? "bg-warning"
                      : "bg-danger"
                  }`}
              >
                {passwordStrength} Password
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Your phone number"
            />
          </div>

          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-warning">
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mb-3">
          <p className="text-muted">Or sign up with</p>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-outline-danger" onClick={handleGoogleLogin}>
              <i className="bi bi-google"></i> Google
            </button>
            <button className="btn btn-outline-primary" onClick={handleFacebookLogin}>
              <i className="bi bi-facebook"></i> Facebook
            </button>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="text-muted">
            Already have an account? <a href="/Account" className="text-warning">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MomosShopSignUp;
