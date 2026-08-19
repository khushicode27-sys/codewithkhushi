import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="CodeWithKhushi Logo"
            className="logo-img"
          />
        </Link>

        <Link to="/" onClick={closeMenu}>
          <h2>CodeWithKhushi</h2>
        </Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/courses" onClick={closeMenu}>
            Courses
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/testimonials" onClick={closeMenu}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/ai-assistant" onClick={closeMenu}>
            🤖 AI Assistant
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;