import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for sitemap generation
const config = {
  baseUrl: "https://ssaucsd.org",
  outputPath: path.join(__dirname, "../public/sitemap.xml"),
  routesFile: path.join(__dirname, "../src/components/AppRoutes.tsx"),
};

// Default metadata for routes
interface RouteMetadata {
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

// Custom metadata for specific routes (override defaults)
const routeMetadata: Record<string, RouteMetadata> = {
  "/": { changefreq: "weekly", priority: 1.0 },
  "/mission": { changefreq: "monthly", priority: 0.9 },
  "/events": { changefreq: "weekly", priority: 0.9 },
  "/ensemble": { changefreq: "monthly", priority: 0.8 },
  "/board": { changefreq: "yearly", priority: 0.7 },
  "/join": { changefreq: "monthly", priority: 0.9 },
  "/support": { changefreq: "monthly", priority: 0.8 },
};

// Default metadata for routes not explicitly configured
const defaultMetadata: RouteMetadata = {
  changefreq: "monthly",
  priority: 0.5,
};

function extractRoutes(): string[] {
  try {
    const content = fs.readFileSync(config.routesFile, "utf-8");

    // Extract route paths using regex
    // Matches: <Route path="/something" or <Route path="/"
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    const routes: string[] = [];

    let match;
    while ((match = routeRegex.exec(content)) !== null) {
      routes.push(match[1]);
    }

    return routes;
  } catch (error) {
    console.error("Error reading routes file:", error);
    throw error;
  }
}

function generateSitemap(routes: string[]): string {
  const today = new Date().toISOString().split("T")[0];

  const urls = routes
    .map((route) => {
      const metadata = routeMetadata[route] || defaultMetadata;
      return `  <url>
    <loc>${config.baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority.toFixed(1)}</priority>
  </url>`;
    })
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
    console.log("📝 Extracting routes from AppRoutes.tsx...");
    const routes = extractRoutes();
    console.log(`   Found ${routes.length} route(s):`, routes.join(", "));

    console.log("🔨 Generating sitemap...");
    const sitemap = generateSitemap(routes);

    fs.writeFileSync(config.outputPath, sitemap, "utf-8");
    console.log("✅ Sitemap generated successfully at:", config.outputPath);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
