import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === "dev" ? "dev" : ".next";

const nextConfig: NextConfig = {
  distDir: outputDir,
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    position: "top-right",
  },
  productionBrowserSourceMaps: isProduction,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
