import { motion } from "framer-motion";

const topics = [
  "Machine Learning",
  "Data Science",
  "DSA",
  "SQL",
  "Full Stack Development",
];

export default function Learning() {
  return (
    <div className="py-24 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">never stop growing</p>
          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-3">
            Currently Exploring
          </h2>
          <p className="font-sans text-secondary text-sm mb-12 max-w-md">
            A snapshot of what I am learning, building, and diving deeper into right now.
          </p>
        </motion.div>

        <div className="max-w-lg">
          {topics.map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex items-baseline gap-4 py-4 border-b border-ink/8 group"
            >
              <span className="font-sans text-xs text-secondary/50 w-6 text-right flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-lg text-ink group-hover:translate-x-1 transition-transform duration-200">
                {topic}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <p className="font-handwritten text-secondary/60 text-base">
            learning to building to improving
          </p>
        </motion.div>
      </div>
    </div>
  );
}
