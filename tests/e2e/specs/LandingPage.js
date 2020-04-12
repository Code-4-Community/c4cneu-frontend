describe("Landing Page", () => {
  it("Confirms all Parallax Sections are present", () => {
    cy.visit("/");
    cy.contains("h1", "Mission Statement");
    cy.contains("h3", "Changing the world with software");
    cy.contains("h1", "Our Projects");
    cy.contains(
      "p",
      "Code 4 Community is an organization on GitHub with over 20 developers. Here, you can find the source code to our project frontends and backends (such as this website!)"
    );
    cy.contains("h1", "Get Involved Today");
    cy.contains(
      "p",
      "Interested in making an impact with Code4Community? Anyone is welcome to join our Slack workspace at c4cneu.slack.com using an @husky.neu.edu email address. There, you will find all announcements about upcoming events and can reach out to anyone on the executive board with questions!"
    );
    cy.contains("h1", "Work With Us");
    cy.contains(
      "p",
      "Code4Community is dedicated to helping non-profit organizations. If you would like to contact us about partnering to create a custom software solution for your non-profit please email c4cneu@gmail.com. Alternatively, if you would like to sponsor us so that we can keep the servers running, please also contact the previously mentioned email address."
    );
    cy.contains("h1", "Meet the Team");
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("tests the button to bring to eboard", () => {
    cy.contains("Our Executive Board").click();
    cy.url().should("include", "/board");
  });

  it("tests links to outside sources", () => {
    cy.get("a")
      .contains("Follow C4C on GitHub")
      .should("have.attr", "href", "https://github.com/Code-4-Community");
    cy.get("a")
      .contains("Join our mailing list!")
      .should(
        "have.attr",
        "href",
        "https://c4cneu.us4.list-manage.com/subscribe?u=4b534cd2e8fe8be8150d03977&id=b1915b8b8b"
      );
    cy.get("a")
      .contains("c4cneu@gmail.com")
      .should("have.attr", "href", "mailto:c4cneu@gmail.com");
  });
});
