/** @type {import('next').NextConfig} */
const nextConfig = {
  // This configuration is essential for styled-components to work correctly
  compiler: {
    styledComponents: true,
  },
  // This section allows you to use external images with the Next.js <Image> component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // This is the domain for ImgBB direct links
        port: "",
        pathname: "/**", // This allows any image path from that domain
      },
    ],
  },
};

export default nextConfig;
