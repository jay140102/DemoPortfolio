# Monorepo Structure

This is a monorepo for the Primq application, containing both mobile and web apps with shared packages.

## Structure

```
primq-native-app/
├── apps/
│   ├── mobile/          # Expo Bare → Android/iOS
│   └── web/             # Next.js (placeholder)
│
├── packages/
│   ├── ui/              # Shared components
│   ├── hooks/           # Shared hooks
│   ├── api/             # API clients
│   ├── config/          # ESLint/TSConfig/Theme
│   └── types/           # Shared TypeScript types
│
└── docker/
    ├── android.Dockerfile
    ├── web.Dockerfile
    └── ci-scripts/
```

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
# Install pnpm globally if you haven't
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Development

```bash
# Run mobile app
pnpm mobile

# Run web app (when implemented)
pnpm web

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## Package Manager

This monorepo supports both npm and pnpm workspaces:
- **Primary**: pnpm (faster, stricter)
- **Fallback**: npm workspaces (for compatibility)

## Build Tool

Uses **Turborepo** for:
- Build caching
- Task orchestration
- Parallel execution

## Apps

### Mobile (`apps/mobile`)
- Expo bare workflow
- React Native
- Android native code
- Package: `@primq/mobile`

### Web (`apps/web`)
- Next.js (placeholder)
- Package: `@primq/web`

## Shared Packages

All packages are scoped under `@primq/*`:

- `@primq/ui` - Shared React/React Native components
- `@primq/hooks` - Shared React hooks
- `@primq/api` - API clients and utilities
- `@primq/config` - Shared configurations (ESLint, TypeScript, Theme)
- `@primq/types` - Shared TypeScript types

## Docker

Placeholder Dockerfiles for production builds:
- `docker/android.Dockerfile` - Android production builds
- `docker/web.Dockerfile` - Web production builds
- `docker/ci-scripts/` - CI/CD automation scripts

## Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean all build artifacts
- `pnpm mobile` - Run mobile app
- `pnpm web` - Run web app

## License

Private
