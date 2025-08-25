import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
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
