import { Card } from "./Card";
import { SectionHeader } from "./SectionHeader";
import { s, Colors } from "../Utilities/theme";

interface CardGridProps {
  data: Array<{ title: string; desc: string; tags: string[] }>;
  label: string;
  title: string;
  id: string; 
  style: string;
}

export const CardGrid = ({ data, label, title, id, style }: CardGridProps) => (
  <section id={id} style={s[style]}>
    <div style={s.container}>
      <SectionHeader label={label} title={title} />
      <div style={s.grid3}>
        {data.map((p, i) => (
          <Card key={i}>
            <h3
              style={{
                margin: "0 0 0.55rem",
                color: Colors.navy,
                fontSize: "0.97rem",
                fontWeight: 700,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                margin: "0 0 1rem",
                color: Colors.gray600,
                fontSize: "0.87rem",
                lineHeight: 1.75,
              }}
            >
              {p.desc}
            </p>
            <div>
              {p.tags.map((t) => (
                <span key={t} style={s.tag}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a
                href="#"
                style={{
                  color: Colors.blue,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                View Details →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
