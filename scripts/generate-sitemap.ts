import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for sitemap generation
const config = {
  baseUrl: "https://ssaucsd.org",
  outputPath: path.join(__dirname, "../public/sitemap.xml"),
};

// Define routes with their metadata
// These should match the routes in AppRoutes.tsx
interface RouteConfig {
  path: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/mission",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/events",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/ensemble",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/board",
    changefreq: "yearly",
    priority: 0.7,
  },
  {
    path: "/join",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/support",
    changefreq: "monthly",
    priority: 0.8,
  },
];

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${config.baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n  \n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
${urls}
  
</urlset>
`;
}

function main() {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(config.outputPath, sitemap, "utf-8");
    console.log("✅ Sitemap generated successfully at:", config.outputPath);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
