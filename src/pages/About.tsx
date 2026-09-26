import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function About() {
  const githubUrl: string = ""
  const email: string = ""
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 text-center flex flex-col items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative group">
          <div className="absolute inset-0 rounded-full border-4 border-bright-purple glow-pulse-slow"></div>
          <img
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Gugulothu Upender"
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
          />
        </div>
        <h1 className="blocky-text text-4xl md:text-6xl mb-8">
          About
        </h1>
      </div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          I am <span className="font-bold text-bright-purple">Gugulothu Upender</span>. I specialize in designing, deploying, and supporting enterprise and hyperscale data center network infrastructure.
        </p>

        <p>
          My work is centered on rack and stack, structured fiber and copper cabling, Cisco Nexus/Catalyst switching, routing (BGP, OSPF), VLANs, TCP/IP, and data center operations. I bring hands-on experience installing, configuring, and troubleshooting servers, network equipment, and physical infrastructure while maintaining high availability and operational excellence.
        </p>

        <p>
          With deep expertise in network monitoring, incident response, hardware diagnostics, DCIM documentation, and preventive maintenance, I support robust physical and cloud-native network environments. My goal is to improve network reliability, optimize infrastructure performance, and deliver secure, scalable, mission-critical data center solutions.
        </p>

        {(githubUrl.trim() || email.trim()) && (
        <p className="mt-8">
          I’m always open to discussing new challenges and scalable solutions.
          {githubUrl.trim() && (
            <>
              {" "}Connect with me on{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-link font-bold"
              >
                GitHub
              </a>
            </>
          )}
          {githubUrl.trim() && email.trim() && " or reach out via "}
          {!githubUrl.trim() && email.trim() && " Reach out via "}
          {email.trim() && (
            <a
              href={``}
              className="neon-link font-bold"
            >
              email
            </a>
          )}
          .
        </p>
        )}
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6 border-b-2 border-bright-purple pb-2">Technical Foundations</h2>
          <div className="space-y-6">
            <div className="relative pl-4 border-l-2 border-bright-purple/30">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <span className="font-bold text-xl">Lawrence Technological University</span>
                <span className="text-sm font-bold opacity-60">Aug 2023 — May 2025</span>
              </div>
              <div className="italic text-bright-purple mb-2">Master of Science in Computer Science</div>
              <p className="text-base opacity-80">
                Focused on advanced computer science and networking concepts.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6 border-b-2 border-bright-purple pb-2">Recognition</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <span className="text-bright-purple font-bold">01.</span>
              <span>Cisco Certified Network Professional (CCNP) certification.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-bright-purple font-bold">02.</span>
              <span>AWS Certified Solutions Architect Associate.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-bright-purple font-bold">03.</span>
              <span>Proven track record of maintaining 99.99% network availability across critical enterprise deployments.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="blocky-text text-3xl md:text-4xl mb-6 border-b-2 border-bright-purple pb-2">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-bright-purple/20 bg-bright-purple/5 transition-all hover:bg-bright-purple/10">
              <h3 className="font-bold mb-1">Data Center Operations</h3>
              <p className="text-sm opacity-80">Expertise in rack and stack, hardware diagnostics, and preventive maintenance.</p>
            </div>
            <div className="p-4 border border-bright-purple/20 bg-bright-purple/5 transition-all hover:bg-bright-purple/10">
              <h3 className="font-bold mb-1">Network Infrastructure</h3>
              <p className="text-sm opacity-80">Structured fiber and copper cabling, patch panels, and rack elevations.</p>
            </div>
            <div className="p-4 border border-bright-purple/20 bg-bright-purple/5 transition-all hover:bg-bright-purple/10">
              <h3 className="font-bold mb-1">Routing & Switching</h3>
              <p className="text-sm opacity-80">Configuring Cisco Nexus/Catalyst, Juniper, and Arista switches with BGP/OSPF.</p>
            </div>
            <div className="p-4 border border-bright-purple/20 bg-bright-purple/5 transition-all hover:bg-bright-purple/10">
              <h3 className="font-bold mb-1">Cloud & Security Integration</h3>
              <p className="text-sm opacity-80">Extending on-prem network fabric into AWS with Direct Connect and Transit Gateway.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
