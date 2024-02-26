import React from "react";
import {Outlet, Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
    
    <Outlet />
    </>
    )
};

export default Navigation;
