import { ExternalLink } from "lucide-react";

type Project = {
  title: string
  date: string
  excerpt: string
  link: string
}

const projects: Project[] = [
  {
    title: "LeetCode Look-Alike",
    date: "2024",
    excerpt: "A high-performance coding platform optimized for real-time challenge resolution. Engineered with a Spring Boot and Docker backend, the system delivers sub-2 second response times and a seamless user experience.",
    link: "",
  },
  {
    title: "Autozone Management System",
    date: "2024",
    excerpt: "An automated inventory and e-commerce ecosystem designed for scale. Leveraging ReactJS and AWS, the platform streamlines parts procurement and inventory tracking through a robust, cloud-native architecture.",
    link: "",
  },
  {
    title: "Scalable URL Shortener",
    date: "2024",
    excerpt: "A secure, high-concurrency URL management service featuring JWT-based authentication and unique ID generation. Built with Go and MongoDB to ensure rapid redirection and data integrity.",
    link: "",
  }];

export default function Projects() {
  if (projects.length === 0) return null
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-4">
        Projects
      </h1>
      <p className="text-lg uppercase tracking-wider opacity-60 mb-12">
        Scalable Systems & Full Stack Solutions
      </p>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="border-2 border-bright-purple p-6 hover:bg-bright-purple/10 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h2 className="blocky-text text-xl md:text-2xl group-hover:glow-pulse">
                {project.title}
              </h2>
              <span className="text-sm uppercase tracking-wider font-bold whitespace-nowrap opacity-80 text-bright-purple">
                {project.date}
              </span>
            </div>
            <p className="text-base leading-relaxed mb-6 opacity-90 max-w-3xl">
              {project.excerpt}
            </p>
            {project.link.trim() && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold"
            >
              View Repository <ExternalLink size={14} />
            </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/5">
        <h2 className="blocky-text text-2xl md:text-3xl mb-6">
          Philosophy: Design Meets Performance
        </h2>
        <div className="space-y-4 text-lg leading-relaxed max-w-3xl">
          <p>
            I believe that robust engineering is the foundation of exceptional user experience. My approach combines clean, scalable backend architecture with intuitive, responsive frontend design. 
          </p>
          <p>
            From migrating monolithic systems to IFM platforms to optimizing graph database retrievals, my focus is always on delivering high-impact solutions that solve real-world problems efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
