import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

const config = defineCloudflareConfig({
	incrementalCache: r2IncrementalCache,
});

// `npm run build` invokes `opennextjs-cloudflare build`, which runs this
// command for the Next.js build itself (avoids the recursion that would
// happen if it re-ran the package.json "build" script).
config.buildCommand = "npx next build";

export default config;
