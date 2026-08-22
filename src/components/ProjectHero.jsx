import "../styles/ProjectHero.css";

function ProjectHero() {
  return (
    <section className="project-hero">

      <div className="project-hero-content">

        <span className="project-hero-badge">
          🚀 CODEWITHKHUSHI PROJECT LAB
        </span>

        <h1>
          Coding Projects
          <span> for Kids & Students</span>
          <br />
          Build. Create. Innovate.
        </h1>

        <p>
          Turn your ideas into real-world projects with Coding,
          Python, AI, Robotics, Scratch and Web Development.
          Learn by building, experimenting and creating practical projects.
        </p>

        <div className="project-hero-buttons">

          <a href="#projects">
            Explore Projects ↓
          </a>

          <a
            href="https://wa.me/916367975699"
            target="_blank"
            rel="noreferrer"
            className="project-whatsapp"
          >
            💬 Start a Project
          </a>

        </div>

      </div>


      <div className="project-hero-visual">

        <div className="project-floating-icon icon-one">
          💻
        </div>

        <div className="project-floating-icon icon-two">
          🤖
        </div>

        <div className="project-floating-icon icon-three">
          🚀
        </div>

        <div className="project-floating-icon icon-four">
          🐍
        </div>


        <div className="project-lab-card">

          <div className="lab-top">

            <div className="lab-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>project_lab</span>

          </div>


          <div className="lab-code">

            <p>
              <span className="code-purple">const</span>{" "}
              project =
            </p>

            <p className="code-indent">
              <span className="code-yellow">
                "your_idea"
              </span>;
            </p>

            <p>
              <span className="code-purple">
                build
              </span>
              (project);
            </p>

            <p className="code-success">
              ✓ Project Created!
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectHero;