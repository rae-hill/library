import { readdirSync, rmSync } from "node:fs"
import { join, resolve } from "node:path"

const packagesDir = resolve("packages")

const packages = readdirSync(packagesDir)

for (const pkg of packages) {
  const distDir = join(packagesDir, pkg, "dist")
  rmSync(distDir, { recursive: true, force: true })
  console.log(`Cleaned ${distDir}`)
}
