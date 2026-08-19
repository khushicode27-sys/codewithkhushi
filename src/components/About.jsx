import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      {/* ================= LEFT CONTENT ================= */}

      <div className="about-left">

        <span className="about-tag">
          👩‍🏫 ABOUT CODEWITHKHUSHI
        </span>

        <h2>
          Turning Curiosity Into
          <span> Future-Ready Skills</span>
        </h2>

        <p className="about-intro">
          Hi! I'm <strong>Khushi Chauhan</strong>, the founder of
          CodeWithKhushi. I believe every student can learn technology
          when it is taught in a simple, practical and enjoyable way.
        </p>

        <p className="about-text">
          Through live interactive classes, students learn Coding,
          Artificial Intelligence, Robotics and Web Development by
          actually building projects instead of simply memorizing
          concepts.
        </p>

        {/* ================= HIGHLIGHTS ================= */}

        <div className="about-highlights">

          <div className="about-highlight">
            <span>💻</span>

            <div>
              <h3>Practical Learning</h3>

              <p>
                Learn by building real-world projects.
              </p>
            </div>
          </div>


          <div className="about-highlight">
            <span>🤖</span>

            <div>
              <h3>Future Skills</h3>

              <p>
                Coding, AI, Robotics & modern technology.
              </p>
            </div>
          </div>


          <div className="about-highlight">
            <span>👩‍🏫</span>

            <div>
              <h3>Personal Guidance</h3>

              <p>
                Interactive classes with individual attention.
              </p>
            </div>
          </div>


          <div className="about-highlight">
            <span>🏆</span>

            <div>
              <h3>Achievement Focused</h3>

              <p>
                Projects, certificates and confidence building.
              </p>
            </div>
          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <a
          href="https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20more%20about%20CodeWithKhushi."
          target="_blank"
          rel="noreferrer"
          className="about-btn"
        >
          Start Learning →
        </a>

      </div>


      {/* ================= RIGHT PROFILE CARD ================= */}

      <div className="about-right">

        <div className="about-card">

          {/* PROFILE */}

          <div className="about-card-top">

            <div className="about-avatar">
              👩‍💻
            </div>

            <div>
              <h3>Khushi Chauhan</h3>

              <p>
                Founder • CodeWithKhushi
              </p>
            </div>

          </div>


          {/* QUOTE */}

          <div className="about-quote">

            <span>“</span>

            <p>
              Learn technology by creating, experimenting and
              building something of your own.
            </p>

          </div>


          {/* ================= GOALS ================= */}

          <h3 className="goals-title">
            🎯 Our Goals
          </h3>


          <div className="about-stats">

            <div>
              <strong>500+</strong>
              <span>Target Students</span>
            </div>


            <div>
              <strong>50+</strong>
              <span>Target Projects</span>
            </div>


            <div>
              <strong>100%</strong>
              <span>Practical Learning</span>
            </div>


            <div>
              <strong>2+</strong>
              <span>Target Recognitions</span>
            </div>

          </div>


          {/* CARD FOOTER */}

          <div className="about-card-footer">
            🚀 Coding • AI • Robotics • Web Development
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;