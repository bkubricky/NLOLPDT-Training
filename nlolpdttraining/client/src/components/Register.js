// src/components/Register.js
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      console.log("Submitting:", email, password);

      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
      } else {
        setMessage("Registration successful! You can now log in.");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };
  console.log("Register component loaded");

  return (
    <section className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
      </form>

      {message && <p className="text-success mt-3">{message}</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </section>
  );
}

export default Register;
