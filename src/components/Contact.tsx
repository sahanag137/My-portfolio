import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        "Unable to send your message right now. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-handwritten text-burgundy/70 text-base mb-2">
            get in touch
          </p>

          <h2 className="font-sans font-medium text-3xl text-ink tracking-tight mb-12">
            Let us Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-secondary mb-3">
                Email
              </p>

              <a
                href="mailto:sahana.gcsds@gmail.com"
                className="font-sans text-sm text-ink hover:text-secondary transition-colors"
              >
                sahana.gcsds@gmail.com
              </a>
            </div>

            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-secondary mb-3">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/sahanagcsds/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ink hover:text-secondary transition-colors"
              >
                linkedin.com/in/sahanagcsds
              </a>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-secondary mb-3">
                GitHub
              </p>

              <a
                href="https://github.com/sahanag137"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ink hover:text-secondary transition-colors"
              >
                github.com/sahanag137
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {submitted ? (
              <div className="py-8">
                <p className="font-handwritten text-ink text-xl mb-2">
                  Message sent!
                </p>

                <p className="font-sans text-sm text-secondary">
                  Thanks for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-widest uppercase text-secondary mb-2"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-paper border border-ink/15 px-4 py-3 font-sans text-sm text-ink placeholder-secondary/50 focus:outline-none focus:border-ink transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs tracking-widest uppercase text-secondary mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-paper border border-ink/15 px-4 py-3 font-sans text-sm text-ink placeholder-secondary/50 focus:outline-none focus:border-ink transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-widest uppercase text-secondary mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-paper border border-ink/15 px-4 py-3 font-sans text-sm text-ink placeholder-secondary/50 focus:outline-none focus:border-ink transition-colors resize-none"
                    placeholder="Say hello..."
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="font-sans text-sm text-burgundy">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="font-sans text-xs tracking-widest uppercase px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}