# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Common Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build (for dev branch deployment)
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix linting issues and format with Prettier
- `npm run type-check` - Run TypeScript type checking

### Development Notes
- Uses Bun as the runtime (see bun-types in tsconfig.json)
- Path alias `@/*` maps to root directory
- Uses strict TypeScript configuration

## Architecture Overview

### Project Structure
This is a Next.js 15 portfolio website with App Router architecture:

```
app/
├── animations/          # Reusable animation components (Framer Motion)
├── components/
│   ├── background/      # Three.js/WebGL background components
│   ├── blobity/         # Custom cursor/blob effect system
│   ├── container/       # Layout containers
│   ├── overlay/         # Visual overlays (blur, grain, color)
│   ├── other/          # Utilities like PreLoader
│   ├── svg/            # SVG components
│   └── work/           # Project showcase components
├── sections/           # Main page sections (Hero, About, Work, etc.)
├── fonts/             # Custom font files and configurations
├── globals.css        # Global styles and Tailwind imports
├── layout.tsx         # Root layout with metadata
└── page.tsx          # Main home page
```

### Key Technologies & Patterns

**Animation System:**
- **Framer Motion** for React animations (page transitions, scroll-based animations)
- **GSAP** for complex timeline animations (especially in PreLoader)
- Custom animation components in `/animations/` for reusable text effects

**3D Graphics:**
- **@react-three/fiber** + **@react-three/drei** for Three.js integration
- **@react-three/rapier** for physics
- Background components use WebGL for interactive visuals

**Styling:**
- **Tailwind CSS** with custom color scheme (dark theme: `bg-dark: #0e1016`)
- Custom scrollbar styling
- Mobile-first responsive design

**Custom Cursor System:**
- `/components/blobity/` contains a sophisticated cursor interaction system
- Magnetic effects and focus-based animations
- Configured in main page component with specific selectors

### Build Configuration

**Next.js Config (`next.config.ts`):**
- Branch-based build output (`dev` branch uses different dist directory)
- Production optimizations (console removal, React prop removal)
- Remote image patterns for GitHub assets
- Source maps enabled in production

**TypeScript:**
- Strict mode enabled
- ESNext target with modern module resolution
- Custom path mapping for clean imports

### Environment-Specific Features
- **Development:** Full source maps, display names, console logs
- **Production:** Minified, optimized, console-free builds
- **Branch Builds:** Special `dev` branch deployment configuration

### Component Patterns
- Sections are self-contained with their own animations
- Animation components are highly reusable with prop-based customization
- Background components are separate for performance isolation
- Custom hooks for complex interactions (useBlobity)

### Deployment Notes
- Vercel Analytics and Speed Insights integrated
- Static export capability via `npm run export`
- Branch-specific builds support multiple deployment environments