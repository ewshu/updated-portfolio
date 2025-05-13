import { Github, Linkedin, Twitter, ArrowUpRight, Instagram } from "lucide-react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)]">
      {/* Nav */}
      <header className="flex justify-center gap-3 md:gap-5 text-xs md:text-sm pt-4 md:pt-6">
        <NavLink label="About" href="#about" />
        <NavLink label="Resume" href="/resume" />
        <NavLink label="Portfolio" href="#projects" />
        <NavLink label="Photos" href="/photos" />
      </header>

      <main className="container mx-auto pt-12 md:pt-20 pb-8 md:pb-12 space-y-12 md:space-y-16">
        {/* About - Centered with max-width */}
        <section id="about" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-black">Eshwar Pamula</h1>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              I'm an undergraduate <strong className="text-black"> Mechanical Engineering</strong> student at The Ohio State University.<br/>
              Currently a Powertrain Engineering Intern at  <a href="https://fluxmarine.com" target="_blank" rel="noopener noreferrer" className=" hover:text-black transition-colors hover:underline">Flux Marine</a>.
            </p>
            <p>
              Passionate about engineering, clean-tech, and startups.<br />
              Seeking <strong className="text-black">full-time engineering roles</strong> from December 2025.
            </p>
            <p>
              You can find me on  <a href="https://www.linkedin.com/in/eshwarpamula/" target="_blank" rel="noopener noreferrer" className=" hover:text-black hover:underline transition-colors">linkedin</a> or reach out to me at <a
                href="mailto:pamula.3@osu.edu"
                className=" decoration-1 hover:underline hover:text-black transition-colors"
              >
                pamula.3@osu.edu!
              </a>
            </p>
          </div>
        </section>


        {/* Projects - Full width with 3 columns */}
        <section id="projects" className="w-full max-w-7xl mx-auto space-y-2 md:space-y-2.5">
          <h2 className="text-xl md:text-2xl font-extrabold text-black text-center">Engineering Work</h2>
          <p className="text-center text-xs md:text-sm text-gray-600 mb-6 md:mb-8">
            from personal to company projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-2">
            <ProjectCard
              title="Formula Buckeyes (FSAE)"
              imgSrc="/logos/formula-buckeyes.png"
              link="/formula-buckeyes"
              desc="suspension design"
              scale={1.5}
            />
            <ProjectCard
              title="Allegion (R&D Intern)"
              imgSrc="/logos/interconnect-design.png"
              link="/allegion"
              desc="electro-mechanical locks"
            />


            <ProjectCard
              title="Arduino Projects"
              imgSrc="/logos/rfiddoorlock.png"
              link="/arduino-projects"
              desc="rfid-door lock and alexa-blinds"
              scale = {0.8}
            />

            <ProjectCard
              title="Pathfinder Robot"
              imgSrc="/logos/pathfinder-robot.png"
              link="/pathfinder-robot"
              desc="using A* algorithm"
              scale={1}

            />

            <ProjectCard
              title="5-Pk Mini Keyboard"
              imgSrc="/logos/mini-keyboard.png"
              link="/mini-keyboard"
              desc="mini-keyboard with 5 most used keys"
              scale={1}
            />


            <ProjectCard
              title="Engineering Coursework"
              imgSrc="/logos/sensor.png"
              link="/sensors"
              desc="sensors, designs, & data analysis"
              scale={0.8}

            />
          </div>
        </section>

{/* Software Projects Section - After the main project grid */}
<section id="software-projects" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5 mt-8 md:mt-16">
  <h2 className="text-lg md:text-xl font-semibold text-black">Software Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {/* Left Column */}
    <div className="space-y-4">

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
        link="/four-bar-motion"
        description="Motion study on 4-bars interaction and dynamics analysis."
      />
      <Project
        title="Rocket-Landing Path Optimization"
        link="/rocket-optimization"
        description="Optimization of landing trajectories for reusable rocket boosters."
      />

      <Project
        title="Formula-1 Race Winner Predictor"
        link="https://predictf1.streamlit.app/"
        description="ML model to predict the race winner (WIP)."
      />

    </div>
  </div>
