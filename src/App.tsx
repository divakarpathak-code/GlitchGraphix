import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

// 🔹 Service Pages
import BrandingLogo from "./pages/branding-logo";
import GraphicDesign from "./pages/graphic-design";
import PortfolioWebsites from "./pages/portfolio-websites";
import WebDevelopment from "./pages/web-development";
import MiniApp from "./pages/mini-app";
import Ecommerce from "./pages/ecommerce";
import UiUx from "./pages/ui-ux";
import ThreeDDesign from "./pages/three-d-design";
import GameDevelopment from "./pages/game-development";

import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  // loader delay — synced with gate + car animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // cursor trail — runs only AFTER loader disappears
  useEffect(() => {
    if (loading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dot = document.createElement("div");
      dot.classList.add("trail-dot");
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 900);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [loading]);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="site-content gate-open">
          <Router>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />

              {/* Services Pages */}
              <Route path="/services/branding-logo" element={<BrandingLogo />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route
                path="/services/portfolio-websites"
                element={<PortfolioWebsites />}
              />

              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mini-app" element={<MiniApp />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />

              <Route path="/services/ui-ux" element={<UiUx />} />
              <Route path="/services/three-d-design" element={<ThreeDDesign />} />
              <Route
                path="/services/game-development"
                element={<GameDevelopment />}
              />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}
