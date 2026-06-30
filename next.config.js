/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "troika-three-text",
    "webgl-sdf-generator",
    "bidi-js",
  ],
};

module.exports = nextConfig;
