import { s } from "../Utilities/theme";

// ── Shared Components ─────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
}

export const SectionHeader = ({ label, title, sub }: SectionHeaderProps) => (
  <div>
    <div style={s.sectionLabel}>{label}</div>
    <h2 style={s.sectionTitle}>{title}</h2>
    <div style={s.divider} />
    {sub && <p style={s.sectionSub}>{sub}</p>}
  </div>
);
