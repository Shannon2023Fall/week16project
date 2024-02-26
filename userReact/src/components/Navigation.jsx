import React, { useState, useEffect } from "react";
import {Outlet, Link} from "react-router-dom";
import Logo from '/webLogo.JPG?url';
/* import './Navigation.css'; */

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" width="14%" />
      </div>

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
    </div>
    </>
    )
};

export default Navigation;
