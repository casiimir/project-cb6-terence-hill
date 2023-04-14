/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["cdn.lorem.space"],
    unoptimized: true,
  },
  env: {
    PUBLIC_URL: "/",
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/all.scss";
      @import "./src/styles/helpers/resolutions.scss";
      @import "./src/styles/helpers/mixins.scss";
    `,
  },
};

module.exports = nextConfig;
