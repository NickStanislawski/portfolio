import { useState } from "react";
import { s, Colors } from "../Utilities/theme";

interface SkillGroupCardProps {
  group: {
    category: string;
    items: string[];
  };
}

export const SkillGroupCard = ({ group }: SkillGroupCardProps) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...s.card,
        boxShadow: hov
          ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          : s.card.boxShadow,
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      <h3
        style={{
          margin: "0 0 1.5rem 0",
          color: Colors.navy,
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "-0.3px",
        }}
      >
        {group.category}
      </h3>
      <div>
        {group.items.map((item) => (
          <span key={item} style={s.tag}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
