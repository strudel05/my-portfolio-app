import { useState, useEffect } from "react";
import DecorativeLinks from "./components/DecorativeLinks";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    themeCheck();
  }, [theme]);

  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    }
  };

  const handleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      return;
    }
  };

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    if (document.body.classList.contains("fixed-body")) {
      document.body.classList.remove("fixed-body");
    } else {
      document.body.classList.add("fixed-body");
    }
  };

  const closeSidebar = () => {
    document.body.classList.remove("fixed-body");
    setMenuOpen(false);
  };

  return (
    <>
      <Logo />
      <Navbar
        menuOpen={menuOpen}
        handleClick={handleClick}
        closeSidebar={closeSidebar}
        handleTheme={handleTheme}
        theme={theme}
      />
      <DecorativeLinks />
      <main
        className={
          menuOpen
            ? "blur-[8px] md:blur-none px-6  sm:px-12 md:px-24 lg:px-36 transition-all duration-500 ease-in-out"
            : "px-6 sm:px-12 md:px-24 lg:px-36 transition-all duration-500 ease-in-out"
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
