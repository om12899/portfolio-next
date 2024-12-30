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
      //   {
      //     protocol: "https",
      //     hostname: "sacmsccap.blob.core.windows.net",
      //   },
    ],
  },
};

export default nextConfig;
