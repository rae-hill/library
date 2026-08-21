# @rae-hill/* Library Monorepo

A TypeScript monorepo for reusable libraries published to NPM under the `@rae-hill` namespace.

## Packages

| Package | NPM Name | Description |
| ------- | -------- | ----------- |
| `packages/eff-state` | `@rae-hill/eff-state` | State-machine framework built on Effect |
| `packages/eff-react-state` | `@rae-hill/eff-react-state` | React bindings for eff-state |

## Development

```sh
# Install dependencies
yarn install

# Build all packages
yarn build

# Typecheck
yarn typecheck

# Lint
yarn lint

# Run tests
yarn test
```

## Committing

This repo uses [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) for commit messages:

```sh
gitmoji -c
```

## Release

Releases are managed via [semantic-release](https://semantic-release.org/) in GitHub Actions. Pushing to `main` triggers verification and automatic release.
