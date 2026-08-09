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

        <div className="footer-about">
          <h2>CodeWithKhushi</h2>

          <p>
            Learn Coding, AI & Robotics through practical projects,
            live interactive classes and industry-ready skills.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📞 +91 6367975699</p>

          <p>📧 khushicode27@gmail.com</p>

          <div className="footer-social">

            <a
              href="https://wa.me/916367975699"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/codewithkhushi_ai"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1Azt2JSGRw/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@khushichauhan2528"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CodeWithKhushi | All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;