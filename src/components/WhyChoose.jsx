import { useState } from "react";
import "../styles/WhyChoose.css";

function WhyChoose() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: "https://img.icons8.com/color/96/classroom.png",
      title: "Expert Mentor",
      desc: "Learn directly from an experienced Computer Science teacher with practical guidance.",
      details:
        "Get personal guidance from an experienced Computer Science teacher. Learn concepts clearly, solve doubts and develop practical skills through interactive learning."
    },

    {
      icon: "https://img.icons8.com/color/96/source-code.png",
      title: "Hands-on Projects",
      desc: "Build websites, Python apps, AI models and robotics projects while learning.",
      details:
        "Learning becomes easier when you build something yourself. Students work on real-world projects including websites, Python applications, AI models and robotics projects."
    },

    {
      icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
      title: "Future Ready Skills",
      desc: "Learn AI, Robotics and modern technologies required for tomorrow's careers.",
      details:
        "Prepare for the future by learning Artificial Intelligence, Robotics, Coding and modern technologies in a practical and beginner-friendly way."
    },

    {
      icon: "https://img.icons8.com/color/96/certificate.png",
      title: "Certificates",
      desc: "Receive certificates after course completion to showcase your achievements.",
      details:
        "Students receive a certificate after successfully completing their course. It can be used to showcase their learning and achievements."
    }
  ];

  return (
    <section className="why-section">

      <div className="why-header">

        <p className="why-tag">
          ✨ WHY CHOOSE US
        </p>

        <h2>
          Why Choose <span>CodeWithKhushi?</span>
        </h2>

        <p className="why-subtitle">
          Learn Coding, AI & Robotics through practical projects,
          live classes and industry-ready skills.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div
            className="why-card"
            key={index}
            onClick={() => setSelectedFeature(item)}
          >

            <img
              src={item.icon}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button
              className="primary"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFeature(item);
              }}
            >
              Learn More →
            </button>

          </div>

        ))}

      </div>

      <div className="why-bottom">

        <h3>
          🚀 Ready to Start Your Coding Journey?
        </h3>

        <p>
          Join CodeWithKhushi and learn Coding, AI & Robotics through
          practical projects and expert mentorship.
        </p>

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
  Enroll Now
</button>

      </div>


      {/* WHY CHOOSE POPUP */}

      {selectedFeature && (

        <div
          className="why-popup"
          onClick={() => setSelectedFeature(null)}
        >

          <div
            className="why-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="why-popup-close"
              onClick={() => setSelectedFeature(null)}
            >
              ✕
            </button>

            <img
              src={selectedFeature.icon}
              alt={selectedFeature.title}
            />

            <h2>
              {selectedFeature.title}
            </h2>

            <p>
              {selectedFeature.details}
            </p>

          </div>

        </div>

      )}

    </section>
  );
}

export default WhyChoose;