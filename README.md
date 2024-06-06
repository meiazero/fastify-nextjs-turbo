# Turborepo starter

## Using this example

Run the following command:

```sh
pnpm dlx create-turbo@latest -e https://github.com/meiazero/fastify-nextjs-turbo
```

## What's inside?

This Turborepo includes the following packages, apps and configuration:

### Apps, Packages and Configuration

- `api`: a [Fastify](https://fastify.dev/) backend application;
- `web`: another [Next.js](https://nextjs.org/) frontend application;
- `@repo/shadcn-ui`: a stub React component shared by `web` application;
- `@repo/tailwind-config`: a [Tailwind](https://tailwindcss.com/) configuration file;
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`);
- `@repo/tsconfig`: `tsconfig.json`s used throughout the monorepo.


Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
