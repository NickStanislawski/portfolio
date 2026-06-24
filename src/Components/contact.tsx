import { useState, ChangeEvent } from "react";
import { SectionHeader } from "./SectionHeader";
import { s, Colors } from "../Utilities/theme";

interface Props {
  style: string;
}

export const Contact = ({ style }: Props) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set =
    (k: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

 
  const socialLinks = [
    {
      label: "GitHub",
      val: "github.com/nickstanislawski",
      href: "https://github.com/nickstanislawski",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      val: "linkedin.com/in/nickstanislawski",
      href: "https://linkedin.com/in/nickstanislawski",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      val: "nickstan1110@gmail.com",
      href: "mailto:nickstan1110@gmail.com",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      ),
    },
  ];


  const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) return;

  try {
    const res = await fetch(
      "https://formspree.io/f/xykqkewo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: "Message from your portfolio",
        }),
      }
    );

    if (res.ok) {
      setSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <section id="contact" style={s[style]}>
      <div style={{ ...s.container, maxWidth: 820 }}>
        <SectionHeader label="// let's connect" title="Contact" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
          }}
        >
          <div>
            <p
              style={{
                color: Colors.gray600,
                lineHeight: 1.85,
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
              }}
            >
              I'm actively seeking opportunities in cybersecurity — whether
              that's a penetration testing role, SOC analyst position, or
              security engineering opportunity.
            </p>
            <p
              style={{
                color: Colors.gray600,
                lineHeight: 1.85,
                marginBottom: "1.75rem",
                fontSize: "0.95rem",
              }}
            >
              If you're hiring or know of an opening that might be a fit, I'd
              love to hear from you.
            </p>
            {socialLinks.map(({ label, val, href, icon }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ color: Colors.blue, width: 20, flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: Colors.gray400,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {label}
                  </div>
                  {label === "Email" ? (
                    <div
                      style={{
                        color: Colors.blue,
                        fontSize: "0.88rem",
                        fontWeight: 500,
                      }}
                    >
                      {val}
                    </div>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: Colors.blue,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {val}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2.5rem 1rem",
                  color: Colors.blue,
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
                  ✓
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.4rem",
                    color: Colors.navy,
                  }}
                >
                  Message sent!
                </div>
                <div style={{ color: Colors.gray500, fontSize: "0.9rem" }}>
                  Thanks for reaching out. I'll get back to you shortly.
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={set("name")}
                  style={s.contactInput}
                />
                <input
                  placeholder="Your Email"
                  value={form.email}
                  onChange={set("email")}
                  style={s.contactInput}
                />
                <textarea
                  placeholder="Tell me about the role or opportunity..."
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                  style={{ ...s.contactInput, resize: "vertical" }}
                />
                <button
                  onClick={() => {
                    handleSubmit(); ;
                  }}
                  style={{
                    ...s.btnPrimary,
                    textAlign: "center",
                    padding: "0.8rem",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
