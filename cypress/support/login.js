// cypress/support/login.js

export function login(username, password) {
  const baseUrl = Cypress.env("baseUrl");
  if (baseUrl) {
    cy.visit(baseUrl);
    cy.get('[data-e2e="loginEmail"]')
      .type(username)
      .should("have.value", username);
    cy.get('[data-e2e="loginButton"]').click();
    cy.get('[data-e2e="loginPassword"]')
      .type(password)
      .should("have.value", password);
    cy.get('[data-e2e="loginButton"]').click();
  } else {
    throw new Error("CYPRESS_BASE_URL environment variable is not set");
  }
}
