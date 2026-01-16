import { Link } from "react-router-dom";
import "../index.css";
import myLogo from "../assets/mylogo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + Brand Name */}
      <div className="brand-container">
        <img src={myLogo} alt="Logo" className="logo-img" />
        <h1 className="brand-title glitch-text" data-text="GlitchGraphix">
          GlitchGraphix
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <Link to="/"><button className="nav-btn">Home</button></Link>
        <Link to="/services"><button className="nav-btn">Services</button></Link>
        <Link to="/portfolio"><button className="nav-btn">Portfolio</button></Link>
        <Link to="/about"><button className="nav-btn">About</button></Link>
      </div>
    </nav>
  );
}
