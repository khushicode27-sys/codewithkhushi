import "../styles/FAQ.css";
import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "💻 Are the coding classes online?",
      answer:
        "Yes, all classes are conducted live online through interactive sessions. Students can learn Coding, Python, AI, Robotics and other technology skills from home.",
    },

    {
      question: "👨‍🎓 Can beginners join the coding classes?",
      answer:
        "Absolutely! Our courses are designed for complete beginners as well as learners with previous programming experience. Students can start from the basics and learn step by step.",
    },

    {
      question: "👦 Are the coding classes suitable for kids and school students?",
      answer:
        "Yes. CodeWithKhushi offers beginner-friendly technology learning for kids and school students, with practical projects and age-appropriate guidance.",
    },

    {
      question: "📜 Will I receive a certificate?",
      answer:
        "Yes, every student receives a Course Completion Certificate after successfully finishing the course.",
    },

    {
      question: "🎁 Is there a free demo class?",
      answer:
        "Yes! You can attend a FREE demo class before enrolling to understand the teaching approach and course experience.",
    },

    {
      question: "⏳ What is the course duration?",
      answer:
        "Most courses are completed within 1–3 months depending on the selected course, learning level and course curriculum.",
    },

    {
      question: "💰 What are the coding course fees?",
      answer:
        "Our fees are affordable and depend on the selected course. Contact us on WhatsApp for the latest fee structure and available batches.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">

      {/* ================= HEADER ================= */}

      <div className="faq-header">

        <span className="faq-tag">
          ❓ HAVE QUESTIONS?
        </span>

        <h2>
          Frequently Asked Questions About Our Coding Classes
        </h2>

        <p>
          Find answers to common questions about our online Coding,
          Python, AI, Robotics and technology classes for kids and
          school students.
        </p>

      </div>


      {/* ================= FAQ LIST ================= */}

      <div className="faq-container">

        {faqs.map((item, index) => (

          <div
            className={`faq-card ${
              open === index ? "active" : ""
            }`}
            key={index}
          >

            <div
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              <h3>
                {item.question}
              </h3>

              <span
                aria-hidden="true"
              >
                {open === index ? "−" : "+"}
              </span>

            </div>


            {open === index && (

              <div className="faq-answer">

                <p>
                  {item.answer}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>


      {/* ================= CTA ================= */}

      <div className="faq-bottom">

        <h3>
          Still have questions? 🤔
        </h3>

        <p>
          Feel free to contact us and we'll be happy to help.
        </p>

        <a
          href="https://wa.me/916367975699?text=Hi%20Khushi!%20I%20have%20a%20question%20about%20your%20courses."
          target="_blank"
          rel="noreferrer"
          className="faq-btn"
        >
          Ask on WhatsApp →
        </a>

      </div>

    </section>
  );
}

export default FAQ;