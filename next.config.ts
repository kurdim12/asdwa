import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be hosted on Cloudflare
  // Pages / Workers Static Assets (or any static host) with no server runtime.
  output: "export",

  // next/image optimization needs a server; disable it for static export.
  // (The app uses plain <img> tags, so this is a safety net.)
  images: {
    unoptimized: true,
  },

  // Emit `about/index.html`-style paths for clean, host-agnostic routing.
  trailingSlash: true,
};

export default nextConfig;
