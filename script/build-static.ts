import { build as viteBuild } from "vite";
import { rm, copyFile } from "fs/promises";
import { join } from "path";

async function buildStatic() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building static site...");
  await viteBuild();

  // Copy index.html to 404.html for GitHub Pages client-side routing
  const distPublic = join(process.cwd(), "dist", "public");
  const indexPath = join(distPublic, "index.html");
  const notFoundPath = join(distPublic, "404.html");
  
  try {
    await copyFile(indexPath, notFoundPath);
    console.log("Created 404.html for GitHub Pages");
  } catch (error) {
    console.error("Failed to create 404.html:", error);
  }

  console.log("Static build complete!");
}

buildStatic().catch((err) => {
  console.error(err);
  process.exit(1);
});
