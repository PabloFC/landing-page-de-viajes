import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white mt-5"
        style={{ backgroundColor: "#45526e" }}
      >
        {/* Grid container */}
        <div className="container  p-5 pb-0">
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Descubre experiencias únicas por todo el mundo con los mejores
                  precios y el respaldo de nuestros expertos en viajes.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Explora
                </h6>
                <p>
                  <a className="text-white">Destinos</a>
                </p>
                <p>
                  <a className="text-white">Ofertas</a>
                </p>
                <p>
                  <a className="text-white">Guías de viaje</a>
                </p>
                <p>
                  <a className="text-white">Reservas</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">FAQ</h6>
                <p>
                  <a className="text-white">¿Cómo reservo un viaje?</a>
                </p>
                <p>
                  <a className="text-white">¿Puedo cancelar o modificar?</a>
                </p>
                <p>
                  <a className="text-white">¿Qué incluye el precio?</a>
                </p>
                <p>
                  <a className="text-white">Ayuda</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contacto
                </h6>
                <p>
                  <i className="fas fa-home mr-3" /> Málaga, 29004, ES
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> + 34 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3" /> + 34 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2025 Copyright: {/* */}
                  <a className="text-white" href="https://github.com/PabloFC">
                    PabloFC
                  </a>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
