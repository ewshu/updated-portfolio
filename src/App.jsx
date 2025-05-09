import { Github, Linkedin, Twitter, ArrowUpRight, Instagram } from "lucide-react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

function App() {
  return (
    <div className="bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)]">
      {/* Nav */}
      <header className="flex justify-center gap-5 text-sm pt-6">
        <NavLink label="about" href="#about" />
        <NavLink label="resume" href="/resume" />
        <NavLink label="portfolio" href="#projects" />
        <NavLink label="photos" href="/photos" />
      </header>

      <main className="container mx-auto pt-20 pb-12 space-y-16">
        {/* About - Centered with max-width */}
        <section id="about" className="max-w-2xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl font-bold leading-snug text-black">Eshwar Pamula</h1>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I'm an undergraduate <strong className="text-black">mechanical engineering</strong> student at The Ohio State University.<br/>
              Currently a powertrain engineering intern at  <a href="https://fluxmarine.com" target="_blank" rel="noopener noreferrer" className=" hover:text-black transition-colors hover:underline">Flux Marine</a>.
            </p>
            <p>
              Passionate about engineering, finance, and startups.<br />
              Seeking <strong className="text-black">full-time engineering roles</strong> from december 2025.
            </p>
            <p>
              You can find me on  <a href="https://www.linkedin.com/in/eshwarpamula/" target="_blank" rel="noopener noreferrer" className=" hover:text-black hover:underline transition-colors">linkedin</a> or reach out to me at <a
                href="mailto:pamula.3@osu.edu"
                className=" decoration-1 hover:underline hover:text-black transition-colors"
              >
                pamula.3@osu.edu
              </a>
            </p>
          </div>
        </section>


        {/* Projects - Full width with 3 columns */}
        <section id="projects" className="w-full max-w-7xl mx-auto space-y-2.5">
          <h2 className="text-2xl font-extrabold text-black text-center">Engineering Work</h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            from personal to company projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-2">
            <ProjectCard
              title="Formula Buckeyes FSAE"
              imgSrc="/assets/projects/formula-buckeyes.png"
              link="/formula-buckeyes"
              desc="suspension design"
              scale={1.5}
            />
            <ProjectCard
              title="Allegion (R&D Intern)"
              imgSrc="/assets/projects/interconnect-design.png"
              link="/allegion"
              desc="electro-mechanical locks"
            />

            <ProjectCard
              title="Pathfinder Robot"
              imgSrc="/assets/projects/pathfinder-robot.png"
              link="/pathfinder-robot"
              desc="using A* algorithm"
              scale={1.2}

            />
            <ProjectCard
              title="Arduino Projects"
              imgSrc="/assets/projects/rfiddoorlock.png"
              link="/arduino-projects"
              desc="rfid-door lock and alexa-blinds"
              scale = {-0.8}
            />

            <ProjectCard
              title="5-Pk Mini Keyboard"
              imgSrc="/assets/projects/mini-keyboard.png"
              link="/mini-keyboard"
              desc="mini-keyboard with 5 most used keys"
              scale={1}
            />


            <ProjectCard
              title="Engineering Coursework"
              imgSrc="/assets/projects/sensor.png"
              link="/sensors"
              desc="sensors, designs, & data analysis"
              scale={-0.8}

            />
          </div>
        </section>

{/* Software Projects Section - After the main project grid */}
<section id="software-projects" className="max-w-2xl mx-auto px-4 space-y-5 mt-16">
  <h2 className="text-xl font-semibold text-black">Other Software Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="space-y-4">
      <Project
        title="Formula-1 Race Winner Predictor"
        link="https://predictf1.streamlit.app/"
        description="Predicts driver performance based on historical data."
      />
      <Project
        title="Flight Delay Analysis"
        link="https://www.howlateisyourflight.com/"
        description="Figure out the best airline based on your departure airport and month."
      />
    </div>

    {/* Right Column */}
    <div className="space-y-4">
      <Project
        title="Four-Bar Mechanism"
        link="/four-bar-mechanism"
        description="Motion study on 4-bars interaction and dynamics analysis."
      />
      <Project
        title="Rocket-Landing Path Optimization"
        link="/rocket-optimization"
        description="Optimization of landing trajectories for reusable rocket boosters."
      />
    </div>
  </div>
</section>

        {/* Experience - Centered with max-width */}
        <section id="experience" className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-xl font-semibold text-black">Experience</h2>
          <Experience title="Flux Marine" subtitle="Powertrain Engineering Intern (Incoming)" logo="/logos/fluxmarine.png" link="https://fluxmarine.com" bg="#191919" />
          <Experience title="Allegion" subtitle="Electro-Mechanical Engineering Intern (R&D)" logo="/logos/allegion.svg" link="https://www.allegion.com" bg="#ffffff" />
          <Experience title="Ecosystem Energy" subtitle="Mechanical Engineering Intern" logo="/logos/ee.png" link="https://ecosystem-energy.com" bg="#ffffff" />
          <Experience title="Engie" subtitle="Project Engineering Intern" logo = "/logos/engielogo.png" link="https://www.engie-na.com/" bg="#ffffff" />
          <Experience title="Welsh House Capital" subtitle="Private Equity" logo="/logos/welshhouse.png" link="https://welshhouse.co" bg="#ffffff" />
          <Experience title="Our Future" subtitle="Content Strategy (acq. Morning Brew)" logo="/logos/morningbrew.png" link="https://www.morningbrew.com/" bg="#82A6C6" />
          <Experience title="Ohio State University (MMIDL)" subtitle="Undergraduate Researcher" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
          <Experience title="Ohio State University" subtitle="UTA for Statics & Mechanics of Materials" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
        </section>

        {/* Research - Centered with max-width */}
        <section id="research" className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-xl font-semibold text-black">Research</h2>
          <Research title="Multi-functional Materials and Intelligent Design Lab" link="https://mae.osu.edu/mmidl" description="AI-Driven Topology Optimization for Accelerated Mechanical Design" />
          <Research title="Gear and Power Transmission Laboratory" link="https://mae.osu.edu/gearlab" description="Polymer (torlon) gear properties for commercial applications." />
        </section>

        {/* Education - Centered with max-width */}
        <section id="education" className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-xl font-semibold text-black">Education</h2>
          <Experience title="The Ohio State University" subtitle="Honors Mechanical Engineering, Bachelors" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
        </section>

        {/* Awards - Centered with max-width */}
        <section id="Awards" className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-xl font-semibold text-black">Awards</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong className="text-black">Fintech Pitch Competition @ Fisher College</strong> — Inaugural Winner '23</p>
            <p><strong className="text-black">Launchpad @ Ohio State</strong> — Winner '22 and '23</p>
            <p><strong className="text-black">Formula SAE Michigan (ICE)</strong> — 3rd 2023 and 1st 2024 Overall</p>
            <p><strong className="text-black">Undergraduate Engineering Research Grant Recipient</strong></p>
            <p><strong className="text-black">MAE Undergraduate Teaching Assistant Award</strong> - Runner Up</p>
          </div>
        </section>

        {/* Now - Centered with max-width */}
        <section id="now" className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-xl font-semibold text-black">Now</h2>
          <p className="text-gray-800">reading, learning piano, and working on ideas for a cleaner future.</p>
          <div className="h-64 rounded-md overflow-hidden border border-gray-200">
            <MapContainer center={[41.5801, -71.4774]} zoom={9} scrollWheelZoom={false} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
            <span className="font-semibold">Location</span>
            <div className="flex-grow border-t border-dashed mx-3 opacity-30" />
            <span className="text-black">Bristol, RI</span>
          </div>
        </section>
<div className="max-w-2xl mx-auto px-4 text-center text-xs text-gray-500 mt-3">
  Website insipired from <a href="https://kelvinzhang.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Kelvin Zhang</a> and <a href="https://www.christinezhou.info/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Christine Zhou</a>.
</div>
        {/* Footer - Centered */}
        <footer className="flex justify-center gap-6 pt-2">
          <SocialLink href="https://github.com/ewshu" icon={Github} />
          <SocialLink href="https://linkedin.com/in/eshwarpamula" icon={Linkedin} />
          <SocialLink href="https://twitter.com/ewshwar" icon={Twitter} />
          <SocialLink href="https://instagram.com/eshwar.25" icon={Instagram} />
        </footer>
      </main>
    </div>
  )
}

