import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const serverDir = join(root, "dist", "server");
const clientDir = join(root, "dist", "client");

// Copy entire server output into dist/client so Cloudflare Pages can serve the worker.
if (existsSync(serverDir)) {
  if (!existsSync(clientDir)) {
    mkdirSync(clientDir, { recursive: true });
  }
  cpSync(serverDir, clientDir, { recursive: true });
  console.log("✓ Copied SSR worker bundle into dist/client");
} else {
  console.warn("⚠ dist/server not found — skipping worker copy");
}