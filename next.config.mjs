/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./build", // Changes the build output directory to `./build`.
  images: {
    unoptimized: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
