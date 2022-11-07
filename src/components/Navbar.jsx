import { useState, useEffect } from "react";

const Navbar = ({ menuOpen, handleClick, closeSidebar }) => {
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
        <h1 className="font-mono text-3xl font-bold text-green">LOGO.</h1>
        <div className="hidden md:flex items-center">
          <ol className="flex font-mono text-zinc-300 text-sm marker:text-green [counter-reset:list-number]">
            <li
              className="text-lightestSlate 
                before:mr-3 
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear"
            >
              <a href="#about">about</a>
            </li>
            <li
              className="text-lightestSlate 
                before:mr-3 
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear"
            >
              <a href="#projects">projects</a>
            </li>
            <li
              className="text-lightestSlate 
                before:mr-3 
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear"
            >
              <a href="#contact">contact</a>
            </li>
          </ol>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="ml-4">resume</button>
          </a>
        </div>
        <div
          className={
            menuOpen
              ? "md:hidden z-20 text-lightestSlate relative w-9 h-9 cursor-pointer transition-all ease-in-out flex items-center justify-center hamburger-toggle"
              : "md:hidden z-20 text-lightestSlate relative w-9 h-9 cursor-pointer transition-all ease-in-out flex items-center justify-center"
          }
          onClick={handleClick}
        >
          <div
            className="
            bg-green w-8 h-1 rounded absolute
            transition-all duration-500 

            before:content-[''] 
          before:bg-green 
            before:w-8 
            before:h-1 
            before:rounded 
            before:absolute 
            before:-translate-y-3
            before:transition-all
            before:duration-500

            after:content-[''] 
          after:bg-green 
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
              ? "md:hidden z-10 flex justify-center items-center fixed top-0 bottom-0 right-0 bg-lightNavy [width:min(75vw,400px)] transition-all duration-150 ease-linear translate-x-[0vw] min-h-screen"
              : "md:hidden z-10 flex justify-center items-center absolute top-0 bottom-0 right-0 bg-lightNavy [width:min(75vw,400px)] transition-all duration-150 ease-linear translate-x-[100vw] min-h-screen"
          }
        >
          <nav className="flex flex-col justify-between items-center w-full">
            <ol className="font-mono text-zinc-300 text-sm marker:text-green [counter-reset:list-number] [font-size:clamp(0.8rem,4.25vw,1.5rem)] text-center">
              <li
                className="text-lightestSlate pt-3 pb-10 
                before:mb-3 
                before:block
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear
              "
                onClick={closeSidebar}
              >
                <a href="#about">about</a>
              </li>
              <li
                className="text-lightestSlate pt-3 pb-10 
                before:mb-3 
                before:block
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear
              "
                onClick={closeSidebar}
              >
                <a href="#projects" className="w-full h-full block">
                  projects
                </a>
              </li>
              <li
                className="text-lightestSlate pt-3 pb-10 
                before:mb-3 
                before:block
                before:text-green
                before:content-['0'counter(list-number)'.'] [counter-increment:list-number]  transition-all ease-linear
              "
                onClick={closeSidebar}
              >
                <a href="#contact">contact</a>
              </li>
            </ol>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="mt-5 px-10 py-5 [font-size:clamp(0.75rem,4vw,1.25rem)]">
                resume
              </button>
            </a>
          </nav>
        </aside>
      </nav>
    </header>
  );
};
export default Navbar;
