import "../styles/FAQ.css";
import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "💻 Are the classes online?",
      answer:
        "Yes, all classes are conducted live online through interactive sessions.",
    },
    {
      question: "👨‍🎓 Can beginners join?",
      answer:
        "Absolutely! Our courses are designed for complete beginners as well as advanced learners.",
    },
    {
      question: "📜 Will I receive a certificate?",
      answer:
        "Yes, every student receives a Course Completion Certificate after successfully finishing the course.",
    },
    {
      question: "🎁 Is there a free demo class?",
      answer:
        "Yes! You can attend a FREE demo class before enrolling.",
    },
    {
      question: "⏳ What is the course duration?",
      answer:
        "Most courses are completed within 1–3 months depending on the selected course.",
    },
    {
      question: "💰 What are the course fees?",
      answer:
        "Our fees are affordable. Contact us on WhatsApp for the latest fee structure.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">

      <div className="faq-header">

        <span className="faq-tag">
          ❓ HAVE QUESTIONS?
        </span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to the most common questions about our Coding,
          AI & Robotics classes.
        </p>

      </div>

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

              <h3>{item.question}</h3>

              <span>
                {open === index ? "−" : "+"}
              </span>

            </div>

            {open === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

      <div className="faq-bottom">

        <h3>Still have questions? 🤔</h3>

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