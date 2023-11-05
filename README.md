<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Creavi Socket-io Client Nuxt 3
- Package name: @creavi-d-cms/socket-io-client
- Description: Socket-io client module for Nuxt 3
-->

# Creavi Socket-io Client Nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

CREAVI Socket-io Client Nuxt 3 This component allows you to connect a Nuxt 3 client quickly and easily in a CREAVI environment.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@creavi-d-cms/socket-io-client?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

## Quick Setup

1. Add `@creavi-d-cms/socket-io-client` dependency to your project

```bash
# Using pnpm
pnpm add -D @creavi-d-cms/socket-io-client

# Using yarn
yarn add --dev @creavi-d-cms/socket-io-client

# Using npm
npm install --save-dev @creavi-d-cms/socket-io-client
```

2. Add `@creavi-d-cms/socket-io-client` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@creavi-d-cms/socket-io-client"],
});
```

That's it! You can now use Creavi Socket-io in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@creavi-d-cms/socket-io-client/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@creavi-d-cms/socket-io-client
[npm-downloads-src]: https://img.shields.io/npm/dm/@creavi-d-cms/socket-io-client.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@creavi-d-cms/socket-io-client
[license-src]: https://img.shields.io/npm/l/@creavi-d-cms/socket-io-client.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@creavi-d-cms/socket-io-client
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
