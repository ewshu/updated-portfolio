import ExperienceItem from "./ExperienceItem"

export default function Education() {
  return (
    <section id="education" className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      <ExperienceItem name="The Ohio State University" title="Honors Mechanical Engineering, Bachelors" logo="/src/assets/logos/osu.svg" link="https://mae.osu.edu" />
    </section>
  )
}
