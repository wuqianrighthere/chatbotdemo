/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  // 这不会修复根本问题，但会抑制控制台中的警告
  experimental: {
    suppressHydrationWarning: true,
  }
};

module.exports = nextConfig; 