import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
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

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Projects />
      <WhyChoose />
    </>
  );
}

function CoursesPage() {
  return (
    <>
      <Courses />
      <Subjects />
      <Fees />
      <DemoVideo />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
      <WhyChoose />
      <Achievements />
    </>
  );
}

function ProjectsPage() {
  return <Projects />;
}

function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <Achievements />
    </>
  );
}

function FAQPage() {
  return <FAQ />;
}

function ContactPage() {
  return <Contact />;
}

function AIPage() {
  return (
    <>
      <AIChat />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<CoursesPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route
            path="/testimonials"
            element={<TestimonialsPage />}
          />

          <Route path="/faq" element={<FAQPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/ai-assistant" element={<AIPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;