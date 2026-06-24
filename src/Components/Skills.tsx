import { skills } from "../Entities/skills";
import { SectionHeader } from "./SectionHeader";
import { SkillGroupCard } from "./SkillsGroupCard";
import { s } from "../Utilities/theme";

interface Props {
  style: string;
}

export const Skills = ({ style }: Props) => (
  <section id="skills" style={s[style]}>
    <div style={s.container}>
      <SectionHeader
        label="// skills"
        title="Technical Skills"
        // sub="Core technologies and concepts I work with across security and infrastructure."
      />
      <div style={s.grid2}>
        {skills.map((g) => (
          <SkillGroupCard key={g.category} group={g} />
        ))}
      </div>
    </div>
  </section>
);
