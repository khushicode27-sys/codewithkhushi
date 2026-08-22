import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog() {
  const posts = [
    {
      title: "What Is Coding for Kids? A Beginner's Guide",
      description:
        "Learn what coding is, why kids can learn programming, which languages beginners can explore, and what children can build with coding.",
      category: "Coding for Kids",
      slug: "coding-for-kids",
      published: true,
    },

    {
      title: "What Is the Best Age to Start Coding?",
      description:
        "Understand when children can start learning coding and which programming activities may be suitable for different age groups.",
      category: "Coding Guide",
      slug: "best-age-to-start-coding",
      published: false,
    },

    {
      title: "Why Should Kids Learn Coding?",
      description:
        "Discover how coding can help children develop creativity, logical thinking, patience and problem-solving skills.",
      category: "Benefits of Coding",
      slug: "benefits-of-coding-for-kids",
      published: false,
    },

    {
      title: "Scratch vs Python: Which Is Better for Kids?",
      description:
        "Compare Scratch and Python and understand which programming language may be suitable for beginners.",
      category: "Scratch & Python",
      slug: "scratch-vs-python-for-kids",
      published: false,
    },

    {
      title: "How to Start Learning Python for Beginners",
      description:
        "A simple beginner-friendly guide to starting Python programming and building your first practical projects.",
      category: "Python",
      slug: "learn-python-for-beginners",
      published: false,
    },

    {
      title: "What Can Kids Build After Learning Coding?",
      description:
        "Explore beginner-friendly coding projects that students can create after learning programming fundamentals.",
      category: "Coding Projects",
      slug: "coding-projects-for-kids",
      published: false,
    },
  ];

  return (
    <section className="blog" id="blog">

      {/* ================= BLOG HEADER ================= */}

      <div className="blog-header">

        <span className="blog-tag">
          📚 CODEWITHKHUSHI BLOG
        </span>

        <h1>
          Coding, AI & Technology Learning Blog
        </h1>

        <p>
          Beginner-friendly guides, coding tips, project ideas and
          technology learning resources for kids and students.
        </p>

      </div>


      {/* ================= BLOG GRID ================= */}

      <div className="blog-grid">

        {posts.map((post) => (

          <article
            className="blog-card"
            key={post.slug}
          >

            <span className="blog-category">
              {post.category}
            </span>

            <h2>
              {post.title}
            </h2>

            <p>
              {post.description}
            </p>


            {/* PUBLISHED ARTICLE */}

            {post.published ? (

              <Link
                to={`/blog/${post.slug}`}
                className="primary"
                aria-label={`Read ${post.title}`}
              >
                Read Article →
              </Link>

            ) : (

              <span className="blog-coming-soon">
                Coming Soon
              </span>

            )}

          </article>

        ))}

      </div>


      {/* ================= COURSES CTA ================= */}

      <div className="blog-bottom">

        <h2>
          Ready to Start Learning?
        </h2>

        <p>
          Explore Coding, Python, Web Development, AI and Robotics
          courses for kids and students.
        </p>

        <Link
          to="/courses"
          className="primary"
        >
          Explore Courses →
        </Link>

      </div>

    </section>
  );
}

export default Blog;