import { useState, useContext, useEffect, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{ menuOpen, handleClick, closeSidebar, handleTheme, theme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
