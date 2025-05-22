import { Github, Linkedin, Twitter, ArrowUpRight, Instagram } from "lucide-react"
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react'
import './index.css'

// Data-driven content
const workExperience = [
  { title: "Flux Marine", subtitle: "Powertrain Engineering Intern", logo: "/logos/fluxmarine.png", link: "https://fluxmarine.com", year: "2025", bg: "#191919", desc: "Series A startup working on electric boats. Incoming Summer 2025" },
  { title: "Allegion", subtitle: "Electro-Mechanical Engineering Intern (R&D)", logo: "/logos/allegion.svg", link: "https://www.allegion.com", year: "2024", bg: "#ffffff", desc: "New Product Development on Schalge Residential locks (NYSE: ALLE)." },
  { title: "Ohio State University (MMIDL)", subtitle: "Undergraduate Researcher", logo: "/logos/osulogo.png", link: "https://mae.osu.edu/", year: "2024", bg: "#f0f0f0", desc: "AI-enhanced Topology Optimization." },
  { title: "Ecosystem Energy", subtitle: "Mechanical Engineering Intern", logo: "/logos/ee.png", link: "https://ecosystem-energy.com", year: "2023", bg: "#ffffff", desc: "Energy Conservation projects for Ohio State." },
  { title: "Engie", subtitle: "Project Engineering Intern", logo: "/logos/engielogo.png", link: "https://www.engie-na.com/", year: "2022-23", bg: "#ffffff", desc: "$300M Combined Heat & Power Plant (CHP) for Ohio State." },
]

const builds = [
  { title: "Flight Delay Analysis", subtitle: "Best airline by airport/month", link: "https://www.howlateisyourflight.com/", year: "2024" },
  { title: "Four-Bar Mechanism", subtitle: "Motion/dynamics study", link: "/four-bar-motion", year: "2023" },
  { title: "Rocket-Landing Path Optimization", subtitle: "Reusable booster landing", link: "/rocket-optimization", year: "2025" },
  { title: "Formula-1 Race Winner Predictor", subtitle: "ML race winner (WIP)", link: "https://predictf1.streamlit.app/", year: "2023" },
]

// Add console.log to debug
console.log('Builds array:', builds);

const research = [
  { title: "Multi-functional Materials and Intelligent Design Lab", subtitle: "AI-Driven Topology Optimization", link: "https://mae.osu.edu/mmidl", year: "2025" },
  { title: "Gear and Power Transmission Laboratory", subtitle: "Polymer (torlon) gear properties", link: "https://mae.osu.edu/gearlab", year: "2023-24" },
]

const education = [
  { title: "The Ohio State University", subtitle: "Honors Mechanical Engineering, Bachelors", logo: "/logos/osulogo.png", link: "https://mae.osu.edu/", year: "2021-25", bg: "#f0f0f0" },
]

const movies = [
  { title: "When Life Gives You Tangerines", year: "2023", rating: "9.0", poster: "/logos/whenlifegivesyoutangerines.jpg" },
  { title: "The Mummy", year: "1999", rating: "8.5", poster: "/logos/themummy.jpg" },
  { title: "Attack on Titan", year: "2013-2024", rating: "9.5", poster: "/logos/attackontitan.jpg" },
  { title: "The Pursuit of Happyness", year: "2006", rating: "8.5", poster: "/logos/thepirsuitofhappyness.jpg" },
  { title: "Inception", year: "2010", rating: "9.0", poster: "/logos/inception.jpg" },
  { title: "Vinland Saga", year: "2019-2023", rating: "9.5", poster: "/logos/vinlandsaga.webp" },
  { title: "Shutter Island", year: "2010", rating: "8.5", poster: "/logos/shutterisland.jpg" },
  { title: "Manchester by the Sea", year: "2016", rating: "8.5", poster: "/logos/manchesterbythesea.jpg" },
  { title: "500 Days of Summer", year: "2009", rating: "8.0", poster: "/logos/500daysofsummer.jpg" },
  { title: "Breaking Bad", year: "2008-2013", rating: "9.5", poster: "/logos/breakingbad.jpg" },
  { title: "Oldboy", year: "2003", rating: "8.8", poster: "/logos/oldboy.jpg" },
  { title: "Good Will Hunting", year: "1997", rating: "8.3", poster: "/logos/goodwillhunting.png" },
  { title: "Past Lives", year: "2023", rating: "8.8", poster: "/logos/pastlives.jpg" },
]

