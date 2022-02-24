/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mode: "development",
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-typescript",
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: "yarn pnpify tsc" } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  env: {
    GQL: "http://localhost:4000/graphql",
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8080,
    tailwindConfig: "./tailwind.config.js",
  },
  testOPtionsL: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
