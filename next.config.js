/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
  swcMinify: true,
  //images: [],
  env: {
    BASE_URL: "http://localhost:3000/",
    API_URL: "https://agency.teamrabbil.com/",
    DB_URI: config.DB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    CLOUDINARY_UPLOAD_PRESET: config.CLOUDINARY_UPLOAD_PRESET,
    CLOUDINARY_URL: config.CLOUDINARY_URL,
    GITHUB_ID: config.GITHUB_ID,
    GITHUB_SECRET: config.GITHUB_SECRET,

    ADMIN_ROLES: ["admin", "super-admin", "manager", "user"],
  },

  // distDir: "build",
  reactStrictMode: false,
  headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};
module.exports = nextConfig;
