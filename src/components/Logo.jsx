import React from "react";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context";

const Logo = () => {
  const { theme } = useGlobalContext();
  return (
    <img
      src={logo}
      alt="EJ Logo"
      className={theme === "dark" ? "logo-dark" : "logo-light"}
    />
  );
};
export default Logo;
