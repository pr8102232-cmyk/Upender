
type Job = {
  name: string
  role: string
  url?: string
  description: string
  year: string
  status: string
}

const projects: Job[] = [
  {
    name: "Google",
    role: "Data Center Network Engineer",
    url: "",
    description: "Designed and deployed enterprise LAN/WAN infrastructure supporting 10,000+ endpoints across multiple sites, improving network reliability by 28% through redundant topology and optimized routing policies (BGP/OSPF). Architected a high-availability firewall environment using Cisco ASA and Palo Alto, implementing Zero Trust segmentation that reduced lateral threat exposure by 40%. Built and managed SD-WAN deployment across 15+ branch offices using Cisco Meraki, achieving a 35% reduction in WAN circuit costs.",
    year: "Jan 2026 — Present",
    status: "Active",
  },
  {
    name: "EdgeConnex",
    role: "Network Engineer",
    description: "Supported daily data center network operations and infrastructure maintenance, ensuring high availability of servers, switches, and network connectivity. Performed rack and stack, equipment installation, structured cabling, patching, and network device commissioning. Installed, configured, and troubleshot Cisco and Juniper switches, including VLANs, trunking, LACP, and high-speed connectivity.",
    year: "May 2024 — Dec 2025",
    status: "Completed",
    url: "",
  },
  {
    name: "Sify Technologies Limited",
    role: "Network Engineer",
    description: "Built and maintained scalable network infrastructure supporting 8,000+ daily active users across data centers and branch offices using Cisco Catalyst and Juniper EX-series switches. Designed secure VLAN segmentation and inter-VLAN routing policies for fintech environments processing over $1M in daily transactions, achieving 45% reduction in network-related query latency.",
    year: "Aug 2021 — Jul 2023",
    status: "Completed",
    url: "",
  },
];

export default function Work() {
  if (projects.length === 0) return null
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="blocky-text neon-text-lg text-4xl md:text-6xl mb-12">
        Work Experience
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-2 border-bright-purple p-6 hover:bg-bright-purple/10 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="blocky-text text-2xl md:text-3xl mb-1 group-hover:glow-pulse">
                  {project.name}
                </h2>
                <div className="text-sm font-bold opacity-80 mb-3 uppercase tracking-tighter text-bright-purple">{project.role}</div>
                <p className="text-lg mb-4 opacity-90 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wider font-bold">
                  <span>{project.year}</span>
                  <span className="opacity-60">•</span>
                  <span className={project.status === "Active" ? "text-green-400" : "opacity-60"}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button inline-flex items-center gap-2"
                  >
                    VISIT
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 border-2 border-bright-purple bg-bright-purple/10">
        <h2 className="blocky-text text-2xl md:text-3xl mb-4 text-center">
          Key Impact Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="blocky-text text-4xl mb-2">28%</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">Network Reliability Improvement</div>
          </div>
          <div>
            <div className="blocky-text text-4xl mb-2">40%</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">Lateral Threat Reduction</div>
          </div>
          <div>
            <div className="blocky-text text-4xl mb-2">99.99%</div>
            <div className="text-sm uppercase tracking-wider opacity-80 font-bold">Network Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
}
