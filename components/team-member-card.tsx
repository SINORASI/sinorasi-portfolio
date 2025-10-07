                  "use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { useState } from "react";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    icon: string;
    url: string;
    label: string;
  }[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const getHoverColor = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return "#ffffff"; // GitHub white
      case "instagram":
        return "#E1306C"; // Instagram pink
      default:
        return "#3b82f6"; // Default blue
    }
  };

  return (
    <Card className="w-[480px] aspect-[5/4] flex-shrink-0 bg-card/80 backdrop-blur-sm border-border/30 overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group">
      <div className="flex flex-col lg:flex-row gap-2 h-full">
        {/* Image */}
        <div className="relative w-full lg:aspect-[9/16] lg:w-auto h-64 lg:h-full lg:flex-shrink-0 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 224px, 256px"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-card/20" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 flex-1 min-w-0 p-4 lg:py-6 lg:pr-6">
          {/* Name, Role and Description */}
          <div className="space-y-2 flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-foreground break-words group-hover:text-primary transition-colors duration-300">{member.name}</h2>
            <p className="text-sm text-primary font-semibold break-words">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed break-normal">
              {member.description}
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            {member.socials.map((social, index) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as Icons.LucideIcon;
              const hoverColor = getHoverColor(social.icon);
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 flex-shrink-0"
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredIcon === index ? "scale-110" : "text-muted-foreground"
                    }`}
                    style={hoveredIcon === index ? { color: hoverColor } : undefined}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
