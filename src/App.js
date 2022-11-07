import { useState } from "react";
import DecorativeLinks from "./components/DecorativeLinks";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    if (document.body.classList.contains("fixed-body")) {
      document.body.classList.remove("fixed-body");
    } else {
      document.body.classList.add("fixed-body");
    }
  };

  return (
    <>
      <Logo />
      <Navbar menuOpen={menuOpen} handleClick={handleClick} />
      <DecorativeLinks />
      <main
        className={
          menuOpen
            ? "blur-[8px] px-6 m-auto sm:px-12 md:px-24 lg:px-36 transition-all duration-500 ease-in-out"
            : "px-6 m-auto sm:px-12 md:px-24 lg:px-36 transition-all duration-500 ease-in-out"
        }
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
