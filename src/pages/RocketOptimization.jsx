import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

function RocketOptimization() {
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
            <h1 className="text-4xl font-bold text-black">Rocket Landing Trajectory Optimization</h1>
            <p className="text-gray-600">Physics-based predictive models for SpaceX Starship landing</p>
          </header>

          {/* Project Overview */}
          <section className="space-y-5">
            <div className="space-y-4 text-gray-700">
              <p>
                During Starship SN15's scrubbed launch window, I developed a 2D simulation of its landing maneuver. After optimizing the flight dynamics model, I recreated the vehicle's signature "belly flop" to vertical landing sequence.
              </p>
              <p>
                Compared to actual SpaceX footage, the simulation showed remarkable accuracy - despite being developed purely from first principles without reference to empirical data.
              </p>
            </div>
          </section>

          {/* Understanding Optimal Trajectories */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Understanding Optimal Trajectories</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In trajectory optimization, "optimal" refers to finding the best path to achieve a goal. Consider walking to your fridge - while countless paths exist, some are better than others.
              </p>

              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
                <img
                  src="/logos/rocketrajectory.webp"
                  alt="Rocket trajectory optimization diagram"
                  className="w-full h-auto"
                />
              </div>

              <p>
                To determine the best path, we define a "cost function" (similar to machine learning). A simple cost function might measure path length. However, this can lead to impractical solutions - a shortest-path algorithm would ignore obstacles like a pit on the floor.
              </p>
              <p>
                A more sophisticated approach uses "effort" as the cost function. In this model, each step on safe ground might cost 1 unit, while traversing dangerous areas costs significantly more (e.g., 1000 units). This better reflects real-world optimization problems, like Starship's landing trajectory, where we balance multiple factors including fuel usage, structural loads, and safety margins.
              </p>
              <p>
                The final piece is adding constraints - rules defining valid solutions. These ensure our optimization stays within physical and practical limits while minimizing our chosen cost function.
              </p>
            </div>
          </section>

          {/* Code Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Trajectory Optimization Code</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                While waiting for Starship SN15's launch (which was ultimately scrubbed), I developed a physics-based optimization model to simulate its distinctive landing maneuver. Here's the key code that made it work:
              </p>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <pre className="text-sm text-gray-100 font-mono overflow-x-auto p-4">
                  <code>{`# Physical parameters for Starship
self.m = 100000  # kg (total mass)
self.length = 50  # m
self.max_thrust = 2210000  # N (single Raptor)
self.max_gimbal = np.deg2rad(20)`}</code>
                </pre>
              </div>

              <p>The optimization minimized a cost function balancing engine effort and stability:</p>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <pre className="text-sm text-gray-100 font-mono overflow-x-auto p-4">
                  <code>{`cost = 0
for i in range(self.N - 1):
    cost += U[0, i] ** 2  # Minimize thrust
    cost += 100 * U[1, i] ** 2  # Minimize gimbal angle
    cost += 200 * X[5, i] ** 2  # Minimize angular velocity`}</code>
                </pre>
              </div>

              <p>
                What proved particularly remarkable was comparing the simulation output against actual SpaceX landing footage—the trajectories aligned with surprising accuracy, despite the model being developed purely from first principles without reference to empirical flight data.
              </p>
            </div>
          </section>

          {/* Video Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Animated Trajectory</h2>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/logos/starship_landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

export default RocketOptimization