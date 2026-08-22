import { useState } from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      review:
        "Python seekhna bahut easy ho gaya. Live classes aur projects best the.",
      name: "Aarav Sharma",
      details:
        "Aarav enjoyed the practical Python learning experience and found the live classes and projects easy to understand and engaging.",
    },

    {
      review:
        "AI aur Robotics practical way me sikhaya. Highly recommended!",
      name: "Priya Singh",
      details:
        "Priya appreciated the practical approach to AI and Robotics and enjoyed learning through hands-on activities and projects.",
    },

    {
      review:
        "Khushi Ma'am concepts bahut simple language me samjhati hain.",
      name: "Rohan Verma",
      details:
        "Rohan found the teaching style simple and easy to understand, especially when learning new technical concepts.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">

      {/* ================= HEADER ================= */}

      <div className="testimonial-header">

        <span className="testimonial-tag">
          ⭐ STUDENT FEEDBACK
        </span>

        <h2>
          💬 What Our Students Say
        </h2>

        <p>
          Hear from students about their learning experience with
          Coding, Python, AI and Robotics at CodeWithKhushi.
        </p>

      </div>


      {/* ================= TESTIMONIAL GRID ================= */}

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div
            className="testimonial-card"
            key={index}
            onClick={() => setSelectedTestimonial(item)}
          >

            <div className="stars" aria-label="5 star rating">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "{item.review}"
            </p>

            <h3>
              — {item.name}
            </h3>

            <span className="testimonial-more">
              Read More →
            </span>

          </div>

        ))}

      </div>


      {/* ================= TESTIMONIAL POPUP ================= */}

      {selectedTestimonial && (

        <div
          className="testimonial-popup"
          onClick={() => setSelectedTestimonial(null)}
        >

          <div
            className="testimonial-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="testimonial-close"
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Close testimonial"
            >
              ✕
            </button>


            <div
              className="popup-stars"
              aria-label="5 star rating"
            >
              ⭐⭐⭐⭐⭐
            </div>


            <div className="quote-icon">
              “
            </div>


            <p className="popup-review">
              "{selectedTestimonial.review}"
            </p>


            <h2>
              {selectedTestimonial.name}
            </h2>


            <p className="popup-details">
              {selectedTestimonial.details}
            </p>

          </div>

        </div>

      )}

    </section>
  );
}

export default Testimonials;