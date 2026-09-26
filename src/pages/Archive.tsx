type ArchiveItem = {
  title: string
  type: string
  year: string
  description: string
}

const archiveItems: ArchiveItem[] = [
  {
    title: "Data Center Network Engineer at Google",
    type: "Experience",
    year: "Jan 2026 — Present",
    description: "Designing and deploying enterprise LAN/WAN infrastructure supporting 10,000+ endpoints.",
  },
  {
    title: "Network Engineer at EdgeConnex",
    type: "Experience",
    year: "May 2024 — Dec 2025",
    description: "Supporting daily data center network operations, structured cabling, and device commissioning.",
  },
  {
    title: "M.S. in Computer Science, Lawrence Technological University",
    type: "Education",
    year: "Aug 2023 — May 2025",
    description: "Master of Science in Computer Science with a focus on advanced networking and computing.",
  },
  {
    title: "Network Engineer at Sify Technologies Limited",
    type: "Experience",
    year: "Aug 2021 — Jul 2023",
    description: "Built and maintained scalable network infrastructure supporting 8,000+ daily active users.",
  },
];

export default function Archive() {
  if (archiveItems.length === 0) return null
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-12">
        Timeline
      </h1>

      <div className="space-y-8">
        {archiveItems.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-bright-purple pl-6 py-4 hover:bg-bright-purple/5 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h2 className="blocky-text text-xl md:text-2xl group-hover:text-bright-purple transition-colors">
                {item.title}
              </h2>
              <div className="flex gap-4 text-sm uppercase tracking-wider font-bold whitespace-nowrap">
                <span className="opacity-60">{item.type}</span>
                <span className="text-bright-purple">{item.year}</span>
              </div>
            </div>
            <p className="text-base opacity-90 leading-relaxed max-w-2xl">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/5 text-bright-purple">
        <h2 className="blocky-text text-2xl md:text-3xl mb-6">
          Milestones
        </h2>
        <div className="space-y-6 text-lg">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple opacity-80 uppercase tracking-tighter">Current</span>
            <span>Data Center Network Engineer &middot; <span className="font-bold">Google</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple opacity-80 uppercase tracking-tighter">2024 — 2025</span>
            <span>Network Engineer &middot; <span className="font-bold">EdgeConnex</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple opacity-80 uppercase tracking-tighter">2023 — 2025</span>
            <span>M.S. in Computer Science &middot; <span className="font-bold">Lawrence Technological University</span></span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-bright-purple/20 pb-4 last:border-0 last:pb-0">
            <span className="font-bold min-w-[100px] text-bright-purple opacity-80 uppercase tracking-tighter">2021 — 2023</span>
            <span>Network Engineer &middot; <span className="font-bold">Sify Technologies Limited</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
