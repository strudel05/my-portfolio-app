import { useState, useEffect } from "react";
import DecorativeLinks from "./components/DecorativeLinks";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  const { menuOpen } = useGlobalContext();

  return (
    <>
      <Navbar />
      <DecorativeLinks />
      <main
        className={`${
          menuOpen ? "blur-[8px] md:blur-none " : ""
        }px-6 sm:px-12 md:px-24 lg:px-36 transition-[filter] duration-[250]`}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
