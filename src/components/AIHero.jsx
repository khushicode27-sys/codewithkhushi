import "../styles/AIHero.css";

function AIHero() {
  return (
    <section className="ai-hero">

      <div className="ai-hero-content">

        <span className="ai-hero-tag">
          🤖 CODEWITHKHUSHI AI
        </span>

        <h1>
          Meet Your
          <span> AI Learning Assistant</span>
        </h1>

        <p>
          Ask questions, learn coding concepts, understand AI,
          explore Robotics and get beginner-friendly explanations
          anytime you need help.
        </p>

        <div className="ai-hero-points">

          <div>
            <span>💻</span>
            <p>Coding Help</p>
          </div>

          <div>
            <span>🧠</span>
            <p>Easy Explanations</p>
          </div>

          <div>
            <span>🤖</span>
            <p>AI & Robotics</p>
          </div>

        </div>

        <button
          className="ai-hero-btn"
          onClick={() => {
            document
              .querySelector(".ai-floating-button")
              ?.click();
          }}
        >
          Ask AI Now →
        </button>

      </div>


      <div className="ai-hero-visual">

        <div className="ai-orbit orbit-one"></div>
        <div className="ai-orbit orbit-two"></div>

        <div className="ai-robot">
          🤖
        </div>

        <div className="ai-floating-card card-one">
          💡 Coding Help
        </div>

        <div className="ai-floating-card card-two">
          🐍 Python
        </div>

        <div className="ai-floating-card card-three">
          🚀 AI Projects
        </div>

      </div>

    </section>
  );
}

export default AIHero;