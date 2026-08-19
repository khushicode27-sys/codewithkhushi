import "../styles/Fees.css";

function Fees() {
  const feesPlans = [
    {
      icon: "💻",
      title: "C & C++",
      price: "3,500",
      duration: "3 Months Course",
      features: [
        "✔ Live Classes",
        "✔ Practical Projects",
        "✔ Notes & Assignments",
        "✔ Doubt Support",
        "✔ Certificate",
      ],
    },

    {
      icon: "🐍",
      title: "Python",
      price: "4,500",
      duration: "3 Months Course",
      popular: true,
      features: [
        "✔ Live Classes",
        "✔ Mini Projects",
        "✔ Python Applications",
        "✔ AI Basics",
        "✔ Doubt Support",
        "✔ Certificate",
      ],
    },

    {
      icon: "🌐",
      title: "Web Development",
      price: "4,500",
      duration: "3 Months Course",
      features: [
        "✔ HTML & CSS",
        "✔ JavaScript",
        "✔ Responsive Websites",
        "✔ React Basics",
        "✔ Practical Projects",
        "✔ Certificate",
      ],
    },

    {
      icon: "🤖",
      title: "AI & Robotics",
      price: "5,500",
      duration: "3 Months Course",
      features: [
        "✔ AI Fundamentals",
        "✔ Robotics Basics",
        "✔ Practical Projects",
        "✔ Hands-on Learning",
        "✔ Doubt Support",
        "✔ Certificate",
      ],
    },

    {
      icon: "🎮",
      title: "Scratch Coding",
      price: "3,000",
      duration: "3 Months Course",
      features: [
        "✔ Logic Building",
        "✔ Game Development",
        "✔ Animation Projects",
        "✔ Creative Activities",
        "✔ Practical Learning",
        "✔ Certificate",
      ],
    },

    {
      icon: "📚",
      title: "Academic Subjects",
      price: "1,000",
      duration: "Per Month",
      features: [
        "✔ Mathematics",
        "✔ Science",
        "✔ Computer",
        "✔ Social Science",
        "✔ Weekly Tests",
        "✔ Doubt Support",
      ],
    },
  ];

  return (
    <section className="fees" id="fees">

      <div className="fees-header">

        <span className="fees-badge">
          💎 AFFORDABLE PROGRAMS
        </span>

        <h2>💰 Course Fees</h2>

        <p>
          Quality education with practical learning,
          personal guidance and project-based classes.
        </p>

      </div>

      <div className="fees-grid">

        {feesPlans.map((plan) => (
          <div
            className={`fees-card ${
              plan.popular ? "popular" : ""
            }`}
            key={plan.title}
          >

            {plan.popular && (
              <div className="badge">
                ⭐ Most Popular
              </div>
            )}

            <div className="fees-icon">
              {plan.icon}
            </div>

            <h3>{plan.title}</h3>

            <div className="price">
              <span className="currency">₹</span>
              {plan.price}
            </div>

            <div className="duration">
              {plan.duration}
            </div>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/916367975699?text=Hi%20Khushi!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(
                    plan.title
                  )}%20course%20at%20₹${encodeURIComponent(
                    plan.price
                  )}%20${encodeURIComponent(
                    plan.duration
                  )}.`,
                  "_blank"
                )
              }
            >
              Enquire Now →
            </button>

          </div>
        ))}

      </div>

      <div className="fees-note">
        🎓 Coding Courses: 3 Months • Academic Subjects: ₹1,000/month
        • Live Classes • Practical Learning • Doubt Support
      </div>

    </section>
  );
}

export default Fees;