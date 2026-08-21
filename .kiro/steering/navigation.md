# Repository Navigation

## Monorepo Structure

```
./library/
├── packages/
│   ├── eff-state/          — @rae-hill/eff-state-man (state-machine framework on Effect)
│   └── eff-react-state/    — @rae-hill/eff-react-state (React bindings)
├── repos/
│   └── effect/             — vendored Effect monorepo (read-only reference)
├── .github/workflows/      — CI/CD (semantic-release)
├── .kiro/steering/         — AI steering documents
├── eslint.config.mjs       — shared ESLint config
├── dprint.json             — dprint formatter config
├── tsconfig.base.json      — shared TypeScript config
├── tsconfig.build.json     — project references for build
└── package.json            — root workspace config (yarn workspaces)
```

## Vendored Repositories

| Directory | Source | Purpose |
| --------- | ------ | ------- |
| `repos/effect/` | https://github.com/Effect-TS/effect.git | Effect runtime, platform, ai-docs |

- Prefer examples from vendored source over generated guesses
- Do NOT edit files under `./repos/`
- Do NOT import from `./repos/`

### Updating a Vendored Subtree

```sh
git subtree pull \
  --prefix=repos/effect \
  https://github.com/Effect-TS/effect.git \
  main \
  --squash
```

### Adding a New Vendored Subtree

```sh
git subtree add \
  --prefix=repos/<name> \
  <git-url> \
  <branch> \
  --squash
```

## Package Manager

- Yarn 4 (Berry) with `nodeLinker: node-modules`
- `corepack enable` to activate the correct yarn version

## Formatting & Linting

- **Formatter**: dprint (see `dprint.json`)
- **Linter**: ESLint with `@effect/eslint-plugin` dprint integration (see `eslint.config.mjs`)
- **Style**: no semicolons, double quotes, trailing commas only on multiline

## Committing

- Uses `gitmoji-cli` for interactive emoji commits: `gitmoji -c`
- Emoji format: `:code:` (e.g. `:sparkles:`)

## Releasing

- `semantic-release` in GitHub Actions on push to `main`
- Trusted publishing (OIDC) for npm provenance
- See `.releaserc.json` for plugin configuration
