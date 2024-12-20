// next.config.mjs
export default {
  webpack(config, { dev }) {
    if (dev) {
      config.ignoreWarnings = [
        // Ignore React hydration warnings
        (warning) => warning.message.includes("Hydration"),
      ];
    }
    return config;
  },
  reactStrictMode: false, // React Strict Mode is usually helpful in detecting issues
};
