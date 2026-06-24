import { Colors } from "../Utilities/theme";

export const Footer = () => (
  <footer
    style={{
      background: Colors.navy,
      color: Colors.gray400,
      textAlign: "center",
      padding: "2rem 1rem",
      fontSize: "0.83rem",
    }}
  >
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        color: "#7c9fd4",
        marginBottom: "0.4rem",
        fontSize: "0.8rem",
      }}
    >
    </div>
    <div>
      © {new Date().getFullYear()} Nick Stanislawski— Cybersecurity Portfolio
    </div>
  </footer>
);
