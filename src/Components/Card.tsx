import { ReactNode, CSSProperties, useState } from "react";
import { s } from "../Utilities/theme";

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Card = ({ children, style = {} }: CardProps) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        ...s.card,
        ...style,
        boxShadow: hov
          ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          : s.card.boxShadow,
        transform: hov ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
};
