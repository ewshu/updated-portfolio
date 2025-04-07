import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"

function RocketOptimization() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <nav className="border-b py-4 px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-foreground hover:text-slate-400">← Back to Home</Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground text-center">Rocket Landing Trajectory Optimization</h1>

            {/* Project Overview */}
            <div className="space-y-6 text-foreground">
              <p>
                During Starship SN15's scrubbed launch window, I developed a 2D simulation of its landing maneuver. After optimizing the flight dynamics model, I recreated the vehicle's signature "belly flop" to a vertical landing sequence.
              </p>
              <p>
                Compared to actual SpaceX footage, the simulation showed remarkable accuracy - despite being developed purely from first principles without reference to empirical data.
              </p>
            </div>

            {/* Understanding Optimal Trajectories */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Understanding Optimal Trajectories</h2>
              <p className="text-foreground">
                In trajectory optimization, "optimal" refers to finding the best path to achieve a goal. Consider walking to your fridge - while countless paths exist, some are better than others.
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="src/assets/logos/rocketrajectory.webp"
                  alt="Rocket trajectory optimization diagram"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-foreground">
                To determine the best path, we define a "cost function" (similar to machine learning). A simple cost function might measure path length. However, this can lead to impractical solutions - a shortest-path algorithm would ignore obstacles like a pit on the floor.
              </p>
              <p className="text-foreground">
                A more sophisticated approach uses "effort" as the cost function. In this model, each step on safe ground might cost 1 unit, while traversing dangerous areas costs significantly more (e.g., 1000 units). This better reflects real-world optimization problems, like Starship's landing trajectory, where we balance multiple factors including fuel usage, structural loads, and safety margins.
              </p>
              <p className="text-foreground">
                The final piece is adding constraints - rules defining valid solutions. These ensure our optimization stays within physical and practical limits while minimizing our chosen cost function.
              </p>
            </div>

            {/* Code Section */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Trajectory Optimization Code</h2>
              <p className="text-foreground">
                While waiting for Starship SN15's launch (which was ultimately scrubbed), I developed a physics-based optimization model to simulate its distinctive landing maneuver. Here's the key code that made it work:
              </p>

              <div className="bg-slate-900 rounded-lg p-6">
                <pre className="text-sm text-slate-100 font-mono overflow-x-auto p-4">
                  <code>{`# Physical parameters for Starship
self.m = 100000  # kg (total mass)
self.length = 50  # m
self.max_thrust = 2210000  # N (single Raptor)
self.max_gimbal = np.deg2rad(20)`}</code>
                </pre>
              </div>

              <p className="text-foreground">The optimization minimized a cost function balancing engine effort and stability:</p>

              <div className="bg-slate-900 rounded-lg p-6">
                <pre className="text-sm text-slate-100 font-mono overflow-x-auto p-4">
                  <code>{`cost = 0
for i in range(self.N - 1):
    cost += U[0, i] ** 2  # Minimize thrust
    cost += 100 * U[1, i] ** 2  # Minimize gimbal angle
    cost += 200 * X[5, i] ** 2  # Minimize angular velocity`}</code>
                </pre>
              </div>

              <p className="text-foreground">
                What proved particularly remarkable was comparing the simulation output against actual SpaceX landing footage—the trajectories aligned with surprising accuracy, despite the model being developed purely from first principles without reference to empirical flight data.
              </p>
            </div>

            {/* Video Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Animated Trajectory</h2>
              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="src/assets/logos/starship_landing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RocketOptimization