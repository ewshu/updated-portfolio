import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"

function FourBarStudy() {
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
          <h1 className="text-4xl font-bold text-foreground text-center">Four Bar Mechanism Motion Study</h1>

          {/* Project Overview */}
          <div className="space-y-4 text-foreground">
            <p>
              The goal of this project was to assemble a Four-Bar Mechanism with provided parts and perform a motion study
              to observe how the parts interact with each other, obtaining quantitative data on metrics such as torque,
              power, and reaction forces.
            </p>

            {/* Mechanism Components */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Mechanism Components</h2>
              <p>
                The assembly consists of two bearings and three bars. The two fixed bearings can be replaced with one
                fixed bar without affecting the function of the mechanism, thus the name "four bar". The main parts are:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Bearing 1: Red part on the left (fixed)</li>
                <li>Bearing 2: Red part on the right (fixed)</li>
                <li>Crank: Blue part</li>
                <li>Extension: Green part</li>
                <li>Rocker: Magenta Part</li>
              </ul>

              {/* Image 1 */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/logos/4bar1.png"
                  alt="Four Bar Mechanism Assembly"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Motion Study */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">The Motion Study</h2>
              <p>
                Before conducting the motion study, we first verified that our assembled mechanism was properly
                constrained by analyzing its degrees of freedom. Since this was a mechanism, it required exactly
                one degree of freedom to function correctly. We discovered some redundant mates (connections) that
                needed to be edited and eliminated to achieve this.
              </p>
              <p>
                Once we confirmed proper constraint, we set the mechanism in its initial position and installed a
                motor at the junction between the crank and bearing one to enable rotation. The motor was configured
                to operate at 20 rpm for 6 seconds. We then initiated the analysis to observe the mechanism's movement.
              </p>
            </div>

            {/* Analysis */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Analysis</h2>
              <p>
                Motion studies enable collection of data across multiple performance metrics. While traditional hand
                calculations can be challenging due to complex physics equations, computer-aided analysis performs
                these calculations almost instantly.
              </p>
              <p>
                In our study, we tracked the movement of a single point—specifically, the midpoint of the extension—throughout
                the simulation. The resulting motion data was converted into graphical form for better visualization.
              </p>

              {/* Images 2 and 3 side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/logos/4bar2.webp"
                    alt="Motion Analysis Graph 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-slate-800">
                  <img
                    src="/logos/4bar3.webp"
                    alt="Motion Analysis Graph 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p>
                When compared to the time and angle of the crank, the instances of max torque could be determined.
              </p>

              {/* Images 4 and 5 side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/logos/4bar4.webp"
                    alt="Torque Analysis Graph 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg ">
                  <img
                    src="/logos/4bar5.webp"
                    alt="Torque Analysis Graph 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p>
                From this data, we observed that the maximum torque was approximately 20.4 N, occurring periodically
                when the crank was at its initial position (0 degrees). While not shown in this dataset,
                negative motor torques are also possible.
              </p>

              {/* Image 6 */}
              <div className="rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto">
                <img
                  src="/logos/4bar6.webp"
                  alt="Force Analysis Results"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Conclusion</h2>
              <p>
                According to the motion study analysis, the maximum vertical forces on bearings 1 and 2 are 0.35 N and
                0.17 N respectively. This information is valuable for determining if the assembly can withstand the
                forces generated by its motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourBarStudy