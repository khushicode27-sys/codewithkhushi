import "../styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_u5b3i0t",
        "template_l0jwy6b",
        form.current,
        "tZjKhxcRUpdVrY8ty"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <span className="contact-tag">
          📩 GET IN TOUCH
        </span>

        <h2>Contact Us</h2>

        <p>
          Have any questions? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <h3>Let's Connect 🚀</h3>

          <p>
            Learn Coding, AI & Robotics with practical
            projects and live interactive classes.
          </p>

          <a
            href="tel:+916367975699"
            className="info-box"
          >
            <FaPhone />
            <span>+91 6367975699</span>
          </a>

          <a
            href="mailto:khushicode27@gmail.com"
            className="info-box"
          >
            <FaEnvelope />
            <span>khushicode27@gmail.com</span>
          </a>

          <div className="social-icons">

            <a
              href="https://wa.me/916367975699?text=Hello%20Khushi,%20I%20want%20to%20know%20about%20your%20coding%20courses."
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

        {/* CONTACT FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Interested Course"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message →"}
          </button>

          {status === "success" && (
            <div className="form-message success">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="form-message error">
              ❌ Something went wrong. Please try again or contact us on WhatsApp.
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;