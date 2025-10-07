# SINORASI Team Portfolio

A modern, dark-themed portfolio showcasing the SINORASI team from SMKN2SGS - passionate innovators building the future of school websites with expertise in DevOps, design, business analysis, and content creation.

## Features

- 🎨 **Dark Theme**: Modern dark mode with orange accents
- 🔤 **Roboto Font**: Clean, modern typography
- 🎯 **Responsive Design**: Optimized for all device sizes
- ✨ **Smooth Animations**: Framer Motion entrance animations and hover effects
- 🧩 **Shadcn UI**: Built with shadcn/ui components
- 🎭 **Lucide Icons**: Beautiful React icons
- 👥 **Team Showcase**: Interactive team member cards with social links
- 🏢 **Service Portfolio**: Professional service offerings display

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Lucide React Icons
- Bun (package manager)

## Getting Started

First, install dependencies:

```bash
bun install
```

Then run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Customizing Team Members

Edit the `teamMembers` array in `app/page.tsx`:

```typescript
const teamMembers: TeamMember[] = [
  {
    name: "Your Name",
    role: "Your Role",
    description: "Your description here...",
    image: "https://your-image-url.com/image.jpg", // or use a local image in /public
    socials: [
      { icon: Github, url: "https://github.com/yourusername", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
      // Add more social links as needed
    ],
  },
  // Add more team members...
];
```

### Available Social Icons

Import from `lucide-react`:
- `Github`, `Linkedin`, `Twitter`, `Mail`, `Globe`
- `Instagram`, `Facebook`, `Youtube`, and many more...

## Customizing Colors

The orange theme is defined in `app/globals.css`. To change the primary color, modify:

```css
:root {
  --primary: #f97316; /* Current orange color */
  --ring: #f97316; /* Match with primary */
}
```

Alternative color options:
- Blue: `#3b82f6`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Red: `#ef4444`

## Card Layout

Each team member card features:
- **Left**: Profile image
- **Top Right**: Name and role
- **Bottom**: Description and social media icons

Social media icons have a subtle hover effect:

- Default: Grayed out, blending with the background
- Hover: Transition to orange color with scale effect

## Build and Deploy

```bash
# Build for production
bun run build

# Start production server
bun run start
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
