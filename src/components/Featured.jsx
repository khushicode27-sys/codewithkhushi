import { Link } from "react-router-dom";
import "../styles/Featured.css";

function Featured() {
  return (
    <section className="featured" id="featured">

      {/* SECTION HEADER */}

      <h2>
        ⭐ Featured Coding Courses for Kids
      </h2>

      <p className="featured-text">
        Explore popular courses designed to build creativity,
        programming skills and practical, future-ready knowledge
        through engaging projects.
      </p>


      <div className="featured-cards">

        {/* SCRATCH */}

        <div className="featured-card">

          <span className="featured-badge">
            Most Popular
          </span>

          <h3>
            🎮 Scratch Coding for Kids
          </h3>

          <p>
            Learn programming basics by creating games, animations
            and interactive stories. A beginner-friendly way for
            kids aged 6–14 to start learning coding.
          </p>

          <Link
            to="/courses"
            className="primary"
          >
            Learn More →
          </Link>

        </div>


        {/* ROBOTICS */}

        <div className="featured-card">

          <span className="featured-badge">
            Trending
          </span>

          <h3>
            🤖 Robotics for Kids
          </h3>

          <p>
            Build practical robotics projects using Arduino,
            sensors and STEM concepts while developing coding,
            problem-solving and creative skills.
          </p>

          <Link
            to="/courses"
            className="primary"
          >
            Learn More →
          </Link>

        </div>


        {/* PYTHON */}

        <div className="featured-card">

          <span className="featured-badge">
            New
          </span>

          <h3>
            🐍 Python Programming for Beginners
          </h3>

          <p>
            Learn Python from the basics and gradually build
            practical applications and beginner-friendly projects
            through interactive learning.
          </p>

          <Link
            to="/courses"
            className="primary"
          >
            Learn More →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Featured;