import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Allegion() {
  return (
    <div className="min-h-screen bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)]">
      {/* Nav - Same as home page */}
      <header className="flex justify-center gap-5 text-sm pt-6">
        <NavLink label="About" href="/#about" />
        <NavLink label="Resume" href="/resume" />
        <NavLink label="Portfolio" href="/#projects" />
        <NavLink label="Photos" href="/photos" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-7">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold text-black">Interconnect Design @ Allegion</h1>
            <p className="text-gray-600">R&D Mechanical Engineering Internship | Summer 2024</p>
          </header>
{/* Project Overview */}
          <section className="space-y-5">
            <div className="space-y-4 text-gray-700">
              <p>
                As a part of my summer internship as a mechanical engineering intern at Allegion, I was tasked to develop
                a series of lock integration solutions (mechanical and electronic) and develop a new Apollo Interconnect Slider Asset.
              </p>

              <h3 className="text-xl font-semibold text-black mt-6">Project Scope</h3>
              <p>
                <strong>Worked on Two New Products:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
                <li>Schlage B560F with Indicator and IC Slider Asset</li>
                <li>Schlage Encode and IC Slider Asset</li>
              </ol>
              <p>
                These products are on the roadmap for Residential New Product Development for <strong>2025</strong>.
              </p>

              <h3 className="text-xl font-semibold text-black mt-6">The Challenge: Interconnect System</h3>
              <p>
              Design an interconnect system that would solve a frustration in residential security:
                the disconnect between traditional mechanical door locks and modern electronic touchpad locks.
              </p>
              <p>
                Traditionally, homeowners have had to operate two separate locking mechanisms: the standard mechanical deadbolt that comes with their home,
                and an additional electronic touchpad lock they might install later. This creates a cumbersome experience, requiring users to operate two different locks.
              </p>
              <h3 className=" font-semibold text-black mt-6">Proposed Solution:</h3>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <p><strong>From outside the home:</strong> When the electronic lock is unlocked via code, card, or smartphone, the mechanism simultaneously unlocks the traditional deadbolt.</p>
                <p><strong>From inside the home:</strong> A single action of pulling down the interior lever unlocks both the electronic and mechanical locks together.</p>
              </ul>
              <p>
                The double-CAM design was critical to enabling smooth,
                reliable mechanical transfer between the two lock types, creating a single security solution.
              </p>
            </div>
          </section>
          {/* Locked/Unlocked Positions */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Operational States</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Locked Position */}
              <div className="space-y-2">
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
                  <img
                    src="/logos/allegionunlock.jpg"
                    alt="Locked Position"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-center font-medium text-gray-700">Locked Position</p>
              </div>

              {/* Unlocked Position */}
              <div className="space-y-2">
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
                  <img
                    src="/logos/allegionlock.jpg"
                    alt="Unlocked Position"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-center font-medium text-gray-700">Unlocked Position</p>
              </div>
            </div>
          </section>

          {/* Exploded Assembly */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Exploded Assembly</h2>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/logos/allegionassembly.png"
                alt="Exploded Assembly View"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Interconnect and Working Video */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Interconnect Mechanism</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interconnect Image */}
              <div className="rounded-lg overflow-hidden ">
                <img
                  src="/logos/interconnect-design.png"
                  alt="Interconnect Mechanism"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Working Video */}
              <div className="rounded-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  <source src="/logos/allegionworking.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors underline underline-offset-4 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
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

export default Allegion