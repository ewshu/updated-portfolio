import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center hover:underline">
      {children}
      <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}

export default function Research() {
  return (
    <section id="research" className="space-y-6">
      <h2 className="text-2xl font-bold">Research</h2>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <ExternalLink href="https://mae.osu.edu/mmidl">
                <h3 className="text-lg font-semibold">Multi-functional Materials and Intelligent Design Lab</h3>
              </ExternalLink>
              <p className="text-sm text-muted-foreground">Undergraduate Researcher</p>
            </div>
            <span className="text-sm text-muted-foreground">May 2024 - Present</span>
          </div>
          <p>Developing topology optimization algorithms for mechanical structure design.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <ExternalLink href="https://mae.osu.edu/gearlab">
                <h3 className="text-lg font-semibold">Gear and Power Transmission Laboratory</h3>
              </ExternalLink>
              <p className="text-sm text-muted-foreground">Undergraduate Research Assistant</p>
            </div>
            <span className="text-sm text-muted-foreground">April 2023 - May 2024</span>
          </div>
          <p>Analyzing polymer (Torlon) gear properties for commercial applications.</p>
        </CardContent>
      </Card>
    </section>
  )
}
