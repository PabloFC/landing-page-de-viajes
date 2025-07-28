import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/trips.json")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  const handleTripClick = (tripId) => {
    router.push(`/trip/${tripId}`);
  };

  return (
    <section className="trips-section">
      <div className="d-flex flex-column justify-content-center align-items-center trips-header">
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
                <button
                  className="trip-btn"
                  onClick={() => handleTripClick(trip.id)}
                >
                  {trip.title}
                </button>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trips;
