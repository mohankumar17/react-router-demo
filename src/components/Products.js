import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search"></input>
        <nav style={{ display: "flex", gap:"10px", justifyContent: "flex-start" }}>
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Products;
