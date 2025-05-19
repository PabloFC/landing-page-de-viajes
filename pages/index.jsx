import Hero from "@/components/Hero";
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
      <Hero />
    </>
  );
}
