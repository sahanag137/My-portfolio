import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { professionalProjects, personalProjects } from "../data/projects";

type Tab = "professional" | "personal";

const slideVariants = {
  enterFromRight: { x: 40, opacity: 0 },
  enterFromLeft: { x: -40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitToLeft: { x: -40, opacity: 0 },
  exitToRight: { x: 40, opacity: 0 },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("professional");
  const [direction, setDirection] = useState<1 | -1>(1);

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setDirection(tab === "personal" ? 1 : -1);
    setActiveTab(tab);
  };

  const projects = activeTab === "professional" ? professionalProjects : personalProjects;

  return (
    <div className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">things I have made</p>
          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-10">
            Projects
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center gap-0 mb-12 border border-ink/15 w-fit">
          <button
            onClick={() => switchTab("professional")}
            className={`font-sans text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 ${
              activeTab === "professional"
                ? "bg-ink text-paper"
                : "bg-transparent text-secondary hover:text-ink"
            }`}
          >
            Professional
          </button>
          <div className="w-px h-8 bg-ink/15" />
          <button
            onClick={() => switchTab("personal")}
            className={`font-sans text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 ${
              activeTab === "personal"
                ? "bg-ink text-paper"
                : "bg-transparent text-secondary hover:text-ink"
            }`}
          >
            Personal
          </button>
        </div>

        {/* Project list */}
        <div className="relative overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial={direction === 1 ? "enterFromRight" : "enterFromLeft"}
              animate="center"
              exit={direction === 1 ? "exitToLeft" : "exitToRight"}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project, i) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="bg-paper border border-ink/10 p-7 shadow-paper group hover:shadow-paper-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-sans font-medium text-ink text-base leading-snug">
                      {project.name}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-ink transition-colors text-xs tracking-widest uppercase flex-shrink-0 mt-0.5"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      GitHub
                    </a>
                  </div>
                  <p className="font-sans text-sm text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-sans text-xs text-secondary/70 border border-ink/10 px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
