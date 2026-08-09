import "../styles/Featured.css";

function Featured() {

  return (

    <section className="featured" id="featured">

      <h2>⭐ Featured Courses</h2>

      <p className="featured-text">
        Our most popular courses designed to build creativity,
        coding skills and future-ready minds.
      </p>

      <div className="featured-cards">

        <div className="featured-card">

          <span className="featured-badge">
            Most Popular
          </span>

          <h3>🎮 Scratch Coding</h3>

          <p>
            Learn coding by creating Games, Animations
            and Interactive Stories. Perfect for kids
            aged 6–14.
          </p>

          <button
            className="primary"
            onClick={() =>
              window.open(
                "https://wa.me/916367975699?text=Hi!%20I%20want%20to%20know%20about%20Scratch%20Coding.",
                "_blank"
              )
            }
          >
            Learn More
          </button>

        </div>

        <div className="featured-card">

          <span className="featured-badge">
            Trending
          </span>

          <h3>🤖 Robotics</h3>

          <p>
            Build real robotics projects using Arduino,
            Sensors and STEM concepts with hands-on learning.
          </p>

          <button
            className="primary"
            onClick={() =>
              window.open(
                "https://wa.me/916367975699?text=Hi!%20I%20want%20to%20know%20about%20Robotics.",
                "_blank"
              )
            }
          >
            Learn More
          </button>

        </div>

        <div className="featured-card">

          <span className="featured-badge">
            New
          </span>

          <h3>🐍 Python Programming</h3>

          <p>
            Learn Python from basics to real-world projects
            with interactive live classes.
          </p>

          <button
            className="primary"
            onClick={() =>
              window.open(
                "https://wa.me/916367975699?text=Hi!%20I%20want%20to%20know%20about%20Python.",
                "_blank"
              )
            }
          >
            Learn More
          </button>

        </div>

      </div>

    </section>

  );

}

export default Featured;