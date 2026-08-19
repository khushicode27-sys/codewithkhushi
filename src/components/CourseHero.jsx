import "../styles/CourseHero.css";

function CoursesHero() {
  return (
    <section className="courses-hero">
      <div className="courses-hero-content">
        <span className="courses-badge">
          🚀 CODEWITHKHUSHI ACADEMY
        </span>

        <h1>
          Learn Skills That
          <span> Build Your Future.</span>
        </h1>

        <p>
          Explore practical courses in Coding, Web Development,
          Artificial Intelligence, Robotics and more.
        </p>

        <div className="courses-hero-buttons">
          <a href="#courses">
            Explore Courses ↓
          </a>

          <a
            href="https://wa.me/916367975699"
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp"
          >
            💬 Talk to Us
          </a>
        </div>
      </div>

      <div className="courses-hero-visual">
        <div className="tech-orbit orbit-one">💻</div>
        <div className="tech-orbit orbit-two">🤖</div>
        <div className="tech-orbit orbit-three">🐍</div>

        <div className="hero-code-card">
          <div className="code-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>
            &lt;<span>learn</span>&gt;
          </p>

          <p className="code-indent">
            Coding + AI + Robotics
          </p>

          <p>
            &lt;/<span>future</span>&gt;
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoursesHero;