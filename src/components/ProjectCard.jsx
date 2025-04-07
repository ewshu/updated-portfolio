import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ProjectCard({ title, description, link }) {
  const isExternal = link.startsWith("http")
  const Wrapper = isExternal ? "a" : Link
  const props = isExternal
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { to: link }

  return (
    <div className="space-y-1">
      <Wrapper {...props} className="group inline-flex items-center">
        <h3 className="text-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-lg">
          {title}
        </h3>
        {isExternal && (
          <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
        )}
      </Wrapper>
      <p className="text-muted-foreground px-2">{description}</p>
    </div>
  )
}
