import { htbWriteups } from "../Entities/htbWriteups";
import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "./Badge";
import { s, Colors, diffColor } from "../Utilities/theme";

interface Props {
  style: string;
}

export const HTBWriteups = ({ style }: Props) => (
  <section id="htb-write-ups" style={s[style]}>
    <div style={s.container}>
      <SectionHeader label="// hack the box" title="HTB Write-Ups" />
      <div style={s.grid2}>
        {htbWriteups
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((h, i) => (
            <Card key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.55rem",
                flexWrap: "wrap",
                gap: "0.4rem",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: Colors.navy,
                  fontSize: "0.97rem",
                  fontWeight: 700,
                }}
              >
                {h.name}
              </h3>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <Badge color={Colors.gray500}>{h.os}</Badge>
                <Badge color={diffColor(h.difficulty)}>{h.difficulty}</Badge>
              </div>
            </div>
            <p
              style={{
                margin: "0 0 0.8rem",
                color: Colors.gray600,
                fontSize: "0.87rem",
                lineHeight: 1.75,
              }}
            >
              {h.summary}
            </p>
            <a
              href="#"
              style={{
                color: Colors.blue,
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Read Write-Up →
            </a>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
