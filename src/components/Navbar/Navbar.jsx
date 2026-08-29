
import "./Navbar.css";
import Container from "../Container/Container";
import Button from "../Button/Button";

function Navbar() {
  return (
    <header className="navbar">
      {/* Top Navigation */}
      <div className="top-nav">
        <Container>
          <div className="top-nav-content">
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#"> Learn More</a>
          </div>
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
        </Container>
      </nav>
    </header>
  );
}
export default Navbar;