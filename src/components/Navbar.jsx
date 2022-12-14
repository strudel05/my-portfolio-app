import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useGlobalContext } from "../context";
import Logo from "./Logo";
import NavbarListDesktop from "./NavbarListDesktop";
import NavbarListMobile from "./NavbarListMobile";

const Navbar = () => {
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("");
  const { menuOpen, handleClick, closeSidebar, theme, handleTheme } =
    useGlobalContext();
  const links = ["about", "projects", "contact"];

  let lastScroll = 0;
  const handleNav = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll === 0) {
      setScrollAtTop(true);
      return;
    }

    if (currentScroll > lastScroll) {
      setScrollAtTop(false);
      setScrollDirection("down");
    }

    if (currentScroll < lastScroll) {
      setScrollAtTop(false);
      setScrollDirection("up");
    }

    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => window.removeEventListener("scroll", handleNav);
    // eslint-disable-next-line
  }, []);

  return (
    <header className={scrollAtTop ? "header" : `header ${scrollDirection}`}>
      <nav className="flex items-center justify-between w-full">
        <a href="#hero" aria-label="home">
          <Logo />
        </a>
        <div className="hidden md:flex items-center">
          <ol className="flex font-mono text-zinc-300 text-sm marker:text-skin-accent [counter-reset:list-number]">
            {links.map((link, i) => {
              return <NavbarListDesktop key={i} item={link} />;
            })}
          </ol>
          <a
            href="/resume.pdf"
            aria-label="resume"
            target="_blank"
            rel="noreferrer"
            className="ml-4 font-mono text-sm border border-skin-accent px-4 py-3 rounded text-skin-accent hover:bg-skin-accentalpha"
          >
            My Resume
          </a>
          <button
            className="ml-4 p-[0.6875rem]"
            aria-label={`toggle ${theme} mode`}
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <MdOutlineLightMode size={22} />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "hamburger-toggle " : ""
          }md:hidden z-20 text-skin-base relative w-9 h-9 cursor-pointer transition-transform ease-in-out flex items-center justify-center`}
          onClick={handleClick}
        >
          <div
            className="
            bg-skin-accent w-8 h-1 rounded absolute
            transition-transform duration-300 

            before:content-[''] 
            before:bg-skin-accent 
            before:w-8 
            before:h-1 
            before:rounded 
            before:absolute 
            before:-translate-y-3
            before:transition-transform
            before:duration-300

            after:content-[''] 
            after:bg-skin-accent 
            after:w-8 
            after:h-1 
            after:rounded 
            after:absolute 
            after:translate-y-3
            after:transition-transform
            after:duration-300
            "
          ></div>
        </div>
        <aside
          className={`${
            menuOpen ? "translate-x-[0vw] " : "translate-x-[100vw] "
          }md:hidden z-10 flex justify-center items-center fixed top-0 bottom-0 right-0 bg-skin-muted [width:min(75vw,400px)] transition-transform duration-150 ease-linear min-h-screen`}
        >
          <nav className="flex flex-col justify-between items-center w-full">
            <button
              aria-label={`toggle ${theme} mode`}
              className="mb-10 p-3"
              onClick={handleTheme}
            >
              {theme === "dark" ? (
                <MdOutlineLightMode size={22} />
              ) : (
                <MdOutlineDarkMode size={22} />
              )}
            </button>
            <ol className="font-mono text-zinc-300 text-sm marker:text-skin-accent [counter-reset:list-number] [font-size:clamp(1rem,4.25vw,1.5rem)] text-center">
              {links.map((link, i) => {
                return (
                  <NavbarListMobile
                    key={i}
                    item={link}
                    closeSidebar={closeSidebar}
                  />
                );
              })}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 px-7 py-6 [font-size:clamp(1rem,4vw,1.25rem)] box-border font-mono capitalize text-sm border border-skin-accent rounded text-skin-accent hover:bg-skin-accentalpha"
            >
              My Resume
            </a>
          </nav>
        </aside>
      </nav>
    </header>
  );
};
export default Navbar;
