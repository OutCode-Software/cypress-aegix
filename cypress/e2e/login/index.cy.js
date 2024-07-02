describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    const baseUrl = Cypress.env("baseUrl");
    if (baseUrl) {
      cy.visit(baseUrl);
    } else {
      throw new Error("CYPRESS_BASE_URL environment variable is not set");
    }
  });
});
