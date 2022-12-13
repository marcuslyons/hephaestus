
# Hephaestus

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Personal Design System Monorepo

The goal of this is to have a playground to implement and test design system workflows and automation, while speeding up personal project development.

## Tech Stack

This monorepo is divided into the following sections:

**Apps:** Forge

**Packages:** Components, Config, Tokens

The Forge is the Storybook documentation, and playground, of the design system.

The Components are built using the Tokens for shared values.

Config is the shared eslint, prettier, and typescript configs used across projects.

### Tech used

- pnpm
- Turborepo
- Svelte
- eslint
- typescript
- prettier
- style-dictionary
## Installation

Installation is handled via pnpm workspaces

```bash
  git clone https://github.com/marcuslyons/hephaestus.git
  cd hephaestus
  pnpm install
```
