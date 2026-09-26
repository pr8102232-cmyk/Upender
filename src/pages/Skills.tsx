type SkillCategory = { category: string; items: string[] }

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Data Center Operations",
      items: ["Rack & Stack", "Server Installation", "Server Deployment", "Server Decommissioning", "Hardware Break/Fix", "Smart Hands Support", "Remote Hands Support", "Preventive Maintenance", "Asset Management", "Inventory Management", "Capacity Planning", "Incident Response"],
    },
    {
      category: "Infrastructure",
      items: ["Structured Cabling", "Fiber Optic Cabling", "Copper Cabling", "Patch Panels", "Cross Connects", "Cable Dressing", "Cable Labeling", "Cable Management", "Rack Elevations"],
    },
    {
      category: "Networking Protocols & Technologies",
      items: ["TCP/IP", "BGP", "OSPF", "EIGRP", "MPLS", "VLANs", "STP", "HSRP/VRRP", "QoS", "IPv4/IPv6", "DNS", "DHCP", "NAT/PAT"],
    },
    {
      category: "Security & Firewalls",
      items: ["Cisco ASA", "Palo Alto", "Fortinet FortiGate", "IPSec/SSL VPN", "ACLs", "IDS/IPS", "Zero Trust Architecture", "Network Segmentation"],
    },
    {
      category: "Hardware & Platforms",
      items: ["Cisco Catalyst/Nexus", "Juniper EX/MX Series", "Arista", "F5 Load Balancers", "Meraki SD-WAN", "HPE/Aruba"],
    },
    {
      category: "Cloud Networking",
      items: ["AWS (VPC, Direct Connect, Transit Gateway, Route 53, CloudFront, ELB)", "Azure VNet", "SD-WAN", "Cloud-native Firewalls"],
    },
    {
      category: "Monitoring & Automation",
      items: ["SolarWinds", "PRTG", "Nagios", "Wireshark", "Ansible", "Python (Netmiko/NAPALM)", "Terraform", "Splunk", "NetFlow/sFlow", "SNMP"],
    }
  ];

  const concepts: string[] = [
    "High Availability Design", "Zero Trust Segmentation", "Hybrid Cloud Integration",
    "Structured Cabling Standards", "Hardware Diagnostics", "ITIL Change Management",
    "Network Observability", "Incident Response", "Capacity Planning"
  ];

  if (skillCategories.length === 0 && concepts.length === 0) return null

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="blocky-text text-4xl md:text-6xl mb-12">
        Technical Expertise
      </h1>

      <div className="grid gap-8 md:grid-cols-1">
        {skillCategories.map((skill, index) => (
          <div key={index} className="border-2 border-bright-purple p-6 hover:bg-bright-purple/5 transition-colors">
            <h2 className="blocky-text text-2xl md:text-3xl mb-6 text-bright-purple">
              {skill.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {(skill.items ?? []).map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-bright-purple/10 border border-bright-purple text-sm font-bold uppercase tracking-wider hover:bg-bright-purple hover:text-black transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border-2 border-bright-purple bg-bright-purple/10">
        <h2 className="blocky-text text-2xl md:text-3xl mb-8 text-center text-bright-purple">
          Core Competencies
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="px-4 py-3 border-2 border-bright-purple font-bold uppercase text-sm tracking-wider hover:bg-bright-purple hover:text-black transition-colors cursor-default"
            >
              {concept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
