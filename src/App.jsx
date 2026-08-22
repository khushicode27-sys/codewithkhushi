import { BrowserRouter, Routes, Route } from "react-router-dom";

import CourseHero from "./components/CourseHero";
import ProjectHero from "./components/ProjectHero";
import FAQHero from "./components/FAQHero";
import ContactHero from "./components/ContactHero";
import AIHero from "./components/AIHero";
import PageNavigation from "./components/PageNavigation";

import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import BlogPostCodingForKids from "./components/BlogPostCodingForKids";

import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChoose";
import Courses from "./components/Courses";
import Subjects from "./components/Subjects";
import Fees from "./components/Fees";
import DemoVideo from "./components/DemoVideo";
import AIChat from "./components/AIChat";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import ScrollTop from "./components/ScrollTop";


/* ================= HOME ================= */

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Projects />
      <WhyChoose />

      <PageNavigation
        next={{
          name: "Courses",
          path: "/courses",
        }}
      />
    </>
  );
}


/* ================= COURSES ================= */

function CoursesPage() {
  return (
    <>
      <CourseHero />
      <Courses />
      <Subjects />
      <Fees />
      <DemoVideo />

      <PageNavigation
        previous={{
          name: "Home",
          path: "/",
        }}
        next={{
          name: "Projects",
          path: "/projects",
        }}
      />
    </>
  );
}


/* ================= BLOG ================= */

function BlogPage() {
  return <Blog />;
}


/* ================= BLOG POST ================= */

function BlogPostCodingForKidsPage() {
  return <BlogPostCodingForKids />;
}


/* ================= PROJECTS ================= */

function ProjectsPage() {
  return (
    <>
      <ProjectHero />
      <Projects />

      <PageNavigation
        previous={{
          name: "Courses",
          path: "/courses",
        }}
        next={{
          name: "About",
          path: "/about",
        }}
      />
    </>
  );
}


/* ================= ABOUT ================= */

function AboutPage() {
  return (
    <>
      <About />
      <WhyChoose />
      <Achievements />

      <PageNavigation
        previous={{
          name: "Projects",
          path: "/projects",
        }}
        next={{
          name: "Testimonials",
          path: "/testimonials",
        }}
      />
    </>
  );
}


/* ================= TESTIMONIALS ================= */

function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <Achievements />

      <PageNavigation
        previous={{
          name: "About",
          path: "/about",
        }}
        next={{
          name: "FAQ",
          path: "/faq",
        }}
      />
    </>
  );
}


/* ================= FAQ ================= */

function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQ />

      <PageNavigation
        previous={{
          name: "Testimonials",
          path: "/testimonials",
        }}
        next={{
          name: "Contact",
          path: "/contact",
        }}
      />
    </>
  );
}


/* ================= CONTACT ================= */

function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />

      <PageNavigation
        previous={{
          name: "FAQ",
          path: "/faq",
        }}
        next={{
          name: "AI Assistant",
          path: "/ai-assistant",
        }}
      />
    </>
  );
}


/* ================= AI ASSISTANT ================= */

function AIPage() {
  return (
    <>
      <AIHero />

      <AIChat />

      <PageNavigation
        previous={{
          name: "Contact",
          path: "/contact",
        }}
      />
    </>
  );
}


/* ================= APP ================= */

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* COURSES */}

          <Route
            path="/courses"
            element={<CoursesPage />}
          />


          {/* BLOG */}

          <Route
            path="/blog"
            element={<BlogPage />}
          />


          {/* BLOG POST */}

          <Route
            path="/blog/coding-for-kids"
            element={<BlogPostCodingForKidsPage />}
          />


          {/* PROJECTS */}

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />


          {/* ABOUT */}

          <Route
            path="/about"
            element={<AboutPage />}
          />


          {/* TESTIMONIALS */}

          <Route
            path="/testimonials"
            element={<TestimonialsPage />}
          />


          {/* FAQ */}

          <Route
            path="/faq"
            element={<FAQPage />}
          />


          {/* CONTACT */}

          <Route
            path="/contact"
            element={<ContactPage />}
          />


          {/* AI ASSISTANT */}

          <Route
            path="/ai-assistant"
            element={<AIPage />}
          />

        </Routes>

      </main>


      {/* GLOBAL COMPONENTS */}

      <Footer />

      <FloatingWhatsapp />

      <ScrollTop />

    </BrowserRouter>
  );
}

export default App;