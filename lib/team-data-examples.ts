/**
 * Team Member Data
 *
 * This file contains the data structure and examples for team members.
 * You can use this as a reference when customizing your portfolio.
 */

import { TeamMember } from "@/components/team-member-card";

/**
 * Available Lucide Icon Names:
 * - Social: Github, Gitlab, Linkedin, Twitter, Facebook, Instagram, Youtube, Twitch
 * - Communication: Mail, Phone, MessageCircle, Send
 * - Web: Globe, Link, ExternalLink
 * - Other: Code, Coffee, Heart, Star, Award, Briefcase
 *
 * See full list at: https://lucide.dev/icons/
 */

/**
 * Example team member configurations
 */

export const exampleTeamMembers: TeamMember[] = [
  // Example 1: Full Stack Developer
  {
    name: "Muhammad Rifqi Abdillah",
    role: "System Administrator",
    description: "Passionate about creating seamless user experiences and scalable backend systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    socials: [
      { icon: "Github", url: "https://github.com/alexjohnson", label: "GitHub" },
      { icon: "Linkedin", url: "https://linkedin.com/in/alexjohnson", label: "LinkedIn" },
      { icon: "Mail", url: "mailto:alex@example.com", label: "Email" },
    ],
  },

  // Example 2: Designer with Portfolio
  {
    name: "Muhamad Fajar Maulid",
    role: "UI/UX Designer",
    description: "Creative designer focused on user-centered design principles.",
    image: "/team/sarah.jpg", // Using local image from /public/team/
    socials: [
      { icon: "Globe", url: "https://sarahchen.design", label: "Portfolio" },
      { icon: "Instagram", url: "https://instagram.com/sarahdesigns", label: "Instagram" },
      { icon: "Linkedin", url: "https://linkedin.com/in/sarahchen", label: "LinkedIn" },
    ],
  },

  // Example 3: Minimal contact info
  {
    name: "Desy Indah Mutiara",
    role: "Copywriter",
    description: "Infrastructure enthusiast committed to automation and reliability.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    socials: [
      { icon: "Github", url: "https://github.com/mwilliams", label: "GitHub" },
      { icon: "Mail", url: "mailto:marcus@example.com", label: "Email" },
    ],
  },
];

/**
 * Tips for Images:
 *
 * 1. External Images (Unsplash, etc.):
 *    - Already configured for images.unsplash.com
 *    - Add other domains in next.config.ts under images.remotePatterns
 *
 * 2. Local Images:
 *    - Place images in /public/team/ folder
 *    - Reference as: "/team/filename.jpg"
 *    - Recommended size: 400x400px or larger (square aspect ratio)
 *
 * 3. Placeholder Images:
 *    - https://images.unsplash.com/photo-[ID]?w=400&h=400&fit=crop
 *    - https://ui-avatars.com/api/?name=First+Last&size=400
 */

/**
 * Color Customization:
 *
 * Edit app/globals.css to change the color scheme:
 *
 * Orange (default):    #f97316
 * Blue alternative:    #3b82f6
 * Green alternative:   #10b981
 * Purple alternative:  #8b5cf6
 * Red alternative:     #ef4444
 */
