import { ExternalLink } from "lucide-react";

type Project = {
  title: string
  date: string
  excerpt: string
  link: string
}

const projects: Project[] = [
  {
    title: "Enterprise Multi-Site Network Redesign & Cloud Integration",
    date: "2025",
    excerpt: "Architected and implemented a scalable hybrid network infrastructure across on-premises and AWS cloud environments, supporting 10,000+ daily active connections through secure BGP/OSPF routing, AWS Transit Gateway, and Direct Connect integration, reducing hybrid cloud latency by 25%. Optimized enterprise network performance and availability by implementing automated failover, QoS, and route optimization strategies, resulting in a 35% improvement in application availability, faster end-user response times, and reduced peak-time network congestion. Enhanced network operations and observability using NetFlow, SNMP, and Splunk-based monitoring pipelines while automating network runbooks, reducing manual network change efforts by 50% and improving operational uptime and compliance reporting.",
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
        Enterprise Networking & Hybrid Cloud Solutions
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
          Philosophy: Reliability by Design
        </h2>
        <div className="space-y-4 text-lg leading-relaxed max-w-3xl">
          <p>
            I believe that a resilient network is the foundation of any modern enterprise. My approach focuses on building highly available, secure, and observable infrastructure that seamlessly bridges physical data centers with cloud environments.
          </p>
          <p>
            By combining disciplined change management with proactive automation and deep protocol knowledge, I ensure that mission-critical systems remain performant, scalable, and secure under any load.
          </p>
        </div>
      </div>
    </div>
  );
}
