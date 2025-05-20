import React from "react";

function Carousel() {
  const images = [
    {
      src: "https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg",
      alt: "Lying down puppy",
    },
    {
      src: "https://images.pexels.com/photos/32003910/pexels-photo-32003910/free-photo-of-chocolate-labrador-retrieving-ball-in-park.jpeg",
      alt: "Dog retrieving ball",
    },
    {
      src: "https://images.pexels.com/photos/9632843/pexels-photo-9632843.jpeg",
      alt: "Dog high five",
    },
    {
      src: "https://images.pexels.com/photos/8498840/pexels-photo-8498840.jpeg",
      alt: "Dogs sharing resources",
    },
  ];

  return (
    <div
      id="serviceCarousel"
      className="carousel slide my-5"
      data-aos="zoom-in"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={img.src} className="d-block w-100" alt={img.alt} />
          </div>
        ))}
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
  );
}

export default Carousel;
