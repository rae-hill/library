# Effect AI Documentation Reference

## Overview

The Effect repository is vendored at `./repos/effect/` as a read-only reference.
The `ai-docs/src/` directory contains curated AI-friendly documentation for using Effect.

When working with Effect APIs in this repository, prefer examples and patterns from the vendored `ai-docs` over generated guesses or web search results.

## Table of Contents — `repos/effect/ai-docs/src/`

### `01_effect/` — Core Effect

| Subdirectory | File | Topic |
| ------------ | ---- | ----- |
| `01_basics/` | `01_effect-gen.ts` | Effect.gen — generator-based effect composition |
| `01_basics/` | `02_effect-fn.ts` | Effect.fn — function-based effect definition |
| `01_basics/` | `10_creating-effects.ts` | Creating effects (succeed, fail, sync, promise, etc.) |
| `02_schema/` | `10_schema-basics.ts` | Schema basics — defining, encoding, decoding |
| `03_services/` | — | Dependency injection via services and layers |
| `04_errors/` | — | Typed error handling |
| `05_resources/` | — | Resource management (Scope, acquireRelease) |
| `06_running/` | — | Running effects (runPromise, runSync, etc.) |
| `07_pubsub/` | — | Pub/sub patterns (Queue, PubSub) |

### `03_stream/` — Streams
Streaming data processing with backpressure.

### `04_integration/` — Integration Patterns
Integrating Effect into existing applications.

### `05_batching/` — Batching & Caching
Request batching and caching with RequestResolver.

### `06_schedule/` — Scheduling
Retry and repeat schedules.

### `07_datetime/` — DateTime
Date and time utilities.

### `08_observability/` — Observability
Tracing, metrics, and logging.

### `09_testing/` — Testing
Testing effect-based code.

### `10_predicate/` — Predicates
Type-safe predicate utilities.

### `40_sql/` — SQL
Effect SQL database integration.

### `50_http-client/` — HTTP Client
Making HTTP requests.

### `51_http-server/` — HTTP Server
Building HTTP servers.

### `60_child-process/` — Child Process
Spawning and managing child processes.

### `70_cli/` — CLI
Building CLI applications.

### `71_ai/` — AI
AI/LLM integration utilities.

### `80_cluster/` — Cluster
Distributed computing with Effect Cluster.

## Key Guidance

- Always refer to `repos/effect/ai-docs/src/01_effect/02_schema/10_schema-basics.ts` for Schema usage
- Always refer to `repos/effect/ai-docs/src/01_effect/01_basics/` for core Effect patterns
- This project uses `effect@rc` (beta channel) — APIs may differ from stable releases
- Do NOT edit files under `./repos/`
- Do NOT import from `./repos/` — application code imports from the `effect` package dependency
