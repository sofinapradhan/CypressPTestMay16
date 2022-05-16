// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});

// "reporter": "../../node_modules/mocha-testrail-reporter",
//   "reporterOptions": {
//   "username": "sofinalearning1@gmail.com",
//     "password": "mYumCT0pYkkvWxwUgVKy-fbN4MjmlHObpKlF6hsx6",
//     "host": "https://sofilearning1.testrail.ioo",
//     "domain": "sofilearning1.testrail.io",
//     "projectId": 1,
//     "suiteId": 3,
//     "includeAllInTestRun": true,
//     "runName": "test"
// }
