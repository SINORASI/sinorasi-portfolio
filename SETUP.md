# Team Portfolio - Setup Summary

## ✅ What's Been Implemented

### 1. **Theme & Styling**
- ✅ Dark mode only (forced, no toggle)
- ✅ Orange color scheme (#f97316)
- ✅ Roboto font family
- ✅ Custom Tailwind CSS theme with orange accents

### 2. **Tech Stack**
- ✅ Next.js 15 with App Router
- ✅ React 19
- ✅ TypeScript
- ✅ Tailwind CSS 4
- ✅ shadcn/ui components (Card)
- ✅ Lucide React icons
- ✅ next-themes for theme management

### 3. **Portfolio Page**
- ✅ Single page application
- ✅ 5 team member cards
- ✅ Responsive design (mobile & desktop)
- ✅ Hero section with title

### 4. **Team Member Card Layout**
```
┌────────────────────────────────┐
│  ┌──────┐  Name               │
│  │      │  Role               │
│  │Image │                     │
│  │      │  Description        │
│  │      │  Description        │
│  └──────┘                     │
│           [Social Icons]       │
└────────────────────────────────┘
```

- **Left**: Profile image (300px square on desktop)
- **Right Top**: Name (3xl bold) + Role (lg primary color)
- **Right Bottom**: Description + Social media icons

### 5. **Social Media Icons**
- ✅ Dynamic color system
- ✅ Default state: Grayed out (text-muted-foreground/40)
- ✅ Hover state: Orange color (text-primary) with scale effect (110%)
- ✅ Smooth transitions (duration-300)
- ✅ Available icons: Github, Linkedin, Twitter, Mail, Globe, Instagram, Facebook, Youtube, etc.

### 6. **Features**
- ✅ Backdrop blur on cards
- ✅ Hover effects on cards (border glow)
- ✅ External image support (Unsplash)
- ✅ Accessible social links (aria-labels, target="_blank")

## 📝 How to Customize

### Change Team Members

Edit `app/page.tsx`:

```typescript
const teamMembers: TeamMember[] = [
  {
    name: "Your Name",
    role: "Your Role",
    description: "Your bio...",
    image: "https://your-image-url.com/photo.jpg",
    socials: [
      { icon: "Github", url: "https://github.com/username", label: "GitHub" },
      { icon: "Linkedin", url: "https://linkedin.com/in/username", label: "LinkedIn" },
      // Add more...
    ],
  },
];
```

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #f97316; /* Your primary color */
  --ring: #f97316; /* Match with primary */
}
```

### Use Local Images

1. Add images to `/public/team/` folder
2. Reference in teamMembers: `image: "/team/person1.jpg"`

## 🚀 Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.4",
    "lucide-react": "0.545.0",
    "next-themes": "0.4.6",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "tailwind-merge": "3.3.1"
  }
}
```

## 🎨 Color Palette

- **Background**: #0a0a0a (very dark gray)
- **Card Background**: #1a1a1a (dark gray)
- **Primary (Orange)**: #f97316
- **Foreground**: #ededed (light gray)
- **Muted**: #27272a / #a1a1aa

## 📐 Component Structure

```
app/
├── layout.tsx          # Root layout with Roboto font & ThemeProvider
├── page.tsx            # Main portfolio page with team data
└── globals.css         # Theme variables and global styles

components/
├── theme-provider.tsx  # Theme provider wrapper
├── team-member-card.tsx # Team member card component
└── ui/
    └── card.tsx        # shadcn/ui Card component

lib/
└── utils.ts            # Utility functions (cn helper)
```

## 🌐 View Your Portfolio

The development server is running at:
- **Local**: http://localhost:3000
- **Network**: http://10.25.7.70:3000

Open your browser and visit the local URL to see your portfolio!
