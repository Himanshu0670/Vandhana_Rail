const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'http://65.1.109.241/login',
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
  },
});
