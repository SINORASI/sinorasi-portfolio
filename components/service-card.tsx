"use client";

import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceCard;
  isWide?: boolean;
}

export function ServiceCard({ service, isWide = false }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons] as Icons.LucideIcon;

  return (
    <Card className={`${isWide ? 'w-[720px]' : 'w-[600px]'} bg-gradient-to-br from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-500 p-6 sm:p-8 border-none hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 group h-72 flex flex-col flex-shrink-0`}>
      <div className="space-y-4 flex-1">
        {/* Icon */}
        <div className="text-white/95 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white break-words group-hover:text-white transition-colors duration-300">{service.title}</h3>

        {/* Description */}
        <p className="text-white/80 leading-relaxed break-normal text-sm sm:text-base">{service.description}</p>
      </div>
    </Card>
  );
}
