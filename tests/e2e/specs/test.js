describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "Changing the world with software");
    cy.contains("h1", "Mission Statement");
  });
});
