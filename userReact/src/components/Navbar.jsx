import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="logo+name">
        <img src="/webLogo.JPG" />
        <h2>Unsettled Lawissues of E-Scooter Accidents</h2>
      </div>

      <div id="navbar">
      <nav className="nav-links">
      <ul >     
       <li >
         <NavLink  style = {navLinkStyles} exact to="/"  >Home</NavLink>
       </li>
       <li >
         <NavLink style = {navLinkStyles} to="/blog">Blog</NavLink>
       </li>
       <li >
         <NavLink  style = {navLinkStyles} to="/news" >News</NavLink>
       </li>
     </ul>
     </nav>
      </div>

    </>
  );
};

export default Navbar;
