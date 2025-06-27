import Head from "next/head";
import Hero from "@/components/Hero";
import Trips from "@/components/Trips";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Descripción de mi nueva página Home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="content-wrapper">
        <Hero />
        <Trips />
      </div>
      <Footer />
    </div>
  );
}
