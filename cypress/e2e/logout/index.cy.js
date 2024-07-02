const { login } = require("../../support/login");
const { logout } = require("../../support/logout");

describe("Logout", () => {
  before("test", () => {
    const username = "admin@outcodesoftware.com";
    const password = "Password@123";
    login(username, password);
  });
  it("Logout", () => {
    // Add other test steps here after logging in
    cy.wait(6000);

    logout();
  });
});
