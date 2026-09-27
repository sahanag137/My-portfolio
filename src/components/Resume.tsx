import { motion } from "framer-motion";

export default function Resume() {
  const resumePath = "/resume/Sahana-G-Resume.pdf";

  return (
    <div className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">on paper</p>
          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-6">
            Resume
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-paper border border-ink/10 p-10 shadow-paper max-w-lg"
        >
          <p className="font-sans text-secondary text-sm mb-8 leading-relaxed">
            My resume will be available here soon.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-widest uppercase px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              View Resume
            </a>
            <a
              href={resumePath}
              download
              className="font-sans text-xs tracking-widest uppercase px-6 py-3 border border-secondary text-secondary hover:border-ink hover:text-ink transition-colors duration-200"
            >
              Download PDF
            </a>
          </div>
          <p className="font-handwritten text-secondary/50 text-sm mt-8">
            coming soon — check back shortly
          </p>
        </motion.div>
      </div>
    </div>
  );
}
