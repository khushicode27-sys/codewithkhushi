import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

import scratch from "../assets/scratch.jpg";
import robot from "../assets/robot.jpg";
import traffic from "../assets/traffic.jpg";
import calculator from "../assets/calculator.jpg";
import portfolio from "../assets/portfolio.jpg";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: scratch,
      title: "🎮 Scratch Games",
      description:
        "Create fun games and animations using Scratch. Students learn programming concepts through creative and interactive projects.",
    },

    {
      image: robot,
      title: "🤖 Smart Robot",
      description:
        "Build smart robots using Arduino and sensors while learning the fundamentals of electronics, coding and robotics.",
    },

    {
      image: traffic,
      title: "🚦 Traffic Light",
      description:
        "Learn electronics and programming by creating a working traffic light project using LEDs and basic components.",
    },

    {
      image: calculator,
      title: "🐍 Python Calculator",
      description:
        "Create your first Python application and understand variables, functions, inputs and basic programming logic.",
    },

    {
      image: portfolio,
      title: "🌐 Personal Portfolio",
      description:
        "Design and build your own professional portfolio website using modern web development concepts.",
    },
  ];

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        <h2>🚀 Projects You'll Build</h2>

        <p>
          Learn by creating exciting real-world projects and build
          confidence through practical learning.
        </p>

      </div>


      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button
                className="primary"
                onClick={() => setSelectedProject(project)}
              >
                View Project →
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* ================= PROJECT POPUP ================= */}

      {selectedProject && (

        <div
          className="project-popup"
          onClick={closePopup}
        >

          <div
            className="project-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-popup-close"
              onClick={closePopup}
              aria-label="Close"
            >
              ✕
            </button>


            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />


            <h2>
              {selectedProject.title}
            </h2>


            <p>
              {selectedProject.description}
            </p>


            {/* GO TO COURSES */}

            <Link
              to="/courses"
              className="primary project-course-btn"
              onClick={closePopup}
            >
              Explore Courses →
            </Link>

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;