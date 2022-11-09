import { useState, useEffect } from "react";

const Navbar = ({
  menuOpen,
  handleClick,
  closeSidebar,
  theme,
  handleTheme,
}) => {
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("");

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
  }, []);

  return (
    <header className={scrollAtTop ? "header" : `header ${scrollDirection}`}>
      <nav className="flex items-center justify-between w-full">
        <h1 className="font-mono text-3xl font-bold text-skin-accent">LOGO.</h1>
        <div className="hidden md:flex items-center">
          <ol className="flex font-mono text-zinc-300 text-sm marker:text-skin-accent [counter-reset:list-number]">
            <li
              className="text-skin-base 
                [counter-increment:list-number]"
            >
              <a
                href="#about"
                className="before:mr-3 
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
              >
                about
              </a>
            </li>
            <li
              className="text-skin-base 
                [counter-increment:list-number]"
            >
              <a
                href="#projects"
                className="before:mr-3 
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
              >
                projects
              </a>
            </li>
            <li
              className="text-skin-base 
                [counter-increment:list-number]"
            >
              <a
                href="#contact"
                className="before:mr-3 
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
              >
                contact
              </a>
            </li>
          </ol>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="ml-4">my resume</button>
          </a>
          <button className="ml-4" onClick={handleTheme}>
            {theme}
          </button>
        </div>
        <div
          className={
            menuOpen
              ? "md:hidden z-20 text-skin-base relative w-9 h-9 cursor-pointer transition-all ease-in-out flex items-center justify-center hamburger-toggle"
              : "md:hidden z-20 text-skin-base relative w-9 h-9 cursor-pointer transition-all ease-in-out flex items-center justify-center"
          }
          onClick={handleClick}
        >
          <div
            className="
            bg-skin-accent w-8 h-1 rounded absolute
            transition-all duration-500 

            before:content-[''] 
          before:bg-skin-accent 
            before:w-8 
            before:h-1 
            before:rounded 
            before:absolute 
            before:-translate-y-3
            before:transition-all
            before:duration-500

            after:content-[''] 
          after:bg-skin-accent 
            after:w-8 
            after:h-1 
            after:rounded 
            after:absolute 
            after:translate-y-3
            after:transition-all
            after:duration-500
            "
          ></div>
        </div>
        <aside
          className={
            menuOpen
              ? "md:hidden z-10 flex justify-center items-center fixed top-0 bottom-0 right-0 bg-skin-muted [width:min(75vw,400px)] transition-all duration-150 ease-linear translate-x-[0vw] min-h-screen"
              : "md:hidden z-10 flex justify-center items-center absolute top-0 bottom-0 right-0 bg-skin-muted [width:min(75vw,400px)] transition-all duration-150 ease-linear translate-x-[100vw] min-h-screen"
          }
        >
          <nav className="flex flex-col justify-between items-center w-full">
            <ol className="font-mono text-zinc-300 text-sm marker:text-skin-accent [counter-reset:list-number] [font-size:clamp(1rem,4.25vw,1.5rem)] text-center">
              <li
                className="text-skin-base 
                [counter-increment:list-number]"
              >
                <a
                  href="#about"
                  className="block pt-3 pb-10  before:mb-3 
                before:block
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
                  onClick={closeSidebar}
                >
                  about
                </a>
              </li>
              <li
                className="text-skin-base 
                [counter-increment:list-number]"
              >
                <a
                  href="#projects"
                  className="block pt-3 pb-10  before:mb-3 
                before:block
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
                  onClick={closeSidebar}
                >
                  projects
                </a>
              </li>
              <li
                className="text-skin-base 
                [counter-increment:list-number]"
              >
                <a
                  href="#contact"
                  className="block pt-3 pb-10  before:mb-3 
                before:block
                before:text-skin-accent
                before:content-['0'counter(list-number)'.']"
                  onClick={closeSidebar}
                >
                  contact
                </a>
              </li>
            </ol>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="mt-5 px-10 py-5 [font-size:clamp(1rem,4vw,1.25rem)]">
                my resume
              </button>
            </a>
          </nav>
        </aside>
      </nav>
    </header>
  );
};
export default Navbar;
