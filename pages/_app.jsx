import { Lato } from "next/font/google";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
