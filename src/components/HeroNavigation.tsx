import { Link } from "react-router-dom";
import { AboutIcon, WorkIcon, ArchiveIcon, ProjectsIcon, SkillsIcon } from "./NavIcons";

export default function HeroNavigation() {

  const navItems = [
    { href: "/about", label: "about", icon: AboutIcon },
    { href: "/work", label: "work", icon: WorkIcon },
    { href: "/skills", label: "skills", icon: SkillsIcon },
    { href: "/archive", label: "archive", icon: ArchiveIcon },
    { href: "/projects", label: "projects", icon: ProjectsIcon },
  ];

  return (
    <div className="relative py-8 md:py-16">
      {/* Nav icons scattered around the name */}
      <div className="relative">
        {/* About icon - top left */}
        <div 
          className="absolute -top-4 md:-top-8 left-[5%] md:left-[10%]" 
          style={{ zIndex: 10 }}
        >
          <Link
            to={navItems[0].href}
            className="flex flex-col items-center gap-3 neon-link no-underline group opacity-80 hover:opacity-100 transition-all"
          >
            <div className="transition-all group-hover:scale-110" style={{ transform: 'scale(1.5)' }}>
              <AboutIcon />
            </div>
            <span className="text-[14px] md:text-[16px] uppercase tracking-wider font-bold">
              {navItems[0].label}
            </span>
          </Link>
        </div>

        {/* Skills icon - top center-left */}
        <div 
          className="absolute -top-12 md:-top-16 left-[30%] md:left-[35%]" 
          style={{ zIndex: 10 }}
        >
          <Link
            to={navItems[2].href}
            className="flex flex-col items-center gap-3 neon-link no-underline group opacity-80 hover:opacity-100 transition-all"
          >
            <div className="transition-all group-hover:scale-110" style={{ transform: 'scale(1.5)' }}>
              <SkillsIcon />
            </div>
            <span className="text-[14px] md:text-[16px] uppercase tracking-wider font-bold">
              {navItems[2].label}
            </span>
          </Link>
        </div>

        {/* Archive icon - top center-right */}
        <div 
          className="absolute -top-8 md:-top-12 right-[25%] md:right-[30%]" 
          style={{ zIndex: 10 }}
        >
          <Link
            to={navItems[3].href}
            className="flex flex-col items-center gap-3 neon-link no-underline group opacity-80 hover:opacity-100 transition-all"
          >
            <div className="transition-all group-hover:scale-110" style={{ transform: 'scale(1.5)' }}>
              <ArchiveIcon />
            </div>
            <span className="text-[14px] md:text-[16px] uppercase tracking-wider font-bold">
              {navItems[3].label}
            </span>
          </Link>
        </div>

        {/* Projects icon - top right */}
        <div 
          className="absolute -top-2 md:-top-6 right-[2%] md:right-[8%]" 
          style={{ zIndex: 10, transform: 'rotate(8deg)' }}
        >
          <Link
            to={navItems[4].href}
            className="flex flex-col items-center gap-3 neon-link no-underline group opacity-80 hover:opacity-100 transition-all"
          >
            <div className="transition-all group-hover:scale-110" style={{ transform: 'scale(1.5)' }}>
              <ProjectsIcon />
            </div>
            <span className="text-[14px] md:text-[16px] uppercase tracking-wider font-bold">
              {navItems[4].label}
            </span>
          </Link>
        </div>

        {/* Name */}
        <div className="text-center pt-16 md:pt-24 relative" style={{ zIndex: 1 }}>
          <h1 className="blocky-text text-4xl md:text-6xl lg:text-8xl mb-6 glow-pulse whitespace-nowrap uppercase">
            Gugulothu Upender
          </h1>
        </div>

        {/* Work icon + Taglines row */}
        <div className="relative mt-4">
          {/* Work icon - left side */}
          <div 
            className="absolute top-0 left-[8%] md:left-[15%]" 
            style={{ zIndex: 10 }}
          >
            <Link
              to={navItems[1].href}
              className="flex flex-col items-center gap-3 neon-link no-underline group opacity-80 hover:opacity-100 transition-all"
            >
              <div className="transition-all group-hover:scale-110" style={{ transform: 'scale(1.5)' }}>
                <WorkIcon />
              </div>
              <span className="text-[14px] md:text-[16px] uppercase tracking-wider font-bold">
                {navItems[1].label}
              </span>
            </Link>
          </div>

          {/* Taglines */}
          <div className="text-center mt-16 md:mt-24">
            <p className="text-xl md:text-2xl uppercase tracking-[0.2em] font-bold mb-3 text-bright-purple">
              Data Center Network Engineer
            </p>
            <p className="text-lg md:text-xl uppercase tracking-wide opacity-90 font-bold max-w-3xl mx-auto leading-relaxed">
              Designing, deploying, and supporting enterprise and hyperscale data center network infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
