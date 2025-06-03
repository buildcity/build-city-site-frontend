# 🏗️ BuildCity Frontend

A modern web3 community platform built with React, TypeScript, and cutting-edge web technologies. Visit us at [buildcity.xyz](https://buildcity.xyz).

BuildCity is a global community of Web3 builders, developers, and innovators creating spaces for collaboration, learning, and growth in cities around the world.

## 🚀 Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with strict mode enabled
- **Vite 5** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4** - Utility-first CSS framework with custom design system
- **React Router v6** - Client-side routing with lazy loading

### UI Components & Styling
- **Radix UI** - Headless, accessible UI primitives
- **shadcn/ui** - Beautiful, customizable component library
- **Lucide React** - Feather-inspired icon library
- **Class Variance Authority** - Type-safe component variants
- **tailwind-merge** - Intelligent Tailwind class merging
- **tailwindcss-animate** - Animation utilities

### Development Tools
- **ESLint 9** - Modern linting with TypeScript support
- **PostCSS** - CSS processing with Autoprefixer
- **pnpm** - Fast, disk space efficient package manager
- **Date-fns** - Modern date utility library

### Hosting & Deployment
- **Netlify** - Serverless deployment with automatic builds
- **SPA Routing** - Client-side routing with fallback redirects

## ⚡ Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** 8+ (recommended) or npm/yarn

### Installation & Development

```bash
# Clone the repository
git clone `https://github.com/buildcity/build-city-site-frontend.git`
cd build-city-site-frontend

# Install dependencies with pnpm (recommended)
pnpm install

# Start development server
pnpm dev

# Open browser to http://localhost:5173
```

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Building
pnpm build        # Build for production
pnpm preview      # Preview production build locally

# Code Quality
pnpm lint         # Run ESLint checks
```

## 📁 Project Structure

```text
build-city-site-frontend/
├── public/                          # Static assets
│   ├── _redirects                   # Netlify routing config
│   ├── buildcitylogo_assets/        # Brand logos and favicons
│   ├── media_assets/                # Images for media/blog content
│   ├── membership-assets/           # Membership tier visuals
│   ├── partner_assets/              # Partner logos
│   └── project_assets/              # Project showcase images
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # shadcn/ui components (30+ components)
│   │   ├── BlogCard.tsx             # Blog post display
│   │   ├── Card.tsx                 # Generic card wrapper
│   │   ├── CTAButton.tsx            # Call-to-action buttons
│   │   ├── ExpandableMediaCard.tsx  # Interactive media viewer
│   │   ├── Footer.tsx               # Site footer with social links
│   │   ├── Layout.tsx               # Main layout wrapper
│   │   ├── MatrixRain.tsx           # Animated background effect
│   │   ├── MediaCard.tsx            # Media content display
│   │   ├── membership-*.tsx         # Membership tier components
│   │   ├── Navbar.tsx               # Navigation header
│   │   ├── PageLayout.tsx           # Page layout primitives
│   │   └── ProjectCard.tsx          # Project showcase cards
│   ├── data/                        # Static content and configurations
│   │   ├── blogPosts.ts             # Blog content definitions
│   │   ├── media.ts                 # Media items (articles, spaces, videos)
│   │   ├── projects.ts              # Community project showcase
│   │   └── index.ts                 # Centralized data exports
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Mobile breakpoint detection
│   │   └── use-toast.ts             # Toast notification system
│   ├── lib/                         # Utility functions and configurations
│   │   ├── animations.ts            # Framer Motion & CSS animations
│   │   ├── constants.ts             # Design system constants
│   │   ├── interactions.ts          # Interactive element styles
│   │   ├── styles.ts                # Composite styling utilities
│   │   └── utils.ts                 # General utility functions
│   ├── pages/                       # Route components
│   │   ├── About.tsx                # Team and company info
│   │   ├── Blog.tsx                 # Blog posts from Medium
│   │   ├── Contact.tsx              # Contact information
│   │   ├── Events.tsx               # Luma calendar integration
│   │   ├── Home.tsx                 # Landing page
│   │   ├── Media.tsx                # Media content showcase
│   │   ├── Membership.tsx           # Membership tiers and pricing
│   │   ├── Partners.tsx             # Partner organizations
│   │   └── Projects.tsx             # Community projects showcase
│   ├── types/                       # TypeScript type definitions
│   │   └── index.ts                 # Shared interfaces and types
│   ├── App.tsx                      # Main app component with routing
│   ├── index.css                    # Global styles and CSS variables
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts               # Vite type declarations
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── pnpm-lock.yaml                  # pnpm lockfile
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TS config
├── tsconfig.node.json              # Node-specific TS config
├── vite.config.ts                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

## 🎨 Design System

### Color Palette
- **Background**: Black (#000000) with gray overlays
- **Cards**: Gray-800 and Gray-900 variants
- **Text**: White primary, Gray-300 secondary, Gray-400 muted
- **Accents**: CSS custom properties for theme consistency

### Typography
- **Font**: Roboto Mono (monospace) for technical aesthetic
- **Scales**: Responsive sizing from text-sm to text-6xl
- **Weights**: Normal, medium, semibold, bold

### Components
The project uses a comprehensive design system built on Radix UI primitives:

- **Layout**: PageLayout, Card, Grid systems
- **Navigation**: Navbar with dropdown menus
- **Interactive**: Buttons, Links, Hover effects
- **Data Display**: Cards, Badges, Avatars
- **Forms**: Inputs, Selects, Checkboxes (ready for future use)
- **Feedback**: Toasts, Alerts, Loading states
- **Overlays**: Modals, Drawers, Tooltips

## 🌐 Routes & Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero section and CTAs |
| `/about` | About | Team information and company mission |
| `/blog` | Blog | Medium blog integration |
| `/events` | Events | Luma calendar embedded events |
| `/partners` | Partners | Partner organizations showcase |
| `/contact` | Contact | Contact information page |
| `/projects` | Projects | Community-built projects showcase |
| `/media` | Media | Articles, Twitter Spaces, videos |
| `/membership` | Membership | Membership tiers and pricing |

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin with Fast Refresh
- Path aliases (`@/` → `src/`)
- Lucide React optimization exclusions

### Tailwind Configuration (`tailwind.config.js`)
- Custom color system with CSS variables
- Extended animations and keyframes
- shadcn/ui integration
- Dark mode support

### TypeScript Configuration
- Strict mode enabled
- Project references architecture
- Modern ES2020 target
- Path mapping support

### ESLint Configuration (`eslint.config.js`)
- Modern flat config format
- React Hooks rules
- React Refresh integration
- TypeScript support

## 📦 Key Dependencies

### Production Dependencies
```json
{
  "@radix-ui/react-slot": "^1.0.2",
  "class-variance-authority": "^0.7.1", 
  "clsx": "^2.1.1",
  "date-fns": "^3.3.1",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.3",
  "tailwind-merge": "^2.5.5"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "tailwindcss-animate": "^1.0.7",
  "typescript": "^5.5.3",
  "vite": "^5.4.2"
}
```

## 🚀 Deployment

### Netlify Configuration
- **Build Command**: `pnpm build`
- **Publish Directory**: `dist`
- **SPA Redirects**: `/*` → `/index.html` (200)

### Environment Setup
1. Connect repository to Netlify
2. Configure build settings
3. Add environment variables if needed
4. Enable branch deploys for development

### Custom Domain
- Production: [buildcity.xyz](https://buildcity.xyz)
- SSL/TLS automatically managed by Netlify

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React functional component patterns
- Prefer hooks over class components
- Use meaningful component and variable names
- Add proper TypeScript types for all props and functions

### Component Architecture
- Keep components small and focused
- Use composition over inheritance
- Extract reusable logic into custom hooks
- Maintain consistent prop interfaces

### State Management
- Use React's built-in state for component state
- Lift state up when needed for data sharing
- Consider context for deeply nested prop drilling

### Performance
- Use React.memo() for expensive components
- Lazy load route components
- Optimize images with proper sizing and formats
- Minimize bundle size with tree shaking

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

## 🔍 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use different port
pnpm dev --port 3000
```

**pnpm installation issues**
```bash
# Clear pnpm cache
pnpm store prune
# Delete node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Build errors**
```bash
# Type check without emitting
pnpm tsc --noEmit
# Clean build
rm -rf dist && pnpm build
```

**Styling issues**
- Check Tailwind class conflicts with browser dev tools
- Verify CSS custom properties are defined
- Ensure import order in index.css is correct

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Design References
- [Tailwind UI Components](https://tailwindui.com/)
- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow the development guidelines above**
4. **Test your changes thoroughly**
5. **Commit with clear messages**: `git commit -m 'Add amazing feature'`
6. **Push to your branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Workflow
- Ensure all linting passes: `pnpm lint`
- Test the build: `pnpm build`
- Verify functionality across different screen sizes
- Check accessibility with browser dev tools

---

**BuildCity** - Building the future of communities, one city at a time. 🏗️