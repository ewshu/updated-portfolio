import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Formula 1 Race Winner Predictor"
          description="Predicts driver performance based on historical data."
          link="https://predictf1.streamlit.app/"
        />
        <ProjectCard
          title="Flight Delay Analysis"
          description="Figure out the best airline based on your departure airport and month."
          link="https://www.howlateisyourflight.com/"
        />
        <ProjectCard
          title="Arduino Projects"
          description="Micro-keyboard, RFID door-lock, and Alexa-controlled blinds."
          link="/arduino-projects"
        />
        <ProjectCard
          title="Rocket Landing Trajectory Optimization"
          description="Optimization of landing trajectories for reusable rocket boosters."
          link="/rocket-optimization"
        />
      </div>
    </section>
  )
}
