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
                <HashLink to="/#property">Features</HashLink>
                <HashLink to="/properties#properties">Properties</HashLink>
                <HashLink to="/#Testimonials">Testimonials</HashLink>
                <HashLink to="/#faq">FAQ's</HashLink>
                </div>
                <div className="footer-column">
                <h3>About Us</h3>
                <HashLink to="/about#story">Our Story</HashLink>
                <HashLink to="/about#works">Our Works</HashLink>
                <HashLink to="/about#it-works">How It Works</HashLink>
                <HashLink to="/about#meet">Our Team</HashLink>
                <HashLink to="/about#clients">Our Clients</HashLink>
                </div>
                <div className="footer-column">
                <h3>Properties</h3>
                <Link to="/properties#properties-hero">Portfolio</Link>
                <Link to="/properties#properties">Categories</Link>
                </div>
                <div className="footer-column">
                <h3>Services</h3>
                <HashLink to="/services#mastary">Valuation Mastery</HashLink>
                <HashLink to="/services#value">Strategic Marketing</HashLink>
                <HashLink to="/services#effortless">Negotiation Wizardry</HashLink>
                <HashLink to="/services#smart">Closing Success</HashLink>
                <HashLink to="/services#hero-properties">Property Management</HashLink>
                </div>
                <div className="footer-column">
                <h3>Contact Us</h3>
                <HashLink to="/contact#connect-form">Contact Form</HashLink>
                <HashLink to="/contact#office">Our Offices</HashLink>
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
