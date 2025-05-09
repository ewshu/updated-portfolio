import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function PathFinderRobot() {
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
            <h1 className="text-4xl font-bold text-black">Pathfinder Robot</h1>
            <p className="text-gray-600">MATLAB-Based Mobile Robot Navigation | Team Project</p>
          </header>

          {/* Project Overview */}
          <section className="space-y-5">
            <div className="space-y-4 text-gray-700">
              <p>
                My team's approach to a proposed challenge to model the waiter mobile robot in MATLAB. We developed an algorithm
                that enables a robot to navigate through a complex environment, avoiding obstacles and finding optimal paths to
                deliver items efficiently.
              </p>

              <p>
                This project combined principles of robotics, path planning algorithms, and simulation techniques to create
                a realistic model of robot navigation in service environments.
              </p>
            </div>
          </section>

          {/* Demo Video */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Simulation Demo</h2>

            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
              <video
                loop
                muted
                playsInline
                controls
                className="w-full h-auto"
              >
                <source src="/logos/pathfinder.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          {/* Final Report */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Final Report</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Our final report details the methodology, algorithm development, implementation challenges, and performance analysis
                of the pathfinder robot simulation. It includes technical specifications, mathematical models, and comparative analysis
                of different pathfinding approaches.
              </p>
            </div>

            {/* PDF Document */}
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
              <iframe
                src="/logos/pathfinder.pdf"
                className="w-full h-[600px]"
                title="Pathfinder Robot Final Report"
              />
            </div>
          </section>

          {/* MATLAB Code */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">MATLAB Implementation</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Below is the MATLAB code we developed for the pathfinder robot simulation. The implementation includes
                obstacle detection, path planning using A* algorithm, and motion control for the robot model.
              </p>
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

export default PathFinderRobot