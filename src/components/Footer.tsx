export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-sans text-sm text-paper/80">Sahana G &copy; 2026</p>
          <p className="font-handwritten text-paper/40 text-sm mt-1">
            Designed, coded &amp; probably debugged several times.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sahanag137"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-paper/50 hover:text-paper transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahanagcsds/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-paper/50 hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
