import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "san-vito-camere.vercel.app"],
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-assets-manager.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default config;
