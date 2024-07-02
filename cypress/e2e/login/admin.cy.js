describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    const baseUrl = Cypress.env("baseUrl");
    if (baseUrl) {
      cy.visit(baseUrl);
      cy.get('[data-e2e="loginEmail"]')
        .type("admin@outcodesoftware.com")
        .should("have.value", "admin@outcodesoftware.com");
      cy.get('[data-e2e="loginButton"]').click();
      cy.get('[data-e2e="loginPassword"]')
        .type("Password@123")
        .should("have.value", "Password@123");
      cy.get('[data-e2e="loginButton"]').click();
    } else {
      throw new Error("CYPRESS_BASE_URL environment variable is not set");
    }
  });
});
