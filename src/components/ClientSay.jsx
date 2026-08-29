import React, { useRef, useState, useEffect, useCallback } from "react";
import "./client say.css";
import avatarWadeWarren from "./assets/avatar-wade-warren.png";
import avatarEmelieThomson from "./assets/avatar-emelie-thomson.png";
import avatarJohnMans from "./assets/avatar-john-mans.png";
import starIcon from "./assets/star.png";
import arrowIcon from "./assets/arrow.png";

const TESTIMONIALS = [
  {
    name: "Wade Warren",
    location: "USA, California",
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    avatar: avatarWadeWarren,
  },
  {
    name: "Emelie Thomson",
    location: "USA, Florida",
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    avatar: avatarEmelieThomson,
  },
  {
    name: "John Mans",
    location: "USA, Nevada",
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    avatar: avatarJohnMans,
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials({ testimonials = TESTIMONIALS }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".testimonial-card");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate needs.
          </p>
        </div>

        <div className="testimonials-body">
          <div className="testimonials-track" ref={trackRef}>
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.name}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span className="star-chip" key={i}>
                      <img src={starIcon} alt="" />
                    </span>
                  ))}
                </div>

                <div className="testimonial-body">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>

                <div className="testimonial-person">
                  <span className="avatar">
                    {t.avatar ? <img src={t.avatar} alt={t.name} /> : initials(t.name)}
                  </span>
                  <div className="person-info">
                    <span className="name">{t.name}</span>
                    <span className="location">{t.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials-nav">
            <button
              type="button"
              className="nav-arrow nav-arrow--prev"
              aria-label="Previous testimonials"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
            >
              <img src={arrowIcon} alt="" />
            </button>
            <button
              type="button"
              className="nav-arrow"
              aria-label="Next testimonials"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
            >
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
