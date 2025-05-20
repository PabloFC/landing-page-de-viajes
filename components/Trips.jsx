import React from "react";

const Trips = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Destinos</h1>
        <p>Encuentra tu destino al mejor precio</p>
      </div>

      <div className="container">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/images/sydney.jpg"
              alt="Gallery image 1"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/images/rome.jpg"
              alt="Gallery image 2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/images/nyc.jpg"
              alt="Gallery image 3"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/images/paris.jpg"
              alt="Gallery image 4"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/images/rio.jpg"
              alt="Gallery image 5"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/images/tokio.jpg"
              alt="Gallery image 6"
              className="gallery__img"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Trips;
