import React from "react";
import "./Footer.css";

const NAV_COLUMNS = [
  {
    title: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"],
  },
  {
    title: "About Us",
    links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
  },
  {
    title: "Properties",
    links: ["Portfolio", "Categories"],
  },
  {
    title: "Services",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
  {
    title: "Contact Us",
    links: ["Contact Form", "Our Offices"],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3v-1.5c0-.6.4-1 1-1z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20 20h-2.94v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V20H9.82V8.5h2.82v1.57h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.52 1.97 3.52 4.54V20z",
  },
  {
    label: "Twitter",
    path: "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.6.8-2.5 1a4 4 0 00-6.9 3.6A11.3 11.3 0 013 4.9a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 003.2 3.9c-.6.2-1.2.2-1.7.1a4 4 0 003.7 2.8A8 8 0 012 18.4a11.3 11.3 0 006.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.4-1.3 1.9-2.1z",
  },
  {
    label: "YouTube",
    path: "M23 12s0-3.6-.5-5.3c-.2-1-1-1.8-2-2C18.9 4.2 12 4.2 12 4.2s-6.9 0-8.5.5c-1 .2-1.8 1-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3c.2 1 1 1.8 2 2 1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5c1-.2 1.8-1 2-2 .5-1.7.5-5.3.5-5.3zM9.8 15.5v-7l6 3.5-6 3.5z",
  },
];

export default function Footer({ onSubscribe }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (onSubscribe) onSubscribe(email);
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-top">
          <div className="brand-col">
            <div className="brand">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 8v14h20V8L12 2z" fill="#7C5CFC" />
              </svg>
              <span className="brand-name">Estatein</span>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <button type="submit" className="send-btn" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>

          <nav className="nav-columns">
            {NAV_COLUMNS.map((col) => (
              <div className="nav-col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="legal">
            <span>©2023 Estatein. All Rights Reserved.</span>
            <a href="#">Terms &amp; Conditions</a>
          </div>

          <div className="socials">
            {SOCIALS.map((s) => (
              <a href="#" aria-label={s.label} key={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
