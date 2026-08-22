import { useEffect, useState } from "react";
import "../styles/Courses.css";

function Courses() {
  const [textIndex, setTextIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseTexts = {
    cpp: [
      "Programming Fundamentals",
      "C & C++ Logic Building",
      "Data Structures Basics",
      "Mini Projects",
    ],

    python: [
      "Python Basics",
      "Functions & Logic",
      "Python Applications",
      "AI Projects",
    ],

    web: [
      "HTML & CSS",
      "JavaScript",
      "Responsive Websites",
      "React Projects",
    ],

    ai: [
      "AI Fundamentals",
      "Machine Learning Basics",
      "AI Tools",
      "Chatbot Projects",
    ],

    robotics: [
      "Arduino Basics",
      "Sensors & Components",
      "Robot Programming",
      "IoT Projects",
    ],

    scratch: [
      "Logic Building",
      "Game Development",
      "Animation",
      "Creative Projects",
    ],
  };

  const courses = [
    {
      id: "cpp",
      icon: "💻",
      title: "C & C++",
      description:
        "Learn programming fundamentals and build strong coding logic through practical projects.",
      details:
        "Learn C and C++ from the basics with step-by-step guidance. The course covers programming fundamentals, variables, loops, functions, arrays, object-oriented programming, problem solving and mini projects.",
    },

    {
      id: "python",
      icon: "🐍",
      title: "Python",
      description:
        "Learn Python from basics to practical applications and beginner-friendly AI projects.",
      details:
        "Start with Python fundamentals and gradually move towards functions, lists, dictionaries, file handling, problem solving and practical applications. Students can also explore beginner-level AI projects.",
    },

    {
      id: "web",
      icon: "🌐",
      title: "Web Development",
      description:
        "Build modern responsive websites using HTML, CSS, JavaScript and React.",
      details:
        "Learn how websites work and create responsive webpages using HTML and CSS. Progress to JavaScript for interactivity and React for building modern component-based web applications.",
    },

    {
      id: "ai",
      icon: "🤖",
      title: "Artificial Intelligence",
      description:
        "Explore AI tools, machine learning concepts and build simple intelligent applications.",
      details:
        "Understand the fundamentals of Artificial Intelligence, explore useful AI tools, learn basic machine learning concepts and create beginner-friendly AI applications and chatbot projects.",
    },

    {
      id: "robotics",
      icon: "🚀",
      title: "Robotics",
      description:
        "Build exciting robots using Arduino, sensors, electronics and programming.",
      details:
        "Learn Arduino programming, sensors, motors and basic electronics. Students apply their knowledge by creating practical robotics and IoT projects.",
    },

    {
      id: "scratch",
      icon: "🎮",
      title: "Scratch Coding",
      description:
        "Learn programming logic by creating games, animations and interactive projects.",
      details:
        "A beginner-friendly introduction to programming through Scratch. Students learn sequences, loops, conditions, events and logic while creating their own games and animations.",
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
    <section className="courses" id="courses">

      {/* SECTION TITLE */}

      <div className="section-title">

        <h2>
          Online Coding & Technology Courses for Kids and Students
        </h2>

        <p>
          Explore online coding classes for kids and school students,
          including C, C++, Python, Web Development, Artificial
          Intelligence, Robotics and Scratch through practical,
          project-based learning.
        </p>

      </div>


      {/* COURSES GRID */}

      <div className="courses-grid">

        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
          >

            <div className="course-icon">
              {course.icon}
            </div>


            <h3>{course.title}</h3>


            <p className="animated-text">
              {courseTexts[course.id][textIndex]}
            </p>


            <button
              onClick={() => setSelectedCourse(course)}
            >
              Learn More
            </button>

          </div>
        ))}

      </div>


      {/* COURSE POPUP */}

      {selectedCourse && (
        <div
          className="course-popup"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="course-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="course-popup-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close course details"
            >
              ✕
            </button>


            {/* COURSE ICON */}

            <div className="course-popup-icon">
              {selectedCourse.icon}
            </div>


            {/* COURSE TITLE */}

            <h2>{selectedCourse.title}</h2>


            {/* COURSE DETAILS */}

            <p>
              {selectedCourse.details}
            </p>


            {/* WHATSAPP ENQUIRY */}

            <button
              className="course-enquire"
              onClick={() =>
                window.open(
                  `https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(
                    selectedCourse.title
                  )}%20course.`,
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

export default Courses;