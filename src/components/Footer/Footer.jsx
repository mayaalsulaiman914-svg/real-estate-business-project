import "./Footer.css";
import Container from "../Container/Container";

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
                <a href="/#hero">Hero Section</a>
                <a href="/">Features</a>
                <a href="/#proerties">Properties</a>
                <a href="/#testimonials">Testimonials</a>
                <a href="/">FAQ's</a>
                </div>
                <div className="footer-column">
                <h3>About Us</h3>
                <a href="/about">Our Story</a>
                <a href="/about">Our Works</a>
                <a href="/about">How It Works</a>
                <a href="/about">Our Team</a>
                <a href="/about">Our Clients</a>
                </div>
                <div className="footer-column">
                <h3>Properties</h3>
                <a href="/propertydetails">Portfolio</a>
                <a href="/propertydetails">Categories</a>
                </div>
                <div className="footer-column">
                <h3>Services</h3>
                <a href="/services">Valuation Mastery</a>
                <a href="/services">Strategic Marketing</a>
                <a href="/services">Negotiation Wizardry</a>
                <a href="/services">Closing Success</a>
                <a href="/services">Property Management</a>
                </div>
                <div className="footer-column">
                <h3>Contact Us</h3>
                <a href="/contact">Contact Form</a>
                <a href="/contact">Our Offices</a>
                </div>
            </div>
            </Container>
        </div>
        <div className="footer-bottom">
            <Container>
            <div className="footer-copyright">
                <p>©2023 Estatein. All Rights Reserved.</p>
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="footer-social">
                <a href="#">
                <img src="/assets/img/facebookIcon (1).png" alt="Facebook" />
                </a>
                <a href="#">
                <img src="/assets/img/lin Icon (2).png" alt="LinkedIn" />
                </a>
                <a href="#">
                <img src="/assets/img/twitter Icon (3).png" alt="Twitter" />
                </a>
                <a href="#">
                <img src="/assets/img/Youtube Icon (4).png" alt="YouTube" />
                </a>
            </div>
            </Container>
        </div>
        </footer>
    );
}

export default Footer;