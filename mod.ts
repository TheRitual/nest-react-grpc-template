import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const __dirname =
  typeof (import.meta as { dirname?: string }).dirname === "string"
    ? (import.meta as { dirname: string }).dirname
    : dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const projectName = args[0]?.trim();

if (!projectName) {
  console.error("Usage: ritual-create <monorepo-name> [directory]");
  console.error("  monorepo-name  Project/repository name (e.g. new-project)");
  console.error("  directory      Optional output path (default: ./<monorepo-name>)");
  process.exit(1);
}

const cwd = process.cwd();
const defaultDir = args[1]?.trim()
  ? resolve(cwd, args[1])
  : resolve(cwd, projectName);

const scriptPath = resolve(__dirname, "create-project.mjs");
const child = spawn("node", [scriptPath, projectName, defaultDir], {
  stdio: "inherit",
  shell: false,
  cwd,
});

child.on("close", (code) => {
  process.exit(code ?? 1);
});

child.on("error", (err) => {
  console.error("Failed to run create script:", err.message);
  process.exit(1);
});
