// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";

import { AuthProvider, AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import SchedulePage from "./pages/SchedulePage";

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <GuestOnly>
                  <Login />
                </GuestOnly>
              }
            />
            <Route
              path="/register"
              element={
                <GuestOnly>
                  <Register />
                </GuestOnly>
              }
            />
            <Route
              path="/schedule"
              element={
                <PrivateRoute>
                  <SchedulePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

// Home combines the main page sections
function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Services />
      <About />
      <Testimonials />
      <Schedule />
      <Contact />
    </>
  );
}

// Guards for routes
function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function GuestOnly({ children }) {
  // const { user } = React.useContext(AuthContext);
  // return user ? <Navigate to="/schedule" /> : children;
  return children;
}

export default App;
