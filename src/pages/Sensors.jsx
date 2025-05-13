import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function Sensors() {
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
            <h1 className="text-4xl font-bold text-black">Engineering Sensor Projects</h1>
            <p className="text-gray-600">Measurements and Data Analysis (ME3870) | The Ohio State University</p>
          </header>

          {/* Introduction */}
          <section className="space-y-5">
            <div className="space-y-4 text-gray-700">
              <p>
                Here are the three sensor projects my team and I worked on for Measurements and Data Analysis (ME3870).
              </p>
            </div>
          </section>

          {/* Project 1: Thermocouple */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Thermocouple and Seebeck Effect</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                We designed and built a temperature measurement system utilizing thermocouples, calibrated against known reference points,
                and analyzed the voltage-temperature relationship to achieve accurate temperature readings.
              </p>
            </div>

            {/* PDF Document */}
            <div className="rounded-lg overflow-hidden shadow-md ">
              <iframe
                src="/logos/sensors1.pdf"
                className="w-full h-[600px]"
                title="Thermocouple and Seebeck Effect Report"
              />
            </div>
          </section>

          {/* Project 2: Pressure Transducer */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Pressure Transducer and Wheatstone Bridge</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                In this project, we investigated pressure measurement techniques using strain gauge-based pressure transducers and Wheatstone bridge circuits.
                We constructed a pressure measurement system, calibrated it across a range of known pressures, and analyzed its response characteristics.
              </p>
            </div>

            {/* PDF Document */}
            <div className="rounded-lg overflow-hidden shadow-md ">
              <iframe
                src="/logos/sensors2.pdf"
                className="w-full h-[600px]"
                title="Pressure Transducer and Wheatstone Bridge Report"
              />
            </div>
          </section>

          {/* Project 3: Optical Sensor */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Final Project: Optical Sensor Calibration for Automatic Hand-wash</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Our final project focused on developing and calibrating an optical sensor system for automatic hand-wash dispensers.
              </p>

            </div>

            {/* PDF Document */}
            <div className="rounded-lg overflow-hidden shadow-md ">
              <iframe
                src="/logos/sensorproject.pdf"
                className="w-full h-[600px]"
                title="Optical Sensor Calibration for Automatic Hand-wash Report"
              />
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="pt-6 md:pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-black transition-colors underline underline-offset-4 font-medium"
            >
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
              Back to Portfolio
            </Link>
          </div>

          {/* Copyright Footer */}
          <div className="text-center text-sm text-gray-500 mt-8 md:mt-12">
            © 2025 Eshwar Pamula. All rights reserved.
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

export default Sensors