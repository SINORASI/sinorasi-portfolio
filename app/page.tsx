"use client"

import { TeamMemberCard, TeamMember } from "@/components/team-member-card";
import { ServiceCard, ServiceCard as ServiceCardType } from "@/components/service-card";
import { motion } from "framer-motion";

const services: ServiceCardType[] = [
  {
    icon: "Palette",
    title: "Creative Design",
    description: "Transform your vision into stunning visual experiences. We craft user-centered designs that captivate and convert across all platforms.",
  },
  {
    icon: "Code2",
    title: "Web Development",
    description: "Build robust and scalable web applications with cutting-edge technologies. From concept to deployment, we deliver excellence.",
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    description: "Craft compelling narratives that resonate with your audience. Our copywriting and content strategy drives engagement and results.",
  },
  {
    icon: "BarChart3",
    title: "Digital Strategy",
    description: "Data-driven insights that fuel growth. We analyze market trends and user behavior to optimize your digital presence.",
  },
  {
    icon: "Rocket",
    title: "Brand Innovation",
    description: "Launch your brand to new heights. We combine creative thinking with technical expertise to build memorable digital experiences.",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Moch Raiyan Al Fikri",
    role: "DevOps Engineer",
    description:
      "Specializes in automating infrastructure and deployment pipelines. Expert in CI/CD, containerization, Kubernetes, and cloud platforms to ensure seamless operations and reliability.",
    image: "/raiyan.webp",
    socials: [
      { icon: "Github", url: "https://github.com/mochraiyan", label: "GitHub" },
      { icon: "Instagram", url: "https://www.instagram.com/raiylakee?igsh=bjd5eTZkNjQ0aTc0", label: "Instagram" },
    ],
  },
  {
    name: "Muhammad Miftahul Khoironi",
    role: "Digital Business Analyst",
    description:
      "Analyzes digital business metrics and market trends to drive strategic decisions. Skilled in data analysis, business intelligence tools, and translating insights into actionable strategies.",
    image: "/roni.webp",
    socials: [
      { icon: "Instagram", url: "https://www.instagram.com/v_seto_v?igsh=bWt4YnY1OG9oNmts", label: "Instagram" },
    ],
  },
  {
    name: "Muhammad Rifqi Abdillah",
    role: "Copywriter",
    description: "Infrastructure enthusiast committed to automation and reliability.",
    image: "/rifqi.webp",
    socials: [
      { icon: "Github", url: "https://github.com/Refliqx", label: "GitHub" },
      { icon: "Instagram", url: "https://www.instagram.com/mr_abdillah011?igsh=d2Zianl5bjF4N3hk", label: "Instagram" },
    ],
  },
  {
    name: "Desy Indah Mutiara",
    role: "Copywriter",
    description:
      "Strategic thinker who bridges the gap between business and technology. Experienced in agile methodologies, roadmap planning, and stakeholder management.",
    image: "/desy.webp",
    socials: [
      { icon: "Github", url: "https://github.com/fiorelln", label: "GitHub" },
      { icon: "Instagram", url: "https://www.instagram.com/odess4_?igsh=c3VjMHZsNjVjaGRx", label: "Instagram" },
    ],
  },
  {
    name: "Muhamad Fajar Maulid",
    role: "UI/UX Designer",
    description:
      "Data-driven problem solver specializing in machine learning and predictive analytics. Proficient in Python, TensorFlow, and statistical modeling.",
    image: "/fajar.webp",
    socials: [
      { icon: "Github", url: "https://github.com/Jars44", label: "GitHub" },
      { icon: "Instagram", url: "https://www.instagram.com/itsme.jars?igsh=MWx6Znk1eGNoeG13eA==", label: "Instagram" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Title at Top */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-primary">SINORASI</span>
          </h1>
        </div>

        {/* Team Section */}
        <section className="space-y-8 sm:space-y-12">
          {/* Logos and Description */}
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Logos */}
            <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
              <motion.img 
                src="/sinorasi-logo-v2.webp" 
                alt="SINORASI Logo" 
                className="h-20 sm:h-28 lg:h-32 object-contain"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-white">×</span>
              <img 
                src="/logo-smk.webp" 
                alt="SMK Logo" 
                className="h-20 sm:h-28 lg:h-32 object-contain"
              />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              SINORASI <span className="text-white">×</span> SMKN2SGS
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Membangun masa depan platform website sekolah 
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* First Row - 3 cards (responsive) */}
            <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 w-full items-center">
              {teamMembers.slice(0, 3).map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
            
            {/* Second Row - 2 cards (responsive) */}
            <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 w-full items-center">
              {teamMembers.slice(3, 5).map((member, index) => (
                <TeamMemberCard key={index + 3} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground italic mb-6 sm:mb-8 px-4">
              Our team likes wearing <span className="font-semibold">many</span> hats. We're best at these, however.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
            <div className="md:col-span-2">
              <ServiceCard service={services[4]} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
