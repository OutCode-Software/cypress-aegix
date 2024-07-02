const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL,
    },
  },
};
