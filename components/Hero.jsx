import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="box">
        <div className="hero-overlay"></div>
        <video src="/assets/hero_video.mp4" autoPlay loop muted></video>
        <div className="content">
          <h1 className="text-center">Nueva York hasta -30%</h1>
          <p>Tu próxima aventura te espera</p>
          <a href="#" className=" btn-secondary">
            Explorar destinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
