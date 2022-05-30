import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap:"15px", justifyContent: "flex-start" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
    </nav>
  );
}

export default NavBar;
