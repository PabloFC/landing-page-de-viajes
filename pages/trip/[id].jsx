import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const TripDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch("/data/trips.json")
        .then((res) => res.json())
        .then((data) => {
          const foundTrip = data.find((trip) => trip.id === parseInt(id));
          setTrip(foundTrip);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading trip data:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="error-container">
        <h1>Viaje no encontrado</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="trip-detail">
      <div className="trip-detail-header">
        <Link href="/" className="back-button">
          ← Volver
        </Link>
      </div>

      <div className="trip-detail-container">
        <div className="trip-image-container">
          <img
            src={trip.image}
            alt={trip.title}
            className="trip-detail-image"
          />
        </div>

        <div className="trip-info">
          <h1 className="trip-title">{trip.title}</h1>
          <h2 className="trip-country">{trip.country}</h2>
          <p className="trip-description">{trip.description}</p>

          <div className="trip-actions">
            <button className="book-button">Reservar viaje</button>
            <button className="info-button">Más información</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
