import { ReactNode } from "react";
import { s } from "../Utilities/theme";

interface BadgeProps {
  children: ReactNode;
  color: string;
}

export const Badge = ({ children, color }: BadgeProps) => (
  <span style={{ ...s.badge, background: color + "18", color }}>
    {children}
  </span>
);
