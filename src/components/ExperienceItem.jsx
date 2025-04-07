export default function ExperienceItem({ name, title, logo, link }) {
  return (
    <div className="flex items-start gap-4">
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden hover:opacity-80 transition-opacity flex items-center justify-center">
        <img src={logo} alt={name} className="w-full h-full object-cover" />
      </a>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground">{title}</p>
      </div>
    </div>
  )
}
