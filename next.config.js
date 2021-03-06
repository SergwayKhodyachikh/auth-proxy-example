/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  }
};
