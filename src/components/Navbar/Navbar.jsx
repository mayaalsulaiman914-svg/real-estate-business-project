
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";

function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Navigation */}
      <div className="top-nav">
        <Container>
          <div className="top-nav-content">
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#"> Learn More</a>
          </div>
           <img className="exit-button"src="/assets/img/Exite Button.png" alt="Close"/>
        </Container>
      </div>
      {/* Main Navigation */}
      <nav className="main-nav">
        <Container>
          <div className="navbar-logo">
            <img src="/assets/img/logo.png" alt="Estatein Logo" />
            <span>Estatein</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/propertydetails">Properties</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
          <Button>
            Contact Us
          </Button>
          <div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <img src="/assets/img/Select Icon.png" alt="Menu" />
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

          </ul>
        )}
         </div>
        </Container>
        

      </nav>
    </header>
  );
}
export default Navbar;