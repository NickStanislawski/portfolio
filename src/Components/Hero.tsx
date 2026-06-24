// const resume = "../Assets/resume.pdf";
import { Colors, s } from "../Utilities/theme";

export const Hero = () => (
  <section
    id="about"
    style={{
      minHeight: "100vh",
      background: `linear-gradient(140deg, ${Colors.navy} 0%, ${Colors.navyLight} 55%, #1a3a6e 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "7rem 2rem 4rem",
    }}
  >
    <div>
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          color: "#7c9fd4",
          fontSize: "0.82rem",
          letterSpacing: "2.5px",
          display: "block",
          marginBottom: "1rem",
        }}
      >
        // CYBERSECURITY PROFESSIONAL
      </span>
      <h1
        style={{
          color: Colors.white,
          fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
          fontWeight: 800,
          margin: "0 0 0.4rem",
          lineHeight: 1.1,
        }}
      >
        Nick Stanislawski
      </h1>
      <p
        style={{
          color: "#93a3b8",
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          fontWeight: 400,
          margin: "0 0 1.25rem",
        }}
      >
        Security Analyst | Vulnerability & Infrastructure Focus
      </p>
      <p
        style={{
          color: "#7a8fa8",
          maxWidth: 560,
          margin: "0 auto 2rem",
          lineHeight: 1.85,
          fontSize: "0.97rem",
        }}
      >
        Cybersecurity and IT professional with hands-on experience in Linux,
        Active Directory, AWS fundamentals, and security-focused labs in
        vulnerability assessment and system enumeration. Combines operational
        leadership experience with a focus on infrastructure security and
        defensive analysis.
      </p>

      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/portfolio/resume.pdf" 
          // target="_blank"
          download="resume.pdf"
          style={{ ...s.btnOutline, display: "inline-block", margin: 0 }}
        >
          Download Resume
        </a>
        <span
          style={{ ...s.btnOutline, display: "inline-block", margin: 0 }}
          role="button"
          tabIndex={0}
          onClick={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/nickstanislawski"
          target="_blank"
          rel="noreferrer"
          style={s.iconLink}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nickstanislawski"
          target="_blank"
          rel="noreferrer"
          style={s.iconLink}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "2.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          ["20+", "Security Labs Completed"],
          ["10+", "HTB Machines Explored"],
          ["5+", "Years Leadership Experience"],
          ["9", "Industry Certifications"],
        ].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div
              style={{ color: "#7c9fd4", fontSize: "1.7rem", fontWeight: 800 }}
            >
              {n}
            </div>
            <div
              style={{ color: "#5a7a9a", fontSize: "0.78rem", marginTop: 2 }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
