const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
module.exports = defineConfig({
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
    },

  e2e: {
    baseUrl: 'http://65.1.109.241/login',
    specPattern: ['cypress/e2e/**/*.cy.{js,ts,jsx,tsx}', 'cypress/e2e/**/*.feature'],
    supportFile: 'cypress/support/e2e.js',
       // 👈 tells Cypress to read .feature files
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

