const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "product-catalogue-management-system.onrender.com",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
