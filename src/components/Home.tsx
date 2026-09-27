import { motion, useReducedMotion } from "framer-motion";

interface HomeProps {
  scrollToProjects: () => void;
}

export default function Home({ scrollToProjects }: HomeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-handwritten text-burgundy text-lg mb-3 opacity-70">
              -- data, code & curiosity
            </p>
            <h1 className="font-sans font-medium text-5xl md:text-6xl text-ink tracking-tight leading-none mb-4">
              Sahana G
            </h1>
            <p className="font-sans text-secondary text-base mb-6 tracking-wide">
              Data Science Student&nbsp;&bull;&nbsp;Developer&nbsp;&bull;&nbsp;DSA Enthusiast
            </p>
            <p className="font-sans text-ink/80 text-base leading-relaxed max-w-md mb-10">
              I am interested in using data, statistics, machine learning, and software
              development to solve practical problems and build useful things.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="font-sans text-sm tracking-widest uppercase px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
              >
                View Projects
              </button>
              <a
                href="https://github.com/sahanag137"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm tracking-widest uppercase px-6 py-3 border border-secondary text-secondary hover:border-ink hover:text-ink transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <div className="relative flex justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-6 left-0 font-handwritten text-secondary text-sm select-none pointer-events-none"
              style={{ transform: "rotate(-8deg)" }}
            >
              data to ideas
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute top-1/4 -right-2 md:-right-8 font-handwritten text-secondary text-sm select-none pointer-events-none"
              style={{ transform: "rotate(6deg)" }}
            >
              building things
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 left-4 font-handwritten text-burgundy/60 text-sm select-none pointer-events-none"
              style={{ transform: "rotate(-4deg)" }}
            >
              currently learning...
            </motion.span>

            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-bg border border-ink/10" />
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-paper border border-ink/8" />

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 280 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              >
                <motion.rect
                  x="4" y="4" width="272" height="332"
                  stroke="#171512"
                  strokeWidth="1.5"
                  strokeDasharray="800"
                  strokeDashoffset="800"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>

              <div className="relative w-60 h-72 md:w-64 md:h-80 overflow-hidden bg-paper border border-ink/10">
                <img
                  src="/images/sahana.jpg"
                  alt="Sahana G - Data Science Student and Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-ink/10" />
          <span className="font-handwritten text-secondary/60 text-sm">scroll to explore</span>
          <div className="h-px w-8 bg-ink/10" />
        </div>
      </div>
    </div>
  );
}

