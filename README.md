# Nest + React + gRPC Project Template Generator

A template generator for creating monorepo projects with NestJS, React, and gRPC.

## Quick Start

Run the project generator:

```bash
npm run create
# or
node create-project.mjs
```

The interactive CLI will guide you through:
- Project name and package scope
- Database configuration (PostgreSQL)
- Testing setup (Vitest, Playwright)
- Storybook for UI components
- Docker configuration
- Git initialization
- Husky for git hooks

## What Gets Created

The generator creates a complete Turborepo monorepo with:

- **Apps**
  - `apps/api` - NestJS backend with gRPC support
  - `apps/web` - React frontend with Vite

- **Packages**
  - `packages/ui` - Shared React components
  - `packages/protos` - gRPC protocol definitions
  - `packages/eslint-config` - Shared ESLint configuration
  - `packages/typescript-config` - Shared TypeScript configurations
  - `packages/vitest-config` - Shared Vitest configuration

## Features

- ✅ **Monorepo** - Turborepo for efficient builds
- ✅ **TypeScript** - Full type safety
- ✅ **Testing** - Vitest for unit tests, Playwright for E2E
- ✅ **Linting** - ESLint with Prettier
- ✅ **Git Hooks** - Husky with lint-staged
- ✅ **Docker** - Development and production images
- ✅ **Database** - PostgreSQL with migrations (optional)
- ✅ **Storybook** - Component documentation (optional)

## Repository Structure

```
.
├── package.json          # Template generator package
├── create-project.mjs   # Main generator script
├── template/             # Template files (used by generator)
└── README.md            # This file
```

## Usage

1. Clone this repository
2. Run `npm run create`
3. Follow the interactive prompts
4. Start coding in your new project!

## License

[Your License Here]
