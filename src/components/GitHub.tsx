import { motion } from "framer-motion";

export default function GitHub() {
  return (
    <div className="py-24 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">open source & beyond</p>
          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-6">
            GitHub
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-lg"
        >
          <p className="font-sans text-secondary text-sm leading-relaxed mb-8">
            Explore my projects, experiments, and development work.
          </p>

          <a
            href="https://github.com/sahanag137"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            View GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className="mt-12 flex items-center gap-3">
            <div className="h-px flex-1 bg-ink/8" />
            <span className="font-handwritten text-secondary/50 text-sm">sahanag137</span>
            <div className="h-px w-8 bg-ink/8" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
