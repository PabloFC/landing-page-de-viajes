import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Descripción de mi nueva página Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*  Hero  */}

      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Welcome to Our Website</h1>
              <p>This is a simple hero section created using Bootstrap.</p>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  Hero */}
    </>
  );
}
