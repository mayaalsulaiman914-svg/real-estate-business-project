
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topNavOpen, setTopNavOpen] = useState(true);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 992) {
      setMenuOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <header className="navbar">
     {/* Top Navigation */}
   {topNavOpen &&(
      <div className="top-nav">
        <Container>
          <div className="top-nav-content">
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#"> Learn More</a>
          </div>
           <img className="exit-button"src="/assets/img/Exite Button.png" alt="Close" onClick={() => setTopNavOpen(false)}/>
        </Container>
      </div>
   )}
      {/* Main Navigation */}
      <nav className="main-nav">
        <Container>
          <div className="navbar-logo">
            <img src="/assets/img/logo.png" alt="Estatein Logo" />
            <span>Estatein</span>
          </div>
          <ul className="nav-links">
            <li className="home-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="about-link">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="properties-link">
              <NavLink to="/propertyDetails/1">Properties</NavLink>
            </li>
            <li className="services-link">
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
          <a className="btn" href="/contact">
            Contact Us
          </a>
          <div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <img src="/assets/img/SelectNew.png" alt="Menu" />
          </button>

          
        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="mobile-nav-links">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/propertydetails" onClick={() => setMenuOpen(false)}>
                Properties
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            
            <li className="mobile-contact">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>

          </ul>
        )}
         </div>
        </Container>
        

      </nav>
    </header>
  );
}
export default Navbar;