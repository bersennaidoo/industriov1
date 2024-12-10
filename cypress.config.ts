import { defineConfig } from "cypress";
import startDevServer from "@cypress/vite-dev-server";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1313",
    specPattern: "cypress/e2e/**/**/*.spec.cy.{feature,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: "static/react/**/**/*.test.cy.{ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
