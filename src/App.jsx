import { Github, Linkedin, Twitter, ArrowUpRight, Instagram } from "lucide-react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div className="bg-[hsl(0,0%,10%)] text-[hsl(0,0%,90%)]">
      <header className="flex justify-center gap-10 text-sm pt-6">
        <NavLink label="about" href="#about" />
        <NavLink label="resume" href="/resume" />
        <NavLink label="portfolio" href="#projects" />
        <NavLink label="photos" href="/photos" />
      </header>

      <main className="container mx-auto max-w-2xl px-4 pt-20 pb-12 space-y-10">
        {/* About */}
        <section id="about" className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug text-white">Eshwar Pamula</h1>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I'm an undergraduate <strong className="text-white">mechanical engineering</strong> student at The Ohio State University.
            </p>
            <p>
              Passionate about engineering, finance, and startups.<br />
              Seeking <strong className="text-white"> Full-Time Mechanical Engineering roles</strong> from December 2025.
            </p>
            <p>Reach out at <a
                href="mailto:pamula.3@osu.edu"
                className="underline decoration-1 underline-offset-4 hover:text-white transition-colors"
              >
                pamula.3@osu.edu
              </a>
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column (Mechanical Projects) */}
            <div className="space-y-4">
              <Project
                title="Formula Buckeyes FSAE"
                link=""
                description="suspension design"
              />
              <Project
                title="Interconnect Design @Allegion"
                link=""
                description="electro-mechanical residential locks"
              />
              <Project
                title="Rocket Trajectory Optimization"
                link="/rocket-optimization"
                description="predicting starship trajectory using CASADI"
              />
              <Project
                title="Four Bar Mechanism"
                link=""
                description="motion study on 4-bars interaction"
              />
              <Project
                title="3D Top-Opt Solver (WIP)"
                link=""
                description="visualization of primitive-based top-opt"
              />
            </div>

            {/* Right column (Other Projects) */}
            <div className="space-y-4">
              <Project
                title="Arduino and Raspberry Pi Projects"
                link="/arduino-projects"
                description="mini-keyboard, rfid-lock and alexa-blinds"
              />
              <Project
                title="F1 Prediction Analysis"
                link=""
                description="predicting f1 results with historical data"
              />
              <Project
                title="Flight Delay Analysis"
                link="https://www.howlateisyourflight.com/"
                description="find the best airline for your trip"
              />
              <Project
                title="Pathfinder Robot"
                link=""
                description="using Dijkstra's Algorithm"
              />
              <Project
                title="Engineering Sensor Calibrations"
                link=""
                description="sensors I have worked on"
              />
            </div>
          </div>
        </section>


        {/* Experience */}
        <section id="experience" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Experience</h2>
          <Experience title="Flux Marine" subtitle="Powertrain Engineering Intern (Incoming)" logo="src/assets/logos/fluxmarine.png" link="https://fluxmarine.com" bg="#0d0e0e" />
          <Experience title="Welsh House Capital" subtitle="Private Equity" logo="src/assets/logos/welshhouse.png" link="https://welshhouse.co" bg="#f0f0f0" />
          <Experience title="Our Future" subtitle="Content Strategy (acq. Morning Brew)" logo="src/assets/logos/morningbrew.png" link="https://www.morningbrew.com/" bg="#bce3ff" />
          <Experience title="Allegion" subtitle="Electro-Mechanical Engineering Intern (R&D)" logo="src/assets/logos/allegion.svg" link="https://www.allegion.com" bg="#ffe9d9" />
          <Experience title="Ecosystem Energy" subtitle="Mechanical Engineering Intern" logo="src/assets/logos/ee.png" link="https://ecosystem-energy.com" bg="#defee9" />
          <Experience title="Engie" subtitle="Project Engineering Intern" logo={null} link="https://www.engie-na.com/" bg="#d0e8ff" />
          <Experience title="Ohio State University (MMIDL)" subtitle="Undegraduate Researcher" logo="src/assets/logos/osulogo.png" link="https://mae.osu.edu/" bg="#eeeeee" />
          <Experience title="Ohio State University" subtitle="UTA for Statics & Mechanics of Materials (ME2010 & ME2020)" logo="src/assets/logos/osulogo.png" link="https://mae.osu.edu/" bg="#eeeeee" />
        </section>

        {/* Research */}
        <section id="research" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Research</h2>
          <Research title="Multi-functional Materials and Intelligent Design Lab" link="https://mae.osu.edu/mmidl" description="AI-Driven Topology Optimization for Accelerated Mechanical Design" />
          <Research title="Gear and Power Transmission Laboratory" link="https://mae.osu.edu/gearlab" description="Polymer (torlon) gear properties for commercial applications." />
        </section>

        {/* Education */}
        <section id="education" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Education</h2>
          <Experience title="The Ohio State University" subtitle="Mechanical Engineering, Bachelors" logo="src/assets/logos/osulogo.png" link="https://mae.osu.edu/" bg="#eeeeee" />
        </section>

        {/* Awards */}
        <section id="Awards" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Awards</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-white">Fintech Pitch Competition @ Fisher College </strong> — Inaugural Winner '23</p>
            <p><strong className="text-white">Launchpad @ Ohio State</strong> — Winner '22 and '23</p>
            <p><strong className="text-white">Formula SAE Michigan (ICE)</strong> — 3rd 2023 and 1st 2024 Overall (Formula Buckeyes)</p>
            <p><strong className="text-white">Undergraduate Engineering Research Grant Recipient</strong></p>
          </div>
        </section>


        {/* Now */}
        <section id="now" className="space-y-5">
          <h2 className="text-lg font-semibold text-muted-foreground">Now</h2>
          <p className="text-white">
            reading, learning piano, and working on ideas for a cleaner future.
          </p>
          <div className="h-64 rounded-md overflow-hidden">
            <MapContainer center={[41.5801, -71.4774]} zoom={9} scrollWheelZoom={false} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
            <span className="font-semibold">Location</span>
            <div className="flex-grow border-t border-dashed mx-3 opacity-30" />
            <span className="text-white">Bristol, RI</span>
          </div>
        </section>

        {/* Socials */}
        <footer className="flex justify-center gap-6 pt-12">
          <SocialLink href="https://github.com/ewshu" icon={Github} />
          <SocialLink href="https://linkedin.com/in/eshwarpamula" icon={Linkedin} />
          <SocialLink href="https://twitter.com/ewshwar" icon={Twitter} />
          <SocialLink href="https://instagram.com/eshwar.25" icon={Instagram} />
        </footer>
      </main>
    </div>
  )
}

// Project
function Project({ title, link, description }) {
  return (
    <div className="space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline underline-offset-4">
        {title}
        <ArrowUpRight className="inline ml-1 h-4 w-4 text-muted-foreground" />
      </a>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

// Experience
function Experience({ title, subtitle, logo, link, bg }) {
  return (
    <div className="flex items-center gap-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md p-1 flex items-center justify-center transition-all hover:brightness-90" style={{ backgroundColor: bg }}>
        {logo && <img src={logo} alt={title} className="w-8 h-8 object-contain" />}
      </a>
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

// Research
function Research({ title, link, description }) {
  return (
    <div className="space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline underline-offset-4">
        {title}
        <ArrowUpRight className="inline ml-1 h-4 w-4 text-muted-foreground" />
      </a>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

// Social Link
function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
      <Icon className="h-5 w-5" />
    </a>
  )
}

// Nav Link
function NavLink({ label, href }) {
  const isExternal = href.startsWith("http")
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
      {label}
    </a>
  )
}

export default App
export { NavLink }
