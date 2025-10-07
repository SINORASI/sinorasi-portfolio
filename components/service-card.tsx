"use client"

import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceCard;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons] as Icons.LucideIcon;

  return (
    <Card className="bg-primary/90 hover:bg-primary transition-all duration-300 p-8 border-none">
      <div className="space-y-4">
        {/* Icon */}
        <div className="text-white">
          <Icon className="w-12 h-12" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white break-words">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/90 leading-relaxed break-normal">
          {service.description}
        </p>
      </div>
    </Card>
  );
}
