import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { NavLink } from "../App"

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-black"
    >
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
    </a>
  )
}

function Photos() {
  return (
    <div className="bg-[hsl(45,30%,94%)] text-[hsl(0,0%,20%)] min-h-screen">
      {/* Fixed Top Nav Bar */}
      <header className="fixed top-0 left-0 right-0 bg-[hsl(45,30%,94%)] z-50 border-b border-gray-100">
        <nav className="w-full py-4 px-2 sm:py-5 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center max-w-3xl mx-auto">
          <a href="/" className="main-title text-xl sm:text-2xl md:text-3xl flex-shrink-0 hover:opacity-80 transition mb-2 sm:mb-0" style={{ fontFamily: "__Instrument_Serif_127ae0, __Instrument_Serif_Fallback_127ae0" }}>Eshwar Pamula</a>
          <div className="flex w-full sm:flex-1 sm:justify-end items-center gap-4 sm:gap-8 ml-0 sm:ml-10">
            <NavLink label="Resume" href="/resume" />
            <NavLink label="Portfolio" href="/#projects" />
            <NavLink label="Photos" href="/photos" />
          </div>
        </nav>
      </header>

      {/* Page Body */}
      <main className="container mx-auto max-w-3xl px-2 sm:px-4 pt-24 pb-4 md:pb-6">
        <p className="text-sm md:text-base mb-6 md:mb-8">
          I love to shoot film (35mm) on my Minolta SRT & Nikon N8008. Here are some of my faves.
        </p>

        {/* Responsive Photo Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 md:gap-5 space-y-3 md:space-y-5">
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

        {/* Footer with Social Icons right-aligned */}
        <footer className="max-w-3xl mx-auto px-2 sm:px-4 pt-2 md:pt-3 flex flex-col sm:flex-row items-center sm:justify-between mt-4 gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © 2025 Eshwar Pamula. All rights reserved.
          </div>
          <div className="flex gap-3 sm:gap-4 ml-0 sm:ml-4">
            <SocialLink href="https://github.com/ewshu" icon={Github} />
            <SocialLink href="https://linkedin.com/in/eshwarpamula" icon={Linkedin} />
            <SocialLink href="https://twitter.com/ewshu" icon={Twitter} />
            <SocialLink href="https://instagram.com/eshwar.25" icon={Instagram} />
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Photos