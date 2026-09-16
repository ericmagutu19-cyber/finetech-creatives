import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Fine-Tech-Creatives-Logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">

        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          aria-label="Fine Tech Creatives - Home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Fine Tech Creatives"
            className="navbar-logo"
            width="64"
            height="112"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </a>

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
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu">
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>

          <a href="#packages" onClick={closeMenu}>
            Packages
          </a>

          <a href="#audit" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#audit"
            className="btn-primary"
            onClick={closeMenu}
          >
            Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
