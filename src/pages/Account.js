import React, { useState } from "react";

const Account = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication
        if (email === "momoslover@example.com" && password === "ilovemomos") {
            alert("Welcome to the Momos Shop!");
            setEmail("");
            setPassword("");
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid email or password!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4 mt-5 mb-5" style={{ maxWidth: "400px", width: "100%", alignContent: "center" }}>
                <div className="text-center mb-4">
                    <h2 className="text-warning">🍜 Momos Shop</h2>
                    <p className="text-muted">Login to enjoy delicious momos!</p>
                </div>
                <form onSubmit={handleSubmit}>
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
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <div className="d-grid">
                        <button type="submit" className="btn btn-warning">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <p className="text-muted">
                        Don't have an account?
                        <a href="/Signup" className="text-warning">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;
