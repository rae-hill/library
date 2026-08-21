import { readFile } from "node:fs/promises"
import { createRequire } from "node:module"
import path from "node:path"

const require = createRequire(import.meta.url)
const templateDir = path.join(
  path.dirname(require.resolve("semantic-release-gitmoji")),
  "lib/assets/templates"
)

const template = readFile(path.join(templateDir, "default-template.hbs"))
const commitTemplate = readFile(path.join(templateDir, "commit-template.hbs"))

/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
  branches: ["main"],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [
            ":bug:",
            ":ambulance:",
            ":lock:",
            ":adhesive_bandage:",
            ":goal_net:",
            ":pencil2:",
            ":zap:",
            ":lipstick:",
            ":alien:"
          ]
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime(format = "UTC:yyyy-mm-dd") {
              return new Intl.DateTimeFormat("en-CA", {
                timeZone: "UTC",
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              }).format(new Date())
            }
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://github.com",
            source: "github.com"
          }
        }
      }
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          ":bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
