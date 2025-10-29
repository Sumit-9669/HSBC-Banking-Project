const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // ✅ allows multiple domain navigation
    experimentalModifyObstructiveThirdPartyCode: true, // ✅ helps suppress Adobe Granite-type script issues
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