</section>

        {/* Experience - Centered with max-width */}
        <section id="experience" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Engineering Experience</h2>
          <Experience title="Flux Marine" subtitle="Powertrain Engineering Intern (Incoming)" logo="/logos/fluxmarine.png" link="https://fluxmarine.com" bg="#191919" />
          <Experience title="Allegion" subtitle="Electro-Mechanical Engineering Intern (R&D)" logo="/logos/allegion.svg" link="https://www.allegion.com" bg="#ffffff" />
           <Experience title="Ohio State University (MMIDL)" subtitle="Undergraduate Researcher" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
          <Experience title="Ecosystem Energy" subtitle="Mechanical Engineering Intern" logo="/logos/ee.png" link="https://ecosystem-energy.com" bg="#ffffff" />
          <Experience title="Engie" subtitle="Project Engineering Intern" logo = "/logos/engielogo.png" link="https://www.engie-na.com/" bg="#ffffff" />

        </section>
        <section id="otherexperience" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Other Experience</h2>
          <Experience title="Welsh House Capital" subtitle="Private Equity Analyst" logo="/logos/welshhouse.png" link="https://welshhouse.co" bg="#ffffff" />
          <Experience title="Our Future" subtitle="Content Strategy (acq. Morning Brew)" logo="/logos/morningbrew.png" link="https://www.morningbrew.com/" bg="#82A6C6" />
          <Experience title="Ohio State University" subtitle="UTA for Statics & Mechanics of Materials" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
        </section>

        {/* Research - Centered with max-width */}
        <section id="research" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Research Work</h2>
          <Research title="Multi-functional Materials and Intelligent Design Lab" link="https://mae.osu.edu/mmidl" description="AI-Driven Topology Optimization for Accelerated Mechanical Design" />
          <Research title="Gear and Power Transmission Laboratory" link="https://mae.osu.edu/gearlab" description="Polymer (torlon) gear properties for commercial applications." />
        </section>

        {/* Education - Centered with max-width */}
        <section id="education" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Education</h2>
          <Experience title="The Ohio State University" subtitle="Honors Mechanical Engineering, Bachelors" logo="/logos/osulogo.png" link="https://mae.osu.edu/" bg="#f0f0f0" />
        </section>

        {/* Awards - Centered with max-width */}
        <section id="Awards" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Awards</h2>
          <div className="space-y-2 text-xs md:text-sm text-gray-700">
            <p><strong className="text-black">Fintech Pitch Competition @ Fisher College</strong> — Inaugural Winner '23</p>
            <p><strong className="text-black">Launchpad @ Ohio State</strong> — Winner '22 and '23</p>
            <p><strong className="text-black">Formula SAE Michigan (ICE)</strong> — 3<sup>rd</sup> 2023 and 1<sup>rd</sup> 2024 Overall</p>
            <p><strong className="text-black">MAE Undergraduate Teaching Assistant Award</strong> - Runner Up</p>
            <p><strong className="text-black">Undergraduate MAE Research Grant Recipient</strong>- 1 of 10 students.</p>

          </div>
        </section>

        {/* Now - Centered with max-width */}
        <section id="now" className="max-w-2xl mx-auto px-4 space-y-4 md:space-y-5">
          <h2 className="text-lg md:text-xl font-semibold text-black">Now</h2>
          <p className="text-sm md:text-base text-gray-800">reading, learning piano, and working on ideas for a cleaner future.</p>
          <div className="h-48 md:h-64 rounded-md overflow-hidden border border-gray-200">
            <MapContainer center={[41.5801, -71.4774]} zoom={9} scrollWheelZoom={false} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 pt-2">
            <span className="font-semibold">Location</span>
            <div className="flex-grow border-t border-dashed mx-3 opacity-30" />
            <span className="text-black">Bristol, RI</span>
          </div>
        </section>
<div className="max-w-2xl mx-auto px-4 text-center text-[10px] md:text-xs text-gray-500 mt-2 md:mt-3">
  Website inspired from <a href="https://kelvinzhang.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Kelvin Zhang</a> and <a href="https://www.christinezhou.info/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Christine Zhou</a>.
</div>
        {/* Footer - Centered */}
        <footer className="flex justify-center gap-4 md:gap-6 pt-2">
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => !isMobile && setIsHovered(true);
  const handleMouseLeave = () => !isMobile && setIsHovered(false);

  // Adjust scale for mobile
  const mobileScale = scale * 0.8; // Reduce scale by 20% on mobile

  return (
    <div className="space-y-2 text-center">
      <div
        className="aspect-square flex justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={link || "#"}
          className="block w-full h-full"
        >
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-contain transition-all duration-500"
            style={{
              filter: isMobile ? 'grayscale(0%)' : (isHovered ? 'grayscale(0%)' : 'grayscale(100%)'),
              transform: isMobile ? `scale(${mobileScale})` : (isHovered ? `scale(${scale * 1.05})` : `scale(${scale})`),
            }}
          />
        </a>
      </div>

      <div className="px-1 text-center">
        <h3 className="font-medium text-sm md:text-base text-black">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Project({ title, link, description }) {
  const isExternal = link.startsWith("http");

  return (
    <div className="space-y-1">
      <a
        href={link}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-medium hover:underline underline-offset-4 text-sm md:text-base"
      >
        {title}
        <ArrowUpRight className="inline ml-1 h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
      </a>
      <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function Experience({ title, subtitle, logo, link, bg }) {
  const bgColor = logo ? bg : "#f8f8f8";

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-md p-1 flex items-center justify-center transition-all hover:brightness-90 border border-gray-200" style={{ backgroundColor: bgColor }}>
        {logo && <img src={logo} alt={title} className="w-6 h-6 md:w-8 md:h-8 object-contain" />}
      </a>
      <div>
        <p className="text-sm md:text-base text-black font-medium">{title}</p>
        <p className="text-xs md:text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  )
}

function Research({ title, link, description }) {
  return (
    <div className="space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-black hover:underline underline-offset-4 text-sm md:text-base">
        {title}
        <ArrowUpRight className="inline ml-1 h-3 w-3 md:h-4 md:w-4 text-gray-600" />
      </a>
      <p className="text-xs md:text-sm text-gray-600">{description}</p>
    </div>
  )
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 transition-colors hover:text-black">
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
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
      className="px-2 md:px-3 py-1.5 md:py-2 rounded-md text-xs md:text-sm text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
    >
      {label}
    </a>
  )
}

export default App
export { NavLink }