import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // 301 din URL-urile vechi WordPress → structura nouă (păstrează autoritatea domeniului)
    return [
      { source: "/acasa", destination: "/", permanent: true },
      { source: "/istoric", destination: "/despre", permanent: true },
      { source: "/calendar-evenimente", destination: "/program", permanent: true },
      { source: "/eveniment", destination: "/program", permanent: true },
      { source: "/politica-cookies", destination: "/cookies", permanent: true },
      { source: "/politica-confidentialitate", destination: "/confidentialitate", permanent: true },
    ];
  },
};

export default nextConfig;
