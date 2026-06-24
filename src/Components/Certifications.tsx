import { useState, useEffect } from "react";
import { certs } from "../Entities/certs";
import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "./Badge";
import { s, Colors } from "../Utilities/theme";

interface Props {
  style: string;
}

const Certifications = ({ style }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageUrl = (imagePath: string) => {
    // @ts-ignore
    return new URL(imagePath, import.meta.url).href;
  };

  const displayedCerts = isExpanded ? certs : certs.slice(0, 4);

  return (
    <>
      <section id="certifications" style={s[style]}>
        <div style={s.container}>
          <SectionHeader label="// credentials" title="Certifications" />
          <div
            style={{
              ...s.grid4,
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
            }}
          >
            {displayedCerts.map((c) => (
              <Card
                key={c.name}
                style={{ textAlign: "center", padding: "1.75rem 1.25rem" }}
              >
                <img
                  src={getImageUrl(c.image)}
                  alt={c.full}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <h3
                  style={{
                    margin: "0 0 0.2rem",
                    color: Colors.navy,
                    fontSize: "0.92rem",
                    fontWeight: 700,
                  }}
                >
                  {c.full}
                </h3>
                <div
                  style={{
                    color: Colors.gray400,
                    fontSize: "0.76rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  {c.org}
                </div>
                <Badge color={Colors.gray500}>{c.year}</Badge>
              </Card>
            ))}
          </div>

          {certs.length > 4 && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: Colors.blue,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {isExpanded ? "Show Less ↑" : "Show More ↓"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Certifications;
