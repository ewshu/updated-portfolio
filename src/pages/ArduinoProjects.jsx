import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter, ArrowUpRight, Instagram, ArrowLeft } from "lucide-react"

function ArduinoProjects() {
  return (
    <div className="min-h-screen bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)]">
      {/* Nav - Same as home page */}
      <header className="flex justify-center gap-3 md:gap-5 text-xs md:text-sm pt-4 md:pt-6">
        <NavLink label="About" href="/#about" />
        <NavLink label="Resume" href="/resume" />
        <NavLink label="Portfolio" href="/#projects" />
        <NavLink label="Photos" href="/photos" />
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-5 md:space-y-7">
          <header className="space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold text-black">Arduino Projects</h1>
            <p className="text-sm md:text-base text-gray-600">Smart home automation and security solutions built with Arduino</p>
          </header>

          {/* RFID Door Lock Section */}
          <section className="space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-black">RFID Door Locking System</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Developed an automatic RFID door locking system for my room during Summer 2024, integrating both
                hardware and software components into one solution. The design
                replaces only the interior half of a standard Schlage deadbolt assembly, making use of
                the original mounting screws for a clean installation.
              </p>
              <p>
                The system features RFID access, allowing new authentication cards
                to be easily added or removed from the Arduino's EEPROM using a designated master card.
              </p>
              <p>
                Key components include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 md:ml-4 text-gray-700">
                <li>Arduino Nano microcontroller</li>
                <li>MFRC522 RFID reader module</li>
                <li>Continuous rotation servo motor</li>
                <li>Custom 3D-printed mounting bracket</li>
                <li>Power management circuit with sleep mode for extended battery life</li>
              </ul>
            </div>

            {/* Images and Video Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left column - Two stacked images */}
              <div className="space-y-4 md:space-y-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/dlock.png"
                    alt="RFID Door Lock"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/arduino-lock.gif"
                    alt="RFID Door Lock Installation"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right column - Vertical Video */}
              <div className="rounded-lg overflow-hidden h-full flex items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/logos/dlock.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Automatic Blind Control Section */}
          <section className="space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-black">Voice-Controlled Smart Blinds</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                For my ME 2900 (Introduction to Mechanical Design) project, I designed and built a voice-controlled blind opener that
                integrates with Amazon Alexa. This system allows for hands-free operation of window blinds
                through simple voice commands or scheduled routines. Shoutout to  <a href="https://www.linkedin.com/in/shahil-merchant/" target="_blank" rel="noopener noreferrer" className="font-extrabold hover:text-black transition-colors hover:underline">Shahil Merchant</a> (ECE) for his help with the code.
              </p>
              <p>
                The design utilizes a NEMA 17 stepper motor for precise control over the blind position,
                enabling partial openings and custom height settings. An IR sensor provides position feedback
                to maintain calibration and prevent overruns.
              </p>
              <p>
                Technical components include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 md:ml-4 text-gray-700">
                <li>NEMA 17 Stepper Motor for precise rotational control</li>
                <li>Arduino Uno as the main controller</li>
                <li>Adafruit Motor Shield for stepper motor driving</li>
                <li>ESP8266 WiFi module for cloud connectivity</li>
                <li>IR sensor for position detection and calibration</li>
                <li>Custom mounting brackets and pulley system</li>
              </ul>
            </div>

            {/* Video First */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover aspect-video"
              >
                <source src="/logos/blinds.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Grid of 4 Smaller Images - Centered */}
            <div className="max-w-2xl mx-auto mb-4 md:mb-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-lg overflow-hidden shadow-md border">
                  <img
                    src="/logos/1blinds.png"
                    alt="Smart Blinds Component Assembly"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md border">
                  <img
                    src="/logos/2blinds.png"
                    alt="Smart Blinds Motor Mount"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <div className="rounded-lg shadow-md border flex items-center justify-center overflow-hidden aspect-square">
                  <img
                    src="/logos/3blinds.png"
                    alt="Smart Blinds Circuit Assembly"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/logos/blinds4.jpg"
                    alt="Smart Blinds Installation"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
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
      className="px-2 md:px-3 py-1.5 md:py-2 rounded-md text-xs md:text-sm text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
    >
      {label}
    </a>
  )
}

export default ArduinoProjects