const projectCards = [
  { title: "Formula Buckeyes (FSAE)", imgSrc: "/logos/formula-buckeyes.png", link: "/formula-buckeyes", desc: "suspension design", scale: 1.25 },
  { title: "Allegion (R&D Intern)", imgSrc: "/logos/interconnect-design.png", link: "/allegion", desc: "electro-mechanical locks", scale: 0.95 },
  { title: "Arduino Projects", imgSrc: "/logos/rfiddoorlock.png", link: "/arduino-projects", desc: "rfid-door lock and alexa-blinds", scale: 0.75 },
  { title: "Pathfinder Robot", imgSrc: "/logos/pathfinder-robot.png", link: "/pathfinder-robot", desc: "using A* algorithm", scale: 0.80 },
  { title: "5-Pk Mini Keyboard", imgSrc: "/logos/mini-keyboard.png", link: "/mini-keyboard", desc: "mini-keyboard with 5 most used keys", scale: 0.95 },
  { title: "Engineering Coursework", imgSrc: "/logos/sensor.png", link: "/sensors", desc: "sensors, designs, & data analysis", scale: 0.75 },
]

// Add other experience to experience section
const otherExperience = [
  { title: "Welsh House Capital", subtitle: "Private Equity Analyst", logo: "/logos/welshhouse.png", link: "https://welshhouse.co", year: "2023-25", bg: "#ffffff", desc: "Only intern on a $25M search fund" },
  { title: "Our Future", subtitle: "Content Strategy (acq. Morning Brew)", logo: "/logos/morningbrew.png", link: "https://www.morningbrew.com/", year: "2022-23", bg: "#82A6C6", desc: "Generated 50M+ views for My First Million podcast." },
  { title: "Ohio State University", subtitle: "UTA for Statics & Mechanics of Materials", logo: "/logos/osulogo.png", link: "https://mae.osu.edu/", year: "2023-25", bg: "#f0f0f0", desc: "Taught core engineering principles to over 500 students across four semesters." },
];
const allExperience = [...workExperience, ...otherExperience];

