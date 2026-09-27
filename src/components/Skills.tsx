import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++"],
  },
  {
    title: "Data",
    skills: ["NumPy", "Pandas", "Data Analysis", "Machine Learning", "ETL", "Power BI"],
  },
  {
    title: "Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQL", "SQLite", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <div className="py-24 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">tools of the trade</p>
          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-12">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-ink/10 p-6 bg-bg"
            >
              <h3 className="font-sans text-xs tracking-widest uppercase text-secondary mb-4 border-b border-ink/8 pb-3">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="font-sans text-sm text-ink/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary inline-block flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
