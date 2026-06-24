import { education } from "../Entities/education";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "./Badge";
import { s, Colors } from "../Utilities/theme";

interface Props {
  style: string;
}

export const Education = ({ style }: Props) => (
  <section id="education" style={s[style]}>
    <div style={s.container}>
      <SectionHeader label="// background" title="Education" />
      <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
        <div
          style={{
            position: "absolute",
            left: 6,
            top: 6,
            bottom: 6,
            width: 2,
            background: Colors.gray200,
            borderRadius: 2,
          }}
        />
        {education.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1.25rem",
              marginBottom: "1rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -22,
                top: 6,
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: Colors.blue,
                boxShadow: `0 0 0 4px ${Colors.blue}22`,
                flexShrink: 0,
              }}
            />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  alignItems: "center",
                  marginBottom: "0.25rem",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: Colors.navy,
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  {e.degree}
                </h3>
              </div>
               <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  alignItems: "center",
                  marginBottom: "0.25rem",
                }}
              > 
              <div
                style={{
                  color: Colors.blue,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginBottom: "0.4rem",
                }}
              >
                {e.school}
              </div>
              <Badge color={Colors.blue}>{e.year}</Badge>
              </div>
              <p
                style={{
                  margin: 0,
                  color: Colors.gray600,
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
