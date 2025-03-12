import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://qa-candidates.labos.cloud/2/login', // שנה את ה-URL בהתאם לאפליקציה שלך
    setupNodeEvents(on, config) {
      // כאן אפשר להוסיף אירועים מותאמים אישית
    },
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
//     // setupNodeEvents(on, config) {
//     //   // implement node event listeners here
//     // },
//     baseUrl: "https://qa-candidates.labos.cloud/2",
//   },
// });
