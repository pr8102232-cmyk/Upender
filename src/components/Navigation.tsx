import { Link, useLocation } from "react-router-dom";
import { AboutIcon, WorkIcon, ArchiveIcon, ProjectsIcon, SkillsIcon } from "./NavIcons";

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { href: "/about", label: "about", icon: AboutIcon },
    { href: "/work", label: "work", icon: WorkIcon },
    { href: "/skills", label: "skills", icon: SkillsIcon },
    { href: "/archive", label: "archive", icon: ArchiveIcon },
    { href: "/projects", label: "projects", icon: ProjectsIcon },
  ];

  // On homepage, don't show navigation - it will be in the hero section
  if (isHomePage) {
    return null;
  }

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        {/* Logo/Name */}
        <div className="flex-1 min-w-[200px]">
          <Link
            to="/"
            className="block blocky-text text-2xl md:text-3xl"
          >
            GUGULOTHU UPENDER
          </Link>
        </div>

        {/* Navigation Items with Icons */}
        <div className="flex flex-wrap items-start gap-4 md:gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || location.pathname === item.href + '/';

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex flex-col items-center gap-2 neon-link group ${isActive ? "opacity-100" : "opacity-80"
                  } ${item.href === "/work" ? "gap-4" : ""}`}
              >
                <div className={`transition-all ${isActive ? "scale-110" : "group-hover:scale-110"
                  }`}>
                  <Icon />
                </div>
                <span className="text-sm uppercase tracking-wider font-bold transition-all duration-300">{item.label}</span>
              </Link>
            );
          })}


        </div>
      </div>
    </nav>
  );
}


