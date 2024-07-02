export function logout() {
  cy.get('[data-e2e="currentUser"]').click();
  cy.wait(2000);

  cy.get('[type="button"]').contains("Sign Out").click();
}
