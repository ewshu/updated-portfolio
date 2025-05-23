import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function MiniKeyboard() {
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
            <h1 className="text-2xl md:text-4xl font-bold text-black">5-Key Mini Keyboard</h1>
            <p className="text-sm md:text-base text-gray-600">Custom Keyboard Design and Fabrication | Personal Project</p>
          </header>

          {/* Project Overview */}
          <section className="space-y-4 md:space-y-5">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                I took up this personal project in my garage from ideation to production after coming across a similar concept on Amazon.
                The idea was to make a mini keyboard with 5 of my most frequently used keys: Space, Enter, Escape, Shift, and Delete.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-black mt-4 md:mt-6">Ideation</h3>
              <p>
                I wanted to have one long row with 5 keys, so the case design would be a stacked acrylic concept that would house the PCB
                and Arduino that would connect to the standard MX Cherry-style keyboard switches.
              </p>
            </div>
          </section>

          {/* Technical Details */}
          <section className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <h3 className="text-lg md:text-xl font-semibold text-black">Components</h3>
              <p>
                The keyboard uses an Arduino Pro Micro (ATmega32U4) microcontroller which natively supports USB HID functionality,
                making it ideal for keyboard applications. For the switches, I selected Gateron Brown tactile mechanical switches with
                a 45g actuation force, providing a satisfying typing experience without being too loud.
              </p>
              <p>
                The keycaps are custom PBT double-shot with side-printed legends for durability and a premium feel. The case consists
                of a 5-layer stacked acrylic design (3mm thickness per layer) which provides structural integrity while showcasing
                the internal components.
              </p>
              <p>
                To connect everything, I designed a custom single-layer PCB with through-hole components, and added a USB-C port with
                ESD protection circuit for modern connectivity. The firmware is a modified version of QMK, allowing for custom key
                mapping and macros.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-black mt-4">Fabrication Process</h3>
              <p>
                I began by designing the PCB layout using KiCad, carefully optimizing the trace routing for this compact form factor.
                The case was designed in Fusion 360 with precise measurements to ensure the switches would mount properly and align
                with the PCB.
              </p>
              <p>
                I laser-cut the acrylic layers with 0.1mm tolerance for perfect alignment between layers. All components were
                hand-soldered, including diodes and controller pins, which required steady hands and careful attention to detail.
                The programming of the Arduino involved creating custom firmware with key macros and layer functionality.
              </p>
              <p>
                Final assembly used brass standoffs and screws to hold the acrylic layers together, providing a durable yet
                visually appealing finished product. The result is a compact, portable solution for my most frequently used keys,
                which can be reprogrammed for different applications like video editing, gaming, or general productivity.
              </p>
            </div>
          </section>

          {/* Gallery Section - Vertically stacked and centered */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Final Product</h2>

            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {/* GIF */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logos/keyboard.gif"
                  alt="Mini Keyboard Demo"
                  className="w-full h-64 md:h-96 mx-auto"
                />
              </div>

              {/* First image */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logos/keyboard1.jpg"
                  alt="Mini Keyboard Top View"
                  className="w-full h-64 md:h-96 mx-auto object-cover"
                />
              </div>

              {/* Second image */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logos/keyboard3.jpeg"
                  alt="Mini Keyboard Side View"
                  className="w-full h-64 md:h-96 mx-auto object-cover"
                />
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

export default MiniKeyboard