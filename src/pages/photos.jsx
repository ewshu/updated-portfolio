import { NavLink } from "../App"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-white"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

function Photos() {
  return (
    <div className="bg-[hsl(0,0%,10%)] text-[hsl(0,0%,90%)] min-h-screen">
      {/* Top Nav */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-6 text-sm">
        <NavLink label="about" href="/" />
        <NavLink label="resume" href="/resume" />
        <NavLink label="portfolio" href="/#projects" />
        <NavLink label="photos" href="/photos" />
      </header>

      {/* Page Body */}
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <p className="text-muted-foreground text-base mb-8">
          I love to shoot film (35mm) on my Minolta SRT & Nikon N8008. Here are some of my faves.
        </p>

        {/* Responsive Photo Grid */}
{/* Responsive Photo Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          <img src="/photos/1.jpg" alt="1" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/3.jpg" alt="3" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/6.jpg" alt="6" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/8.jpg" alt="8" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/9.jpg" alt="9" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/12.jpg" alt="12" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/13.jpg" alt="13" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/18.jpg" alt="18" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/25.jpg" alt="25" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/27.jpg" alt="27" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/28.jpg" alt="28" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/29.jpg" alt="29" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/30.jpg" alt="30" className="w-full rounded-md" loading="lazy" />
          <img src="/photos/45.jpg" alt="45" className="w-full rounded-md" loading="lazy" />
        </div>


        {/* Social Links Footer */}
        <footer className="flex justify-center gap-6 pt-12">
          <SocialLink href="https://github.com/ewshu" icon={Github} />
          <SocialLink href="https://linkedin.com/in/eshwarpamula" icon={Linkedin} />
          <SocialLink href="https://twitter.com/ewshwar" icon={Twitter} />
          <SocialLink href="https://instagram.com/eshwar.25" icon={Instagram} />
        </footer>
      </main>
    </div>
  )
}

export default Photos