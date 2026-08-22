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
          <span className="word word-1">Online Coding Classes</span>{" "}
          <span className="word word-2 highlight">for Kids</span>{" "}
          <span className="word word-3">& School Students</span>
          <span className="word word-4"> in India</span>
        </h1>

        <p className="hero-subtitle">
          Learn Coding, Python, C++, Java, Scratch, Web Development,
          Artificial Intelligence and Robotics through live, practical
          and project-based learning.
        </p>

        <div className="hero-buttons">

          <Link
            to="/courses"
            className="primary"
          >
            Explore Courses →
          </Link>

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
          alt="Online coding classes for kids and school students"
          className="hero-image"
        />

      </div>

    </section>
  );
}

export default Hero;