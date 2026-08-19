import "../styles/FAQHero.css";

function FAQHero() {
  return (
    <section className="faq-hero">

      <div className="faq-hero-content">

        <span className="faq-hero-badge">
          💡 NEED HELP?
        </span>

        <h1>
          Got Questions?
          <span> We've Got Answers.</span>
        </h1>

        <p>
          Find quick answers about our Coding, AI, Robotics,
          Web Development courses, fees, classes and learning
          experience.
        </p>

        <a href="#faq">
          Explore FAQs ↓
        </a>

      </div>


      <div className="faq-hero-visual">

        <div className="faq-bubble bubble-one">
          💻
        </div>

        <div className="faq-bubble bubble-two">
          🤖
        </div>

        <div className="faq-bubble bubble-three">
          🎓
        </div>


        <div className="faq-question-card">

          <div className="faq-card-icon">
            ❓
          </div>

          <div>
            <span>FAQ</span>

            <h3>
              How can we help you?
            </h3>
          </div>

        </div>


        <div className="faq-mini-card">
          <strong>+</strong>
          <span>Ask anything</span>
        </div>

      </div>

    </section>
  );
}

export default FAQHero;