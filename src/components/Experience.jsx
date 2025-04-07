import ExperienceItem from "./ExperienceItem"

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <ExperienceItem name="Welsh House Capital" title="Private Equity" logo="/assets/logos/welsh.svg" link="https://welshhouse.co" />
      <ExperienceItem name="Our Future" title="Content Strategy (acq. Morning Brew)" logo="/assets/logos/ourfuture.svg" link="https://www.ourfuturehq.com/" />
      <ExperienceItem name="Allegion" title="R&D Engineering" logo="/assets/logos/allegion.svg" link="https://www.allegion.com" />
      <ExperienceItem name="Ecosystem Energy" title="HVAC Engineering" logo="/assets/logos/ecosystem.svg" link="https://ecosystem-energy.com" />
      <ExperienceItem name="Engie" title="Project Engineering" logo="/assets/logos/engie.svg" link="https://www.engie-na.com" />
    </section>
  )
}
