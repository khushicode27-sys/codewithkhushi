import "../styles/DemoVideo.css";

function DemoVideo() {
  return (
    <section className="demo-video" id="demo">

      <div className="demo-header">

        <h2>🎥 Watch Our Free Demo Class</h2>

        <p>
          Experience our teaching style before joining.
          Watch a FREE coding demo class and see how we teach
          through practical learning.
        </p>

      </div>

      <div className="video-wrapper">

        <iframe
          src="https://www.youtube.com/embed/72livo_jV_M"
          title="CodeWithKhushi Demo Class"
          allowFullScreen
        ></iframe>

      </div>

      <button
        className="demo-btn"
        onClick={() =>
          window.open(
            "https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20book%20a%20FREE%20Demo%20Class.",
            "_blank"
          )
        }
      >
        Book FREE Demo Class
      </button>

    </section>
  );
}

export default DemoVideo;