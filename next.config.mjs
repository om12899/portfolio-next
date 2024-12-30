/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "image.icons8.com",
      },
      {
        protocol: "https",
        hostname: "Image.icons8.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-images-2.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
