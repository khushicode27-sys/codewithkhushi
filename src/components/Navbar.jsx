import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo.jpeg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Courses",
      path: "/courses",
    },

    {
      name: "Blog",
      path: "/blog",
    },

    {
      name: "Projects",
      path: "/projects",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Testimonials",
      path: "/testimonials",
    },

    {
      name: "FAQ",
      path: "/faq",
    },

    {
      name: "Contact",
      path: "/contact",
    },

    {
      name: "🤖 AI Assistant",
      path: "/ai-assistant",
    },
  ];

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}

      <div className="logo">

        <Link
          to="/"
          onClick={closeMenu}
          className="logo-link"
        >
          <img
            src={logo}
            alt="CodeWithKhushi Coding Academy Logo"
            className="logo-img"
          />
        </Link>

        <Link
          to="/"
          onClick={closeMenu}
          className="logo-title"
        >
          <h2>CodeWithKhushi</h2>
        </Link>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


      {/* ================= NAVIGATION ================= */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        {navLinks.map((link) => (

          <li key={link.path}>

            <Link
              to={link.path}
              onClick={closeMenu}
              className={
                location.pathname === link.path
                  ? "active-link"
                  : ""
              }
            >
              {link.name}
            </Link>

          </li>

        ))}

      </ul>

    </nav>
  );
}

export default Navbar;