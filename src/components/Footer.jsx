import { Link } from "react-router-dom";
import "../styles/Footer.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}

        <div className="footer-about">

          <h2>CodeWithKhushi</h2>

          <p>
            Learn Coding, Python, AI, Robotics and Web Development
            through practical projects and live interactive classes.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/courses">
            Coding Courses
          </Link>

          <Link to="/projects">
            Coding Projects
          </Link>

          <Link to="/about">
            About CodeWithKhushi
          </Link>

          <Link to="/testimonials">
            Student Feedback
          </Link>

          <Link to="/faq">
            FAQs
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* CONTACT */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📞 +91 6367975699</p>

          <p>📧 khushicode27@gmail.com</p>


          {/* SOCIAL LINKS */}

          <div className="footer-social">

            <a
              href="https://wa.me/916367975699"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/codewithkhushi_ai"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1Azt2JSGRw/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@khushichauhan2528"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="footer-bottom">
        © 2026 CodeWithKhushi | All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;