import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"

function ArduinoProjects() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <nav className="border-b py-4 px-4">
        <div className="container mx-auto">
          <Link to="/" className="text-foreground hover:text-slate-400">← Back to Home</Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold text-foreground text-center">Arduino Side Quests</h1>

          {/* Mini Keyboard Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Custom Mini Keyboard</h2>

            <div className="space-y-4 text-foreground">
              <p>
                This personal project was inspired by a compact keyboard I came across on Amazon.
                The goal was to create a custom mini keyboard featuring my five most frequently used keys:
                Space, Enter, Escape, Shift, and Delete.
              </p>

              <p>
                The design concept was a single, sleek row of five keys. I engineered a stacked
                acrylic case to house the PCB and an Arduino microcontroller, ensuring compatibility
                with standard MX Cherry-style keyboard switches. This approach not only streamlined
                the overall form but also maintained durability and functionality.
              </p>
            </div>

            {/* GIF and Images Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left side - GIF */}
              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800 h-full">
                <img
                  src="/src/assets/logos/microkeyboard.gif"
                  alt="Mini Keyboard Demo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Stacked Images */}
              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
                  <img
                    src="/src/assets/logos/mk1.jpg"
                    alt="Mini Keyboard Construction"
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
                  <img
                    src="/src/assets/logos/mk2.jpeg"
                    alt="Mini Keyboard Final"
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* RFID Door Lock Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">RFID Door Locking Mechanism</h2>

            <div className="space-y-4 text-foreground">
              <p>
                Developed an automatic RFID door locking system for my room, integrating both
                hardware and software. The design replaces the interior half of a Schlage
                deadbolt assembly, utilizing the original mounting screws for a seamless fit.
              </p>
              <p>
                The system allows dynamic management of RFID access: new IDs can be added or
                removed from the Arduino's EEPROM using a designated master card.
              </p>
            </div>

            {/* Video and Image Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover h-80"
                >
                  <source src="/src/assets/logos/dlock.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
                <img
                  src="/src/assets/logos/dlock.png"
                  alt="RFID Door Lock"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Automatic Blind Control Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Automatic Blind Control</h2>

            <div className="space-y-4 text-foreground">
              <p>
                As a part of my ME 2900 Arduino project, I made a voice-controlled blind opener that connects with my Alexa.
                The components used are as follows: NEMA 17 Stepper Motor, Arduino Uno, ADA SM Driver, ESP8266 wifi module, and IR Sensor.
              </p>
            </div>

            {/* Full-width PDF */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800 mb-6">
                              <iframe
                src="/src/assets/logos/blinds.pdf"
                className="w-full h-[600px]"
                title="Blinds Project Presentation"
              />
            </div>

            {/* Full-width Video */}
            <div className="rounded-3xl overflow-hidden shadow-lg bg-slate-800">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover aspect-video"
              >
                <source src="/src/assets/logos/blinds.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ArduinoProjects