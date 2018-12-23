import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/canvas">Canvas</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
};

export default Navigation;
