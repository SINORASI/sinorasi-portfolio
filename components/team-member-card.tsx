"use client"

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
    <Card className="w-full max-w-[32rem] h-96 flex-shrink-0 bg-card/50 backdrop-blur border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300">
      <div className="flex flex-row gap-3 sm:gap-4 h-full">
        {/* Left: Image */}
        <div className="relative w-48 sm:w-64 h-full flex-shrink-0 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, 256px"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0 py-4 sm:py-6 pr-4 sm:pr-6">
          {/* Top: Name, Role and Description */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-foreground break-words">{member.name}</h2>
            <p className="text-sm sm:text-base text-primary font-medium break-words">{member.role}</p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-normal">
              {member.description}
            </p>
          </div>

          {/* Bottom: Social Media Icons */}
          <div className="mt-auto">
            <div className="flex gap-3">
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
                    className="transition-all duration-300"
                  >
                    <Icon
                      className={`w-6 h-6 transition-all duration-300 ${
                        hoveredIcon === index
                          ? "scale-110"
                          : "text-muted-foreground/40"
                      }`}
                      style={hoveredIcon === index ? { color: hoverColor } : undefined}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
