import { Linkedin, Github, Instagram, Mail } from "lucide-react";

type FooterLink = { href: string; label: string; icon: typeof Mail }

export default function Footer() {
  const email: string = "gupender099@gmail.com"
  const linkedInUrl: string = "https://www.linkedin.com/in/upender-gugulotu-jjhh2233"
  const githubUrl: string = ""
  const instagramUrl: string = ""
  const links: FooterLink[] = [
    email.trim() ? { href: ``, label: "email", icon: Mail } : null,
    linkedInUrl.trim() ? { href: linkedInUrl, label: "LinkedIn", icon: Linkedin } : null,
    githubUrl.trim() ? { href: githubUrl, label: "GitHub", icon: Github } : null,
    instagramUrl.trim() ? { href: instagramUrl, label: "Instagram", icon: Instagram } : null].filter((item): item is FooterLink => item !== null)

  return (
    <footer className="mt-16 pt-8 border-t-2 border-purple">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {links.length > 0 && (
          <div className="flex flex-wrap gap-6 items-center">
            {links.map((link) => {
              const Icon = link.icon
              const external = !link.href.startsWith("mailto:")
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="neon-link flex items-center gap-2 uppercase text-sm font-bold"
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              )
            })}
          </div>
        )}

        <div className="text-xs uppercase tracking-wider opacity-70 font-bold">
          Built by Gugulothu Upender <span className="opacity-50">(Data Center Network Engineer)</span>
        </div>
      </div>
    </footer>
  );
}
