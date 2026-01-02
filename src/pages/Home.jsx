import { useEffect } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import About from "../components/About";
import Services from "../components/Services";
import Hero from "../components/Hero";

export default function Home() {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Team />
    </>
  );
}
