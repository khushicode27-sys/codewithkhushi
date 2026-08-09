import { useState } from "react";
import "../styles/Achievements.css";

import certificate1 from "../assets/certificate1.jpeg";
import certificate2 from "../assets/certificate2.jpeg";
import certificate3 from "../assets/certificate3.jpeg";
import certificate4 from "../assets/certificate4.jpeg";

function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      image: certificate1,
      title: "🏆 Inspiring Teacher Award",
      description:
        "Recognition for inspiring students through dedicated teaching, practical learning and continuous mentorship.",
    },
    {
      image: certificate2,
      title: "🎓 ITO Certified Educator",
      description:
        "Certified educator recognition reflecting commitment to quality education and student development.",
    },
    {
      image: certificate3,
      title: "🥇 Teaching Excellence",
      description:
        "Recognition for excellence in teaching and creating an engaging learning environment.",
    },
    {
      image: certificate4,
      title: "🤖 AI & Robotics Mentor",
      description:
        "Recognition for mentoring students in Artificial Intelligence, Robotics and practical technology projects.",
    },
  ];

  return (
    <section className="achievements" id="achievements">

      <div className="achievement-heading">
        <span className="achievement-tag">
          🏆 OUR ACHIEVEMENTS
        </span>

        <h2>Achievements & Certificates</h2>

        <p>
          Our achievements reflect our commitment to quality education,
          Coding, AI and Robotics.
        </p>
      </div>

      <div className="achievement-grid">

        {certificates.map((item, index) => (
          <div
            className="achievement-card"
            key={index}
            onClick={() => setSelectedCertificate(item)}
          >

            <div className="certificate-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <h3>{item.title}</h3>

            <span className="view-certificate">
              View Certificate →
            </span>

          </div>
        ))}

      </div>

      {/* CERTIFICATE POPUP */}

      {selectedCertificate && (
        <div
          className="certificate-popup"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-popup"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <h2>{selectedCertificate.title}</h2>

            <p>
              {selectedCertificate.description}
            </p>

          </div>

        </div>
      )}

    </section>
  );
}

export default Achievements;