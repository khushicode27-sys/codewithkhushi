import { Link } from "react-router-dom";
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

          {/* COURSES PAGE */}

          <Link
            to="/courses"
            className="primary"
          >
            Start Learning →
          </Link>


          {/* FREE DEMO */}

          <Link
            to="/courses#demo"
            className="secondary"
          >
            Free Demo Class 🎁
          </Link>

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