function ProjectCard({ title, imgSrc, link, desc, scale = 1 }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="space-y-2">
      {/* Image container */}
      <div
        className="aspect-square"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={link || "#"}
          className="block w-full h-full"
        >
          {/* Image with grayscale filter that transitions to color on hover */}
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-contain transition-all duration-500"
            style={{
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transform: isHovered ? `scale(${scale * 1.05})` : `scale(${scale})`,
            }}
          />
        </a>
      </div>

      {/* Title and description below image */}
      <div className="px-1">
        <h3 className="font-medium text-base text-black">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Project({ title, link, description }) {
  return (
    <div className="space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-black hover:underline underline-offset-4">
        {title}
        <ArrowUpRight className="inline ml-1 h-4 w-4 text-gray-600" />
      </a>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function Experience({ title, subtitle, logo, link, bg }) {
  // Determine background color based on logo presence for better contrast
  const bgColor = logo ? bg : "#f8f8f8";

  return (
    <div className="flex items-center gap-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md p-1 flex items-center justify-center transition-all hover:brightness-90 border border-gray-200" style={{ backgroundColor: bgColor }}>
        {logo && <img src={logo} alt={title} className="w-8 h-8 object-contain" />}
      </a>
      <div>
        <p className="text-black font-medium">{title}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  )
}

function Research({ title, link, description }) {
  return (
    <div className="space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-black hover:underline underline-offset-4">
        {title}
        <ArrowUpRight className="inline ml-1 h-4 w-4 text-gray-600" />
      </a>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-colors hover:text-black">
      <Icon className="h-5 w-5" />
    </a>
  )
}

function NavLink({ label, href }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="px-3 py-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
    >
      {label}
    </a>
  )
}

export default App
export { NavLink }