/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lets the dev server accept requests from other devices on your LAN
  // (e.g. http://192.168.0.7:3000), or from your public IP if you've set up
  // router port forwarding, instead of only localhost.
  allowedDevOrigins: ["192.168.0.7", "192.168.0.*", "83.252.210.16"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
