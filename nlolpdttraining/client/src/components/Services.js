import React from "react";

function Services() {
  return (
    <section id="services" data-aos="fade-right">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Private Sessions</h5>
              <p className="card-text">
                One-on-one training sessions tailored to your dog’s unique needs
                and behavior.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Group Classes</h5>
              <p className="card-text">
                Structured group settings for socialization and learning with
                other dogs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Behavioral Therapy</h5>
              <p className="card-text">
                Address issues such as aggression, anxiety, and reactivity with
                professional help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
