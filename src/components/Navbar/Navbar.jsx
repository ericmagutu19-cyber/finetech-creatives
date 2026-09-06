import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/finetech-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">

        <img
          src={logo}
          alt="Fine Tech Creatives"
          className="navbar-logo"
          width="64"
          height="64"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#services" className="nav-link">
            Services
          </a>

          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>

          <a href="#packages" className="nav-link">
            Packages
          </a>

          <a href="#audit" className="nav-link">
            Contact
          </a>

          <a href="#audit" className="btn-primary">
            Free Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>

          <a href="#packages" onClick={() => setMenuOpen(false)}>
            Packages
          </a>

          <a href="#audit" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="#audit"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}