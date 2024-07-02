// cypress/e2e/example.cy.js

const { login } = require("../../support/login");

describe("start an alert", () => {
  before("test", () => {
    const username = "admin@outcodesoftware.com";
    const password = "Password@123";
    login(username, password);
  });
  it("Logs in and performs actions", () => {
    // Add other test steps here after logging in
    cy.wait(6000);
    cy.get("body").then((body) => {
      if (body.find('[data-e2e="startDrill"]').length > 0) {
        cy.get('[data-e2e="startDrill"]').click();
        cy.wait(2000);

        cy.get('[data-e2e="attention"]').contains("EVACUATE").click();
      }
    });
  });
});
