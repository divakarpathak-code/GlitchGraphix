import { Link } from "react-router-dom";
import "../index.css";
import myLogo from "../assets/mylogo.jpg";
import Trail from "../components/Trail";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Cursor Trail */}
      <Trail />

      {/* Stars Background */}
      <div className="stars">
        {Array.from({ length: 150 }).map((_, i) => (
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
          ></div>
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

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Design So Sharp,
          <span>It Cuts Through Noise.</span>
        </h1>

        <p className="hero-subtitle">
          You imagine it.<br />
          <strong>We make it impossible to ignore.</strong>
          <br /><br />
          Branding • Logos • Websites • 3D • Web Applications
        </p>

        <button className="glow-btn">Enter the Glitch</button>
      </section>

      {/* Warning Section */}
      <section className="warning">
        <p>
          ⚠️ WARNING: Our designs may cause excessive attention,
          higher conversions, and unhealthy levels of obsession.
        </p>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <h2>Proof of Impact</h2>
        <div className="items">
          <div className="item">
            <h3>100+ Logos Engineered</h3>
            <p>Identities people recognize without reading names.</p>
          </div>
          <div className="item">
            <h3>50+ Visual Campaigns</h3>
            <p>Designs that stop scrolling instantly.</p>
          </div>
          <div className="item">
            <h3>10+ Web Applications</h3>
            <p>Interfaces users don’t want to close.</p>
          </div>
          <div className="item">
            <h3>Custom Digital Art</h3>
            <p>Crafted to dominate every screen size.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-form">
          <h2>Ready to Break the Internet?</h2>
          <form
            action="mailto:your-email@example.com"
            method="post"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Tell us how wild you want it"
              rows={6}
              required
            ></textarea>
            <button type="submit" className="contact-btn">Start the Takeover</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>Email: divakarpathsk39@gmail.com</p>
          <p>Phone: +91 8406800403</p>
          <p>Location: Patna, Bihar, India</p>
        </div>
      </section>

      <footer>&copy; 2025 GlitchGraphix. Designed to dominate.</footer>
    </div>
  );
}
