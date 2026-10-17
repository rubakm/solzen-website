import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, "dist");
if (!output.startsWith(`${root}${sep}`)) throw new Error("Build output must stay inside the project folder.");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const entries = ["index.html", "styles.css", "menu.js", "robots.txt", "sitemap.xml", "_headers", "assets", "about", "approach", "contact"];
for (const entry of entries) {
  await cp(join(root, entry), join(output, entry), { recursive: true });
}

console.log(`Static site built in ${output}`);
