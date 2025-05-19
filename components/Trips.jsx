import React from "react";

const Trips = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Destinos</h1>
        <p>Encuentra tu destino al mejor precio</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="/images/nyc.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="New York City"
          />
          <img
            src="/images/paris.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Paris"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/tokio.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Tokio"
          />
          <img
            src="/images/rome.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Rome"
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/sydney.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Sydney"
          />
          <img
            src="/images/rio.jpg"
            className="w-100 shadow-1-strong rounded mb-4 "
            alt="Rio de janeiro"
          />
        </div>
      </div>
    </>
  );
};

export default Trips;
