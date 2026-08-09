import "../styles/Fees.css";

function Fees() {
  return (
    <section className="fees" id="fees">

      <div className="fees-header">

        <h2>💰 Affordable Fees</h2>

        <p>
          Quality education at affordable prices.
          Choose the course that suits you best.
        </p>

      </div>

      <div className="fees-grid">

        <div className="fees-card">

          <h3>💻 C & C++</h3>

          <h1>
            ₹600 <span>/month</span>
          </h1>

          <ul>
            <li>✔ Live Classes</li>
            <li>✔ Practical Projects</li>
            <li>✔ Notes & Assignments</li>
            <li>✔ Doubt Support</li>
          </ul>

        </div>

        <div className="fees-card popular">

          <div className="badge">
            Most Popular
          </div>

          <h3>🐍 Python</h3>

          <h1>
            ₹700 <span>/month</span>
          </h1>

          <ul>
            <li>✔ Live Classes</li>
            <li>✔ Mini Projects</li>
            <li>✔ AI Basics</li>
            <li>✔ Certificate</li>
          </ul>

        </div>

        <div className="fees-card">

          <h3>🌐 Web Development</h3>

          <h1>
            ₹800 <span>/month</span>
          </h1>

          <ul>
            <li>✔ HTML</li>
            <li>✔ CSS</li>
            <li>✔ JavaScript</li>
            <li>✔ React Basics</li>
          </ul>

        </div>

        <div className="fees-card">

          <h3>📚 Academic Subjects</h3>

          <h1>
            ₹600 <span>/month</span>
          </h1>

          <ul>
            <li>✔ Maths</li>
            <li>✔ Science</li>
            <li>✔ English</li>
            <li>✔ Social Science</li>
          </ul>

        </div>

      </div>

      <button
        className="fees-btn"
        onClick={() =>
          window.open(
            "https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20about%20your%20fees.",
            "_blank"
          )
        }
      >
        Enquire About Fees
      </button>

    </section>
  );
}

export default Fees;