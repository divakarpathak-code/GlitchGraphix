import { useRef } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import myLogo from "../assets/mylogo.jpg";
import Trail from "../components/Trail";

export default function Services() {
  const identityRef = useRef<HTMLHeadingElement>(null);
  const digitalRef = useRef<HTMLHeadingElement>(null);
  const interactionRef = useRef<HTMLHeadingElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Trail />

      {/* Stars Background */}
      <div className="stars">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand-container">
          <img src={myLogo} alt="Logo" className="logo-img" />
          <h1 className="brand-title glitch-text" data-text="GlitchGraphix">
            GlitchGraphix
          </h1>
        </div>

        <div className="nav-buttons">
          <Link to="/"><button>Home</button></Link>
          <Link to="/services"><button>Services</button></Link>
          <Link to="/portfolio"><button>Portfolio</button></Link>
          <Link to="/about"><button>About</button></Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          Thoughtful <span>Services</span>
        </h1>
        <p className="hero-subtitle">
          Designed with care. Built with clarity.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">

        {/* IDENTITY CORE */}
        <h2 ref={identityRef} className="services-group-title" onClick={() => scrollTo(identityRef)}>
          IDENTITY CORE
        </h2>
        <p className="group-subtitle">
          Visual foundations that feel consistent and recognizable.
        </p>

        <div className="services-group">
          <Link to="/services/branding-logo" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Branding & Logo Design</h3>
              <p className="service-info">Branding and logo designs that reflect your identity clearly.</p>
            </div>
          </Link>

          <Link to="/services/graphic-design" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Graphic Design</h3>
              <p className="service-info">Posters, banners, and social media creatives made with balance.</p>
            </div>
          </Link>

          <Link to="/services/portfolio-websites" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Portfolio Websites</h3>
              <p className="service-info">Clean and elegant websites for personal or professional use.</p>
            </div>
          </Link>
        </div>

        {/* DIGITAL ENGINE */}
        <h2 ref={digitalRef} className="services-group-title" onClick={() => scrollTo(digitalRef)}>
          DIGITAL ENGINE
        </h2>
        <p className="group-subtitle">
          Development focused on performance and reliability.
        </p>

        <div className="services-group">
          <Link to="/services/web-development" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Web Development</h3>
              <p className="service-info">Responsive, modern websites built for smooth performance.</p>
            </div>
          </Link>

          <Link to="/services/mini-app" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Mini App Development</h3>
              <p className="service-info">Lightweight applications tailored to specific needs.</p>
            </div>
          </Link>

          <Link to="/services/ecommerce" className="service-link">
            <div className="service-card">
              <h3 className="service-title">E-commerce Websites</h3>
              <p className="service-info">Online stores with practical features and clean workflows.</p>
            </div>
          </Link>
        </div>

        {/* INTERACTION LAB */}
        <h2 ref={interactionRef} className="services-group-title" onClick={() => scrollTo(interactionRef)}>
          INTERACTION LAB
        </h2>
        <p className="group-subtitle">
          Experiences designed to feel natural and engaging.
        </p>

        <div className="services-group">
          <Link to="/services/ui-ux" className="service-link">
            <div className="service-card">
              <h3 className="service-title">UI / UX Design</h3>
              <p className="service-info">Interfaces that are easy to understand and comfortable to use.</p>
            </div>
          </Link>

          <Link to="/services/three-d-design" className="service-link">
            <div className="service-card">
              <h3 className="service-title">3D Designing</h3>
              <p className="service-info">3D models and visuals created with attention to detail.</p>
            </div>
          </Link>

          <Link to="/services/game-development" className="service-link">
            <div className="service-card">
              <h3 className="service-title">Game Development</h3>
              <p className="service-info">Simple and engaging 2D or 3D game experiences.</p>
            </div>
          </Link>
        </div>

      </section>

      <footer>&copy; 2025 GlitchGraphix. All Rights Reserved.</footer>
    </div>
  );
}
