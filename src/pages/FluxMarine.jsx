import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function FluxMarine() {
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
            <h1 className="text-2xl md:text-4xl font-bold text-black">Flux Marine</h1>
            <p className="text-sm md:text-base text-gray-600">Powertrain Engineering | Summer 2025</p>
          </header>

          {/* Overview Section */}
          <section className="space-y-4 md:space-y-5">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                <em>Note: Due to NDA restrictions, I cannot disclose all technical details or proprietary information from my work at Flux.</em>
              </p>


            </div>
          </section>

          {/* Shrink-Fit Assembly Jig Section */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Shrink-Fit Assembly Jig</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                I designed and built a custom arbor press system for stator core shrink-fitting operations.
              </p>
            </div>

            {/* 3 Jig Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/jigisometric.png"
                  alt="Jig Isometric View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/jigback.png"
                  alt="Jig Back View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/guiderail.png"
                  alt="Jig Guide Rail Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Completed Assembly Section */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Completed Assembly</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                The final assembly demonstrates the successful implementation of the shrink-fit process. The completed jig shows the precision alignment and secure fitting achieved through the custom tooling system.
              </p>
            </div>

            {/* Two Assembly Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/shrinkfitcomplete.JPG"
                  alt="Shrink Fit Complete - Stage 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/shrinkfitcomplete2.JPG"
                  alt="Shrink Fit Complete - Stage 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Custom Segmented Stator Core Assembly Clamp Section */}
          {/* 
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Segmented Stator Core Clamping System</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                I created a specialized clamping system to hold segmented stator core pieces securely during assembly.
              </p>
              
              <p>
                The solution combines 3D-printed positioning fixtures with metal rings that sit on the heated motor housing for accurate placement at such a high temperature.
              </p>
              
              <p>
                We were able to ensure consistent alignment and prevent segment movement during the assembly process.
              </p>

              <p>
                <strong>Images of the assembly process and tooling setup shown below.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center h-48 md:h-64">
                <div className="text-center p-4">
                  <div className="text-gray-600 text-sm md:text-base font-medium">🔒 Image Locked</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">NDA Restrictions</div>
                  <div className="text-gray-400 text-xs mt-2">Clamp Assembly</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center h-48 md:h-64">
                <div className="text-center p-4">
                  <div className="text-gray-600 text-sm md:text-base font-medium">🔒 Image Locked</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">NDA Restrictions</div>
                  <div className="text-gray-400 text-xs mt-2">Clamp Front View</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center h-48 md:h-64">
                <div className="text-center p-4">
                  <div className="text-gray-600 text-sm md:text-base font-medium">🔒 Image Locked</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1">NDA Restrictions</div>
                  <div className="text-gray-400 text-xs mt-2">Clamp Down View</div>
                </div>
              </div>
            </div>
          </section>
          */}

          {/* Electric Motor Dynamometer Testing Section */}
          {/* 
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Dynamometer Testing</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Ran comprehensive validation tests on both prototype and existing electric outboard motors using an in-house built dynamometer.
              </p>
              
              <p>
                I focused on collecting data for thermal performance, efficiency mapping, and durability assessment to validate design parameters and help future motor development.
              </p>

              <p>
                <strong>Testing data and setup configurations available upon request within NDA limitations.</strong>
              </p>
            </div>

            <div className="rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center h-64 md:h-80">
              <div className="text-center p-4">
                <div className="text-gray-600 text-sm md:text-base font-medium">🔒 Image Locked</div>
                <div className="text-gray-500 text-xs md:text-sm mt-1">NDA Restrictions</div>
                <div className="text-gray-400 text-xs mt-2">Dynamometer Testing Setup</div>
              </div>
            </div>
          </section>
          */}



          {/* Pictures from the Water */}
          <section className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                <strong>Pictures from the Water</strong>
              </p>
            </div>

            {/* Boat Images Layout: 1&2 original size, 3&4 stacked to match height */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 items-start">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logos/boat1.jpg"
                  alt="Boat 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/logos/boat2.jpg"
                  alt="Boat 2"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-2 md:space-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/boat3.jpg"
                    alt="Boat 3"
                    className="w-full h-36 md:h-44 object-cover object-center"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/boat4.jpg"
                    alt="Boat 4"
                    className="w-full h-36 md:h-44 object-cover object-center"
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

export default FluxMarine 