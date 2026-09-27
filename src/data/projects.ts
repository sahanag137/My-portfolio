export interface Project {
  name: string;
  description: string;
  technologies?: string[];
  github: string;
}

export const professionalProjects: Project[] = [
  {
    name: "RetailFlow",
    description:
      "An end-to-end retail data engineering project covering data generation, ETL processing, database integration, SQL analytics, and business intelligence.",
    technologies: ["Python", "ETL", "PostgreSQL", "SQLAlchemy", "SQL", "Power BI"],
    github: "https://github.com/sahanag137/RetailFlow-Data-Engineering-Pipeline",
  },
  {
    name: "Library Management System",
    description:
      "A full-stack web-based Library Management System for managing books, members, authentication, borrowing, returning, transactions, and library operations.",
    technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML", "CSS", "REST API"],
    github: "https://github.com/sahanag137/Library-Management-system-Flask-",
  },
];

export const personalProjects: Project[] = [
  {
    name: "DocQuery",
    description: "RAG-Based Documentation Question Answering System.",
    github: "https://github.com/sahanag137/DocQuery",
  },
  {
    name: "Sentiment Analyzer",
    description:
      "Real-time sentiment & emotion analysis in the browser — no backend, no API keys. Powered by DistilBERT via Transformers.js.",
    github: "https://github.com/sahanag137/sentiment-analyzer",
  },
  {
    name: "Pinch Puzzle",
    description:
      "A photo puzzle you solve using hand gestures — pinch to capture, pinch-drag tiles to solve. Runs in-browser with MediaPipe hand tracking.",
    github: "https://github.com/sahanag137/pinch-puzzle",
  },
  {
    name: "Student Performance Analyzer",
    description:
      "Generates student datasets, analyzes academic performance, and visualizes insights through graphs and reports using Python, Pandas, and Matplotlib.",
    github: "https://github.com/sahanag137/Student-performance-analyzer",
  },
  {
    name: "Skincare Serum Website",
    description:
      "A premium, fully responsive skincare brand website built with HTML5, CSS3, and Vanilla JavaScript — no frameworks, pure vanilla implementation.",
    github: "https://github.com/sahanag137/skincare-serum",
  },
  {
    name: "NumPy Expense Analyzer",
    description:
      "A NumPy-based expense analyzer built while learning Data Science and Machine Learning.",
    github: "https://github.com/sahanag137/numpy-expense-analyzer",
  },
];
