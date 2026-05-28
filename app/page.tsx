import Navbar from "./navbar";
import HeroPage from "./HeroPage";
import About from "./about";
import Reviews from "./rivews";
import Booking from "./Booking";

import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroPage />
        <About />
        <Booking />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
