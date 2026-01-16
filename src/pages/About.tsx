  import { Link } from "react-router-dom";
  import "../index.css";
  import myLogo from "../assets/mylogo.jpg";
  import Trail from "../components/Trail"; // make sure the path is correct

  export default function About() {
    return (
      <div>
        {/* Continuous Cursor Trail */}
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
                animationDuration: `${Math.random() * 5 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Navbar - MATCHES HOME.TSX */}
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

        <div style={{ padding: "150px 20px", textAlign: "center", color: "#00eaff" }}>
          <h1>About Us</h1>
          <p>Learn more about GlitchGraphix, our mission, and our team.</p>
        </div>

        <footer>&copy; 2025 GlitchGraphix. All Rights Reserved.</footer>
      </div>
    );
  }
