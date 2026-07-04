import SectionHeading from "./section-heading";
import { experience } from "../constants/experience";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <div className="px-4 py-8 shadow-section-inset border-t border-neutral-200/20">
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="flex flex-col my-6 gap-8">
        {experience.map((exp, idx) => (
          <ExperienceCard experience={exp} key={exp.title + idx} />
        ))}
      </div>
    </div>
  );
}
