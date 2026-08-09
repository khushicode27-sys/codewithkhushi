import "../styles/Hero.css";
import coding from "../assets/coding.jpg";

function Hero() {

  return (

    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-tag">
          🚀 India's Next Generation Coding Academy
        </p>

        <h1 className="hero-title">
  <span className="word word-1">Learn</span>{" "}
  <span className="word word-2 highlight">Coding</span>
  <span className="word word-3">, AI &</span>{" "}
  <span className="word word-4">Robotics</span>
</h1>

        <p className="hero-subtitle">
          Learn Python, C++, Java, Web Development,
          Artificial Intelligence and Robotics through
          practical projects.
        </p>

        <div className="hero-buttons">

          <button
            className="primary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Start Learning
          </button>

          <button
            className="secondary"
            onClick={() =>
              window.open(
                "https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20book%20a%20FREE%20Demo%20Class.",
                "_blank"
              )
            }
          >
            Free Demo Class
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={coding}
          alt="Coding"
          className="hero-image"
        />

      </div>

    </section>

  );

}

export default Hero;