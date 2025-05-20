import React, { useState } from "react";

function Home() {
  // State for login form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  // Fake login function for demo — replace with actual API call
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    // Example: Replace with your backend call (fetch or axios)
    if (email === "test@example.com" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  if (isLoggedIn) {
    return (
      <section id="home" data-aos="fade-up">
        <h1 className="display-4 pt-4">Welcome back!</h1>
        <p>You are logged in as {email}.</p>
        {/* Add more logged-in UI here */}
      </section>
    );
  }

  return (
    <section id="home" data-aos="fade-up">
      <h1 className="display-4 pt-4">New Leash on Life Pet Dog Training</h1>
      <h2 className="h5 text-muted">
        Positive reinforcement based and balanced solutions
      </h2>
      <p className="mt-3">
        Welcome to NLOLPDT, the expert dog training service that specializes in
        severe behavioral issues rooted in emotional state...
      </p>

      <form
        onSubmit={handleLogin}
        style={{ maxWidth: "300px", margin: "20px 0" }}
      >
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>

      {/* Your existing carousel */}
      <div
        id="serviceCarousel"
        className="carousel slide my-5"
        data-aos="zoom-in"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg"
              className="d-block w-100"
              alt="Puppy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/32003910/pexels-photo-32003910.jpeg"
              className="d-block w-100"
              alt="Retrieving ball"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/9632843/pexels-photo-9632843.jpeg"
              className="d-block w-100"
              alt="High five"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#serviceCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#serviceCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Home;
