import "../styles/ContactHero.css";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-content">

        <span className="contact-hero-tag">
          📩 LET'S CONNECT
        </span>

        <h1>
          Let's Build Your
          <span> Tech Journey Together.</span>
        </h1>

        <p>
          Have a question about our courses, fees or learning
          programs? Reach out to us and let's find the right
          learning path for you.
        </p>

        <div className="contact-hero-buttons">

          <a
            href="https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20more%20about%20your%20courses."
            target="_blank"
            rel="noreferrer"
            className="contact-primary-btn"
          >
            💬 Chat on WhatsApp
          </a>

          <a
            href="#contact"
            className="contact-secondary-btn"
          >
            Send Enquiry ↓
          </a>

        </div>

      </div>


      <div className="contact-hero-visual">

        <div className="contact-orbit orbit-one"></div>
        <div className="contact-orbit orbit-two"></div>

        <div className="contact-main-card">

          <div className="contact-card-icon">
            💻
          </div>

          <span>CODEWITHKHUSHI</span>

          <h3>
            We're Here<br />
            To Help You.
          </h3>

          <p>
            Coding • AI • Robotics • Web
          </p>

          <div className="contact-card-status">
            <i></i>
            Available for enquiries
          </div>

        </div>


        <div className="contact-floating-card phone-card">
          📞
          <span>+91 6367975699</span>
        </div>

        <div className="contact-floating-card mail-card">
          ✉️
          <span>Let's Talk</span>
        </div>

      </div>

    </section>
  );
}

export default ContactHero;