import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const links = [
    "Home",
    "Academic",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <nav className="bg-neutral-950/90 sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl cursor-pointer font-extrabold bitfont-400
                     hover:text-transparent
                     bg-clip-text
                     bg-linear-to-r
                   from-red-200
                    to-blue-400
                    text-blue-300
                       hover:scale-105
                       transition-all duration-300"
        >
          @theBotNinja
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 overflow-hidden p-2">
          {links.map((item) => (
            <a
              key={item}
             
              href={`#${item.toLowerCase()}`}
              className="relative
                text-gray-300
                font-medium
                transition-all
                duration-100
                hover:scale-105
                hover:text-indigo-200
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-indigo-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
            transition-all
            duration-300
            hover:text-indigo-400
            
          "
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-neutral-900/95
          backdrop-blur-xl
          transition-all
          duration-500
          ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {links.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="
              block
              px-6
              py-4
              text-gray-300
              border-b
              border-white/5

              hover:bg-cyan-500/10
              hover:text-cyan-400
              hover:pl-8

              transition-all
              duration-300
            "
            style={{
              transitionDelay: `${index * 70}ms`,
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
