import React, { useEffect, useState } from "react";

const Trips = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch("/data/trips.json")
      .then((res) => res.json())
      .then((data) => setDestinos(data));
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <h1>Destinos</h1>
        <p>Encuentra tu destino al mejor precio</p>
      </div>

      <div className="container">
        <div className="gallery">
          {destinos.map((destino, idx) => (
            <figure
              key={destino.id}
              className={`gallery__item gallery__item--${idx + 1}`}
            >
              <img
                src={destino.image}
                alt={destino.title}
                className="gallery__img"
              />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trips;