function App() {
  const [expandedWork, setExpandedWork] = useState(null);
  const [expandedSoftware, setExpandedSoftware] = useState(null);

  return (
    <div className="bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)] min-h-screen">
      {/* Fixed Top Nav Bar */}
      <header className="fixed top-0 left-0 right-0 bg-[hsl(45,30%,94%)] z-50 border-b border-gray-100">
        <nav className="w-full py-2 sm:py-5 px-2 sm:px-4 flex flex-row items-center justify-between max-w-3xl mx-auto">
          <a href="#" className="main-title text-base sm:text-2xl md:text-3xl flex-shrink-0 hover:opacity-80 transition" style={{ fontFamily: "__Instrument_Serif_127ae0, __Instrument_Serif_Fallback_127ae0" }}>Eshwar Pamula</a>
          <div className="flex items-center gap-1 sm:gap-8">
            <NavLink label="Resume" href="/resume" />
            <NavLink label="Portfolio" href="#projects" />
            <NavLink label="Photos" href="/photos" />
          </div>
        </nav>
      </header>

      <main className="container mx-auto max-w-3xl px-2 sm:px-4 pt-16 sm:pt-24 pb-4 md:pb-6">
        {/* About/Intro */}
        <section id="about" className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2">I'm Eshwar. I'm a <span className="font-semibold border-gray-400">mechanical engineering</span> student at <span className="font-semibold border-b border-dashed border-gray-400">The Ohio State University</span>.</p>
          <p className="mb-2 text-xs sm:text-sm md:text-base">I'm passionate about engineering, clean-tech, and startups. Seeking <span className="font-semibold border-b border-dashed border-gray-400">full-time engineering roles</span> from December 2025.</p>
          <p className="mb-2 text-xs sm:text-sm md:text-base">You can find me on <a href="https://www.linkedin.com/in/eshwarpamula/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">LinkedIn</a> or reach out at <a href="mailto:pamula.3@osu.edu" className="underline hover:text-black">pamula.3@osu.edu</a>.</p>
        </section>

        {/* Engineering Projects */}
        <section id="projects" className="mb-6 sm:mb-8">
          <h2 className="section-title font-normal mb-0 text-sm sm:text-base md:text-lg">Engineering Projects</h2>
          <div className="border-t border-dotted border-gray-400 mb-3 sm:mb-4"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {projectCards.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                imgSrc={project.imgSrc}
                link={project.link}
                desc={project.desc}
                scale={project.scale}
              />
            ))}
          </div>
        </section>

        {/* Software Builds before Work */}
        <SectionList
          id="software-builds"
          title="Software Builds"
          items={builds}
          expanded={expandedSoftware}
          setExpanded={setExpandedSoftware}
          isWork={false}
        />
        <div className="my-6 sm:my-8"></div>
        <SectionList
          id="work"
          title="Work"
          resumeLink="/resume"
          items={allExperience}
          expanded={expandedWork}
          setExpanded={setExpandedWork}
          isWork={true}
        />
        <div className="my-6 sm:my-8"></div>
        <SectionList id="research" title="Research" items={research} />
        <div className="my-6 sm:my-8"></div>
        <SectionList id="education" title="Education" items={education} />

        {/* Now/Map Section aligned with other sections */}
        <section id="now" className="w-full py-2">
          <h2 className="section-title font-normal mb-0 text-xs sm:text-base md:text-lg">Now</h2>
          <div className="border-t border-dotted border-gray-400 mb-3 sm:mb-4"></div>
          <p className="text-[9.5px] sm:text-sm md:text-base text-gray-800 whitespace-nowrap mb-3 sm:mb-4">reading, learning piano, and working on ideas for a cleaner future.</p>
          <div className="h-28 sm:h-32 md:h-40 lg:h-56 rounded-md overflow-hidden border border-gray-200 w-full mb-3 sm:mb-4">
            <MapContainer center={[41.5801, -71.4774]} zoom={9} scrollWheelZoom={false} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="flex items-center justify-between text-[9.5px] sm:text-sm text-gray-600 pt-2 sm:pt-3">
            <span className="font-semibold">Location</span>
            <div className="flex-grow border-t border-dashed mx-3 opacity-30" />
            <span className="text-black">Bristol, RI</span>
          </div>
        </section>

        {/* Favorite Films and Shows Row */}
        <section id="films" className="mt-4">
          <h2 className="section-title font-normal mb-0 text-sm sm:text-base md:text-lg">Favorite Films and Shows</h2>
          <div className="border-t border-dotted border-gray-400 mb-2"></div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-3 sm:gap-4">
              {[...movies, ...movies, ...movies, ...movies].map((movie, index) => (
                <FilmCardLB key={`${movie.title}-${index}`} {...movie} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Social Icons right-aligned */}
        <footer className="max-w-3xl mx-auto px-2 sm:px-4 pt-2 md:pt-3 flex flex-col sm:flex-row items-center sm:justify-between mt-4 gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © 2025 Eshwar Pamula. All rights reserved.
          </div>
          <div className="flex gap-3 sm:gap-4 ml-0 sm:ml-4">
            <SocialLink href="https://github.com/ewshu" icon={Github} />
            <SocialLink href="https://linkedin.com/in/eshwarpamula" icon={Linkedin} />
            <SocialLink href="https://twitter.com/ewshu" icon={Twitter} />
            <SocialLink href="https://instagram.com/eshwar.25" icon={Instagram} />
          </div>
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
        <h3 className="font-medium text-xs sm:text-base text-black">{title}</h3>
        <p className="text-[9px] sm:text-sm text-gray-600">{desc}</p>
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
    <div className="flex items-center gap-2 sm:gap-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-10 sm:h-10 rounded-md p-0.5 sm:p-1 flex items-center justify-center transition-all hover:brightness-90 border border-gray-200" style={{ backgroundColor: bgColor }}>
        {logo && <img src={logo} alt={title} className="w-3 h-3 sm:w-8 sm:h-8 object-contain" />}
      </a>
      <div>
        <p className="text-[9.5px] sm:text-base text-black font-medium">{title}</p>
        <p className="text-[9.5px] sm:text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  )
}

function Research({ title, link, description }) {
  return (
    <div className="space-y-0.5 sm:space-y-1">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-medium text-black hover:underline underline-offset-4 text-[9.5px] sm:text-base">
        {title}
        <ArrowUpRight className="inline ml-0.5 sm:ml-1 h-2 w-2 sm:h-4 sm:w-4 text-gray-600" />
      </a>
      <p className="text-[9.5px] sm:text-sm text-gray-600">{description}</p>
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
      className="px-1 sm:px-2 md:px-3 py-0.5 sm:py-1.5 md:py-2 rounded-md text-[10px] sm:text-sm text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
    >
      {label}
    </a>
  )
}

function FilmCardLB({ title, poster }) {
  return (
    <a 
      href={`https://www.google.com/search?q=${encodeURIComponent(title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center min-w-[40px] sm:min-w-[48px] md:min-w-[70px] lg:min-w-[90px] max-w-[90px] transition-opacity duration-200 hover:opacity-70"
    >
      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 aspect-[2/3] w-full bg-white">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </div>
    </a>
  )
}

// SectionList: clickable, hover, expandable for Work/Software Builds, dotted line under title
function SectionList({ id, title, items, resumeLink, expanded, setExpanded, isWork, className }) {
  return (
    <section id={id} className={`w-full py-2 ${className || ''}`}>
      <div className="flex items-center justify-between mb-0">
        <h2 className={`section-title mb-0 text-xs sm:text-lg font-normal ${title === 'Builds' ? 'font-bold' : ''}`}>{title}</h2>
        {resumeLink && (
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[9.5px] sm:text-xs font-normal bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-200">
            <ArrowUpRight className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" /> Resume
          </a>
        )}
      </div>
      <div className="border-t border-dotted border-gray-400 mb-0"></div>
      <ul className="divide-y divide-dashed divide-gray-300">
        {items.map((item, i) => {
          const isExpanded = expanded === i;
          const description = item.desc || item.description || "No description provided.";
          const isClickable = isWork;
          return (
            <li
              key={item.title}
              className={`flex flex-col transition-all duration-200 ${isClickable ? 'cursor-pointer' : ''}`}
              onClick={isClickable ? () => setExpanded(isExpanded ? null : i) : undefined}
            >
              <div
                className={`flex items-center justify-between px-0 py-0.5 sm:py-1 text-[9.5px] sm:text-sm w-full transition-all duration-200 ${isClickable && !isExpanded ? 'hover:bg-gray-200' : ''}`}
                style={{ minHeight: '28px' }}
              >
                <div className="flex items-center min-w-0 gap-1 sm:gap-2">
                  {item.logo && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-4 h-4 sm:w-7 sm:h-7 rounded-md p-0.5 sm:p-1 flex items-center justify-center border border-gray-200 transition-all hover:brightness-90" style={{ backgroundColor: item.bg || '#fff' }} onClick={e => e.stopPropagation()}>
                      <img src={item.logo} alt={item.title} className="w-3 h-3 sm:w-5 sm:h-5 object-contain" />
                    </a>
                  )}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                      {isWork ? (
                        <span className="section-list-item-title truncate text-[9.5px] sm:text-base">{item.title}</span>
                      ) : (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="section-list-item-title truncate hover:underline inline-flex items-center text-[9.5px] sm:text-base" onClick={e => e.stopPropagation()}>
                          {item.title}
                          {item.link && <ArrowUpRight className="ml-0.5 sm:ml-1 w-2 h-2 sm:w-3 sm:h-3 inline" />}
                        </a>
                      )}
                      {item.subtitle && (
                        <span className="section-list-item-subtitle truncate ml-0.5 sm:ml-1 text-[9.5px] sm:text-sm">{item.subtitle}</span>
                      )}
                    </div>
                  </div>
                </div>
                {item.year && (
                  <span className="section-list-item-year ml-1 sm:ml-2 whitespace-nowrap text-[9.5px] sm:text-sm">{item.year}</span>
                )}
              </div>
              {isClickable && isExpanded && (
                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-[9.5px] sm:text-sm text-gray-700" style={{ background: 'hsl(45,30%,94%)' }}>
                  {description}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// Update the animation styles at the end of the file
const styles = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-25% - 1rem));
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
  width: fit-content;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
`;

// Add this right after the styles constant
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default App
export { NavLink }