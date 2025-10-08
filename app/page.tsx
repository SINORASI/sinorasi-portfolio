"use client";

import { TeamMemberCard, TeamMember } from "@/components/team-member-card";
import { ServiceCard, ServiceCard as ServiceCardType } from "@/components/service-card";
import { motion } from "framer-motion";

const services: ServiceCardType[] = [
  {
    icon: "Palette",
    title: "Desain Kreatif",
    description:
      "Transformasikan visi Anda menjadi pengalaman visual yang menakjubkan. Kami membuat desain berpusat pada pengguna yang memikat dan mengkonversi di semua platform.",
  },
  {
    icon: "Code2",
    title: "Pengembangan Web",
    description:
      "Bangun aplikasi web yang kuat dan skalabel dengan teknologi mutakhir. Dari konsep hingga deployment, kami memberikan keunggulan.",
  },
  {
    icon: "PenTool",
    title: "Pembuatan Konten",
    description:
      "Buat narasi yang menarik dan resonan dengan audiens Anda. Strategi copywriting dan konten kami mendorong engagement dan hasil.",
  },
  {
    icon: "BarChart3",
    title: "Strategi Digital",
    description:
      "Wawasan berbasis data yang mendorong pertumbuhan. Kami menganalisis tren pasar dan perilaku pengguna untuk mengoptimalkan kehadiran digital Anda.",
  },
  {
    icon: "Rocket",
    title: "Inovasi Brand",
    description:
      "Luncurkan brand Anda ke ketinggian baru. Kami menggabungkan pemikiran kreatif dengan keahlian teknis untuk membangun pengalaman digital yang memorable.",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Moch Raiyan Al Fikri",
    role: "DevOps Engineer",
    description:
      "Spesialis dalam mengotomatisasi infrastruktur dan pipeline deployment. Ahli dalam CI/CD, containerization, dan Kubernetes.",
    image: "/raiyan.webp",
    socials: [
      { icon: "Github", url: "https://github.com/mochraiyan", label: "GitHub" },
      { icon: "Instagram", url: "https://www.instagram.com/raiylakee?igsh=bjd5eTZkNjQ0aTc0", label: "Instagram" },
    ],
  },
  {
    name: "Moch Miftahul Khoironi",
    role: "Digital Business Analyst",
    description:
      "Menganalisis metrik bisnis digital dan tren pasar untuk mendorong keputusan strategis. Mahir dalam analisis data dan tools business intelligence.",
    image: "/roni.webp",
    socials: [
      { icon: "Instagram", url: "https://www.instagram.com/v_seto_v?igsh=bWt4YnY1OG9oNmts", label: "Instagram" },
    ],
  },
  {
    name: "Muhammad Rifqi Abdillah",
    role: "System Administrator",
    description:
      "Membuat narasi dan konten yang menarik yang melibatkan audiens dan mendorong hasil. Ahli dalam storytelling, brand messaging, dan penulisan kreatif.",
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
      "Ahli kata yang mentransformasi ide menjadi pesan yang powerful. Spesialis dalam strategi konten, brand storytelling, dan membuat copy yang resonan dengan target audiens.",
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
      "Desainer kreatif yang passionate dalam membuat pengalaman pengguna yang intuitif dan indah. Ahli dalam user research dan prototyping.",
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
      <div className="w-full max-w-screen-2xl mx-auto space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            <span className="text-primary">SINORASI</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kelompok inovator berbakat dari SMKN2SGS yang membangun masa depan website sekolah
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.section
          className="space-y-12 sm:space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Logos and Title */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-12 sm:gap-16 flex-wrap">
              <motion.img
                src="/sinorasi-logo-v2.webp"
                alt="SINORASI Logo"
                className="h-24 sm:h-32 lg:h-40 object-contain"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-white">×</span>
              <img src="/logo-smk.webp" alt="SMK Logo" className="h-24 sm:h-32 lg:h-40 object-contain" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              SINORASI <span className="text-white">×</span> SMKN2SGS
            </h2>
          </motion.div>

          {/* Team Members Layout */}
          <motion.div
            className="flex flex-col gap-6 sm:gap-8 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Desktop: First row - 3 cards */}
            <div className="hidden xl:flex flex-row gap-6 sm:gap-8 justify-center">
              {teamMembers.slice(0, 3).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {/* Desktop: Second row - 2 cards centered */}
            <div className="hidden xl:flex flex-row gap-6 sm:gap-8 justify-center">
              {teamMembers.slice(3, 5).map((member, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {/* Tablet: First row - 2 cards */}
            <div className="hidden md:flex xl:hidden flex-row gap-6 sm:gap-8 justify-center">
              {teamMembers.slice(0, 2).map((member, index) => (
                <motion.div
                  key={`tablet-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {/* Tablet: Second row - 2 cards */}
            <div className="hidden md:flex xl:hidden flex-row gap-6 sm:gap-8 justify-center">
              {teamMembers.slice(2, 4).map((member, index) => (
                <motion.div
                  key={`tablet-${index + 2}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {/* Tablet: Third row - 1 card centered */}
            <div className="hidden md:flex xl:hidden flex-row gap-6 sm:gap-8 justify-center">
              {teamMembers.slice(4, 5).map((member, index) => (
                <motion.div
                  key={`tablet-${index + 4}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {/* Mobile: All cards in single column */}
            <div className="flex md:hidden flex-col gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="space-y-12 sm:space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Keahlian Kami</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menggabungkan berbagai keterampilan dan perspektif untuk memberikan solusi digital yang komprehensif
            </p>
          </div>

          {/* Services Layout */}
          <motion.div
            className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Desktop/Tablet: First row - 2 cards */}
            <div className="hidden md:flex flex-row gap-6 sm:gap-8 justify-center">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            {/* Desktop/Tablet: Second row - 2 cards */}
            <div className="hidden md:flex flex-row gap-6 sm:gap-8 justify-center">
              {services.slice(2, 4).map((service, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            {/* Desktop/Tablet: Third row - 1 card centered (wider) */}
            <div className="hidden md:flex flex-row gap-6 sm:gap-8 justify-center">
              {services.slice(4, 5).map((service, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} isWide={true} />
                </motion.div>
              ))}
            </div>

            {/* Mobile: All cards in single column */}
            <div className="flex md:hidden flex-col gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={`mobile-service-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 py-8 border-t border-border/30">
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <img src="/sinorasi-logo-v2.webp" alt="SINORASI Logo" className="h-8 object-contain" />
                <span className="text-muted-foreground">×</span>
                <img src="/logo-smk.webp" alt="SMK Logo" className="h-8 object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 SINORASI × SMKN2SGS. Membangun masa depan website sekolah.
              </p>
              <p className="text-xs text-muted-foreground/70">Dibuat dengan passion oleh tim SINORASI</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
