import { useEffect, useState } from "react";
import "../styles/Subjects.css";

function Subjects() {
  const [textIndex, setTextIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjectTexts = {
    math: [
      "Concept Building",
      "Problem Solving",
      "Weekly Tests",
      "Doubt Solving",
    ],

    science: [
      "Concept Based Learning",
      "Experiments",
      "Numerical Practice",
      "Weekly Tests",
    ],

    computer: [
      "Computer Basics",
      "Programming",
      "Practical Skills",
      "Digital Literacy",
    ],

    social: [
      "History",
      "Geography",
      "Civics",
      "Concept Learning",
    ],
  };

  const subjects = [
    {
      id: "math",
      icon: "📘",
      title: "Mathematics",
      description:
        "Build strong mathematical concepts through practice, problem solving and regular tests.",
      details:
        "Students learn Mathematics with concept-based teaching and step-by-step problem solving. Topics are explained clearly with regular practice, homework, weekly tests and doubt-solving sessions.",
    },

    {
      id: "science",
      icon: "🔬",
      title: "Science",
      description:
        "Understand Science concepts through practical examples, experiments and activities.",
      details:
        "Learn Physics, Chemistry and Biology concepts through simple explanations, real-life examples, experiments and regular practice. The focus is on understanding concepts rather than memorizing them.",
    },

    {
      id: "computer",
      icon: "💻",
      title: "Computer",
      description:
        "Develop computer skills, programming knowledge and digital literacy.",
      details:
        "Students learn computer fundamentals, digital skills, programming basics and practical computer applications according to their grade level.",
    },

    {
      id: "social",
      icon: "🌍",
      title: "Social Science",
      description:
        "Learn History, Geography, Civics and other concepts in an easy and engaging way.",
      details:
        "Social Science is taught using stories, examples, maps and concept-based explanations. Students understand History, Geography, Civics and related topics with regular revision and practice.",
    },
  ];

  /* Automatic text change */

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="subjects" id="subjects">

      {/* SECTION HEADER */}

      <div className="subjects-header">

        <h2>
          📚 Academic Subjects for School Students
        </h2>

        <p>
          Along with coding and technology courses, we provide
          academic coaching for school students with concept-based
          learning, regular practice and personal guidance.
        </p>

      </div>


      {/* SUBJECTS GRID */}

      <div className="subjects-grid">

        {subjects.map((subject) => (
          <div
            className="subject-card"
            key={subject.id}
          >

            <h3>
              {subject.icon} {subject.title}
            </h3>

            <p className="animated-text">
              {subjectTexts[subject.id][textIndex]}
            </p>

            <button
              onClick={() => setSelectedSubject(subject)}
            >
              Learn More
            </button>

          </div>
        ))}

      </div>


      {/* CLASS INFORMATION */}

      <div className="subject-note">

        <h3>
          🎓 Classes Available for Grade 1–10
        </h3>

        <p>
          Small batches • Personal Attention • Weekly Tests •
          Doubt Solving • Affordable Fees
        </p>

        <button
          className="primary"
          onClick={() =>
            window.open(
              "https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20about%20Academic%20Subjects.",
              "_blank"
            )
          }
        >
          Enquire Now
        </button>

      </div>


      {/* SUBJECT POPUP */}

      {selectedSubject && (
        <div
          className="subject-popup"
          onClick={() => setSelectedSubject(null)}
        >

          <div
            className="subject-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              className="subject-popup-close"
              onClick={() => setSelectedSubject(null)}
              aria-label="Close subject details"
            >
              ✕
            </button>


            {/* ICON */}

            <div className="subject-popup-icon">
              {selectedSubject.icon}
            </div>


            {/* TITLE */}

            <h2>{selectedSubject.title}</h2>


            {/* DETAILS */}

            <p>
              {selectedSubject.details}
            </p>


            {/* WHATSAPP */}

            <button
              className="subject-enquire"
              onClick={() =>
                window.open(
                  `https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                    selectedSubject.title
                  )}.`,
                  "_blank"
                )
              }
            >
              Enquire on WhatsApp →
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Subjects;