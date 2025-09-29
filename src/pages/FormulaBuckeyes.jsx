import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function FormulaBuckeyes() {
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
            <h1 className="text-2xl md:text-4xl font-bold text-black">Formula Buckeyes FSAE</h1>
            <p className="text-sm md:text-base text-gray-600">Suspension Design | 2022-2024</p>
          </header>

          {/* Overview Section */}
          <section className="space-y-4 md:space-y-5">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Have been on the suspension team of Formula Buckeyes FSAE for 2.5 years.Helped secure
                3rd place overall at FSAE Michigan 2023, our highest finish since 2001, followed by a 1st place overall in 2024.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-black mt-4 md:mt-6">My Work</h3>
              <ul className="list-disc list-inside space-y-2 md:space-y-3 ml-0 text-gray-700">
                <p>Machined uprights, mounts, and suspension hard points using mill and lathe operations.
                Designed and implemented adjustable anti-roll bar systems for both front and rear suspensions</p>
              </ul>
            </div>
          </section>

          

          {/* Anti-Roll Bar Section */}
          <section className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-black">Anti-Roll Bar Design and Manufacture</h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                I designed adjustable anti-roll bar (ARB) systems for both front and rear suspensions to fine-tune
                the vehicle's handling characteristics and lateral load transfer distribution.
              </p>

              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 ml-2 md:ml-4 text-gray-700">
                <li>Front and rear ARBs feature multiple adjustment points to modify lateral load transfer distribution</li>
                <li>Chassis design was analyzed to ensure torsional stiffness did not compromise ARB effectiveness</li>
                <li>Three front inboard mounting positions for additional tuning capability for load transfer and anti-dive characteristics</li>
              </ul>
            </div>

            {/* Two Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/arb1.png"
                  alt="Front Anti-Roll Bar"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/arb2.png"
                  alt="Rear Anti-Roll Bar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* PDF Embed */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="/logos/arbdesignfinal.pdf"
                className="w-full h-[300px] md:h-[500px]"
                title="Anti-Roll Bar Design Document"
              />
            </div>
          </section>

          {/* Competition Photos */}
          <section className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Some images from the competition:
              </p>
            </div>

            {/* Grid of Competition Photos - 2x3 layout */}
            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb7.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb2.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb3.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb6.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb10.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/logos/fb9.jpg"
                    alt="FSAE Michigan Competition"
                    className="w-full h-auto object-cover"
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

export default FormulaBuckeyes