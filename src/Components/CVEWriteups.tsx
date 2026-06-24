import { cveWriteups } from "../Entities/cveWriteups";
import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "./Badge";
import { s, Colors, severityColor } from "../Utilities/theme";

interface Props {
  style: string;
}

export const CVEWriteups = ({ style }: Props) => (
  <section id="cve-write-ups" style={s[style]}>
    <div style={s.container}>
      <SectionHeader label="// vulnerability research" title="CVE Write-Ups" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cveWriteups.map((c, i) => (
          <Card
            key={i}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flexShrink: 0, minWidth: 110 }}>
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  color: Colors.blue,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  marginBottom: "0.4rem",
                }}
              >
                {c.id}
              </div>
              <Badge color={severityColor(c.severity)}>{c.severity}</Badge>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3
                style={{
                  margin: "0 0 0.35rem",
                  color: Colors.navy,
                  fontSize: "0.96rem",
                  fontWeight: 700,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: Colors.gray600,
                  fontSize: "0.87rem",
                  lineHeight: 1.75,
                }}
              >
                {c.summary}
              </p>
            </div>
            <a
              href="#"
              style={{
                color: Colors.blue,
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                alignSelf: "center",
              }}
            >
              Read →
            </a>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
