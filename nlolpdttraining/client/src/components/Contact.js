import React from "react";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="my-5">
      <h2 className="text-center">Contact Us</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
