import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  allowedDevOrigins: ["*.*.*.*"],
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
        hostname: "rk9ahrgqaffz4nfw.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default config;
