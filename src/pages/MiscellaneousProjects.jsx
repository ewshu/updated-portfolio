import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function BrushlessMiniMotor() {
  return (
    <div className="min-h-screen bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)]">
      {/* Nav - Same as home page */}
      <header className="flex justify-center gap-3 md:gap-5 text-xs md:text-sm pt-4 md:pt-6">
        <NavLink label="About" href="/#about" />
        <NavLink label="Resume" href="/resume" />
        <NavLink label="Portfolio" href="/#projects" />
        <NavLink label="Photos" href="/photos" />
      </header>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          <header className="space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold text-black">Brushless Mini Motor</h1>
            <p className="text-sm md:text-base text-gray-600">First build from scratch</p>
          </header>

          {/* Brushless DC-powered Motor Section */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Brushless DC-powered Motor</h2>

            {/* Bill of Materials */}
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <h3 className="text-lg md:text-xl font-semibold text-black">Bill of Materials:</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>5mm diameter metal rod.</li>
                <li>M5 Die (for threading)</li>
                <li>4 x MR95ZZ bearings (9 x 5 x 3 mm)</li>
                <li>4 x M3 brass inserts</li>
                <li>4 x M3 screws</li>
                <li>0.5mm copper wire (enough length for 18 x 20 turns)</li>
                <li>Magnets (10 x 5 x 2 mm)</li>
              </ol>
            </div>

            {/* Design Section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-black">Design:</h3>
              
              {/* Space for two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/logos/shaft.jpg"
                    alt="Motor Shaft"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/logos/motorassembled.jpg"
                    alt="Motor Assembled"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Building the Rotor Section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-black">Building the Rotor:</h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  Alternate between North and South Poles on each of the magnet within the rotor. I used JB Weld epoxy to keep the magnets firm in place.
                </p>
                <p>
                  Ended up using too much epoxy for the first build and failed to remove excess and had to rebuild the rotor.
                </p>
              </div>
              
              {/* Two rotor images side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/logos/minirotor1.JPG"
                    alt="Mini Rotor 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/logos/minirotor.JPG"
                    alt="Mini Rotor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Building the Stator Section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-black">Building the Stator:</h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  All coils must be wound in the same direction at every third slot. I used a Y configuration for winding.
                </p>
                <p>
                  The three ends should be connected to each other and beginning to the ESC.
                </p>
              </div>
              
              {/* Stator images: main image centered, others below */}
              <div className="space-y-4 md:space-y-6">
                {/* Main stator image centered */}
                <div className="flex justify-center">
                  <div className="rounded-lg overflow-hidden max-w-md">
                    <img
                      src="/logos/ministator2.png"
                      alt="Mini Stator 2"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Two images below */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/logos/wiring.png"
                      alt="Wiring"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/logos/ministator.png"
                      alt="Mini Stator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Result Section */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Final Result</h2>
            
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                The motor did run but needed a slight push at the start which I believe to be as a result of the 3D print and/or the magnets having too much of a separation within the rotor.
              </p>
            </div>

            {/* Final Result Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/logos/finalmotor.png"
                alt="Final Motor"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Final Running Video */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-black">Final Running Video</h3>
              <div className="rounded-lg overflow-hidden">
                <video
                  src="/logos/motorrunning.mov"
                  controls
                  className="w-full h-auto"
                  poster="/logos/finalmotor.png"
                >
                  Your browser does not support the video tag.
                </video>
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

export default BrushlessMiniMotor
