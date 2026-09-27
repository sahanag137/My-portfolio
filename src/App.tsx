import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Resume from "./components/Resume";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

type Section =
  | "home"
  | "skills"
  | "projects"
  | "learning"
  | "resume"
  | "github"
  | "contact";

const sections: Section[] = [
  "home",
  "skills",
  "projects",
  "learning",
  "resume",
  "github",
  "contact",
];

export default function App() {
  const [activeSection, setActiveSection] =
    useState<Section>("home");

  const [direction, setDirection] = useState(1);

  const currentIndex = sections.indexOf(activeSection);

  const changeSection = (nextSection: Section) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(nextSection);

    if (nextIndex === currentIndex) {
      return;
    }

    // Going forward → page enters from the right
    // Going backward → page enters from the left
    setDirection(nextIndex > currentIndex ? 1 : -1);

    setActiveSection(nextSection);
  };

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      changeSection(sections[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      changeSection(sections[currentIndex - 1]);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-bg">

      {/* NAVBAR */}
      <Navbar
        activeSection={activeSection}
        scrollTo={changeSection}
      />

      {/* PAGE AREA */}
      <main className="relative h-full overflow-hidden">

        <AnimatePresence
          mode="sync"
          initial={false}
          custom={direction}
        >
          <motion.div
            key={activeSection}
            custom={direction}
            className="absolute inset-0 overflow-y-auto pt-16"
            
            variants={{
              enter: (direction: number) => ({
                x: direction * 100 + "%",
                opacity: 0,
                scale: 0.97,
              }),

              center: {
                x: "0%",
                opacity: 1,
                scale: 1,
              },

              exit: (direction: number) => ({
                x: direction * -100 + "%",
                opacity: 0,
                scale: 0.97,
              }),
            }}

            initial="enter"
            animate="center"
            exit="exit"

            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* HOME */}
            {activeSection === "home" && (
              <section className="min-h-full">
                <Home
                  scrollToProjects={() =>
                    changeSection("projects")
                  }
                />
              </section>
            )}

            {/* SKILLS */}
            {activeSection === "skills" && (
              <section className="min-h-full">
                <Skills />
              </section>
            )}

            {/* PROJECTS */}
            {activeSection === "projects" && (
              <section className="min-h-full">
                <Projects />
              </section>
            )}

            {/* LEARNING */}
            {activeSection === "learning" && (
              <section className="min-h-full">
                <Learning />
              </section>
            )}

            {/* RESUME */}
            {activeSection === "resume" && (
              <section className="min-h-full">
                <Resume />
              </section>
            )}

            {/* GITHUB */}
            {activeSection === "github" && (
              <section className="min-h-full">
                <GitHub />
              </section>
            )}

            {/* CONTACT */}
            {activeSection === "contact" && (
              <>
                <section className="min-h-full">
                  <Contact />
                </section>

                <Footer />
              </>
            )}

          </motion.div>
        </AnimatePresence>

      </main>

      {/* PREVIOUS PAGE ARROW */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          aria-label="Previous page"
          className="
            fixed
            left-5
            top-1/2
            z-50
            -translate-y-1/2
            text-2xl
            text-black
            transition-all
            duration-300
            hover:-translate-x-1
            hover:text-burgundy
          "
        >
          ←
        </button>
      )}

      {/* NEXT PAGE ARROW */}
      {currentIndex < sections.length - 1 && (
        <button
          onClick={goToNext}
          aria-label="Next page"
          className="
            fixed
            right-5
            top-1/2
            z-50
            -translate-y-1/2
            text-2xl
            text-black
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-burgundy
          "
        >
          →
        </button>
      )}

    </div>
  );
}