import React, { useEffect, useState } from "react";

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/data/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-5">
        <h1>Descubre tu próximo destino</h1>
        <p>
          Viaja por el mundo al mejor precio y vive experiencias inolvidables.
        </p>
      </div>

      <div className="container">
        <div className="gallery">
          {trips.map((trip, idx) => (
            <figure
              key={trip.id}
              className={`gallery__item gallery__item--${
                idx + 1
              } gallery__figure`}
            >
              <img src={trip.image} alt={trip.title} className="gallery__img" />
              <div className="overlay">
                <button className="trip-btn">{trip.title}</button>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trips;
