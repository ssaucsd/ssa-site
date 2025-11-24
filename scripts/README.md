# Build Scripts

This directory contains build-time scripts for the frontend application.

## Scripts

### generate-sitemap-auto.ts (Recommended)

Automatically generates `sitemap.xml` by extracting routes from `AppRoutes.tsx`.

**Features:**

- Automatically detects all routes from the routes file
- Uses predefined metadata for known routes
- Applies default metadata for new routes
- Updates the `lastmod` date to the current build date

**Usage:**

```bash
npm run generate-sitemap
```

**Configuration:**
To customize metadata for a specific route, edit the `routeMetadata` object in `generate-sitemap-auto.ts`:

```typescript
const routeMetadata: Record<string, RouteMetadata> = {
  "/your-route": {
    changefreq: "weekly",
    priority: 0.8,
  },
};
```

### generate-sitemap.ts (Manual)

Generates `sitemap.xml` from a manually maintained list of routes.

**When to use:**

- If you need more control over which routes appear in the sitemap
- If you want to exclude certain routes from the sitemap

**Usage:**
To switch to the manual version, update `package.json`:

```json
"generate-sitemap": "tsx scripts/generate-sitemap.ts"
```

## Integration

The sitemap generation is automatically run during the build process:

```bash
npm run build
```

This ensures the sitemap is always up-to-date with your latest routes.
