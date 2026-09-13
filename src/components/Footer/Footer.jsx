import "./Footer.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import HashLink from "../HashLink/HashLink";

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-main">
            <Container>
            <div className="footer-brand">
                <div className="logo">
                <img
                src="/assets/img/logo.png"
                alt="Estatein"
                className="footer-logo"
                />
                <span>Estatein</span>
                </div>
                <div className="footer-email">
                <img
                    src="/assets/img/EmailIcon.png"
                    alt="Email"
                    className="email-icon"
                />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                />
                <button>
                    <img
                    src="/assets/img/White telegramIcon.png"
                    alt="Subscribe"
                    />
                </button>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                <h3>Home</h3>
                <HashLink to="/#hero">Hero Section</HashLink>
                <HashLink to="/#properties">Features</HashLink>
                <HashLink to="/">Properties</HashLink>
                <HashLink to="/#Testimonials">Testimonials</HashLink>
                <HashLink to="/#faq">FAQ's</HashLink>
                </div>
                <div className="footer-column">
                <h3>About Us</h3>
                <Link to="/about">Our Story</Link>
                <Link to="/about">Our Works</Link>
                <Link to="/about">How It Works</Link>
                <Link to="/about">Our Team</Link>
                <Link to="/about">Our Clients</Link>
                </div>
                <div className="footer-column">
                <h3>Properties</h3>
                <Link to="/propertydetails">Portfolio</Link>
                <Link to="/propertydetails">Categories</Link>
                </div>
                <div className="footer-column">
                <h3>Services</h3>
                <Link to="/services">Valuation Mastery</Link>
                <Link to="/services">Strategic Marketing</Link>
                <Link to="/services">Negotiation Wizardry</Link>
                <Link to="/services">Closing Success</Link>
                <Link to="/services">Property Management</Link>
                </div>
                <div className="footer-column">
                <h3>Contact Us</h3>
                <Link to="/contact">Contact Form</Link>
                <Link to="/contact">Our Offices</Link>
                </div>
            </div>
            </Container>
        </div>
        <div className="footer-bottom">
            <Container>
            <div className="footer-copyright">
                <p>©2023 Estatein. All Rights Reserved.</p>
                <Link to="#">Terms & Conditions</Link>
            </div>
            <div className="footer-social">
                <Link to="#">
                <img src="/assets/img/facebookIcon (1).png" alt="Facebook" />
                </Link>
                <Link to="#">
                <img src="/assets/img/lin Icon (2).png" alt="LinkedIn" />
                </Link>
                <Link to="#">
                <img src="/assets/img/twitter Icon (3).png" alt="Twitter" />
                </Link>
                <Link to="#">
                <img src="/assets/img/Youtube Icon (4).png" alt="YouTube" />
                </Link>
            </div>
            </Container>
        </div>
        </footer>
    );
}

export default Footer;
