import SearchBox from "../SearchBox.vue";

describe("SearchBox", () => {
  it("renders", () => {
    cy.mount(SearchBox);
    cy.get("[role='menubar']").should("exist");
    cy.get("[role='searchbox']").should("exist");
  });

  it("highlights the menu items properly", () => {
    cy.mount(SearchBox);

    cy.get("#booksBttn").click();
    cy.get("#booksBttn").should("have.class", "active");
    cy.get("#citiesBttn").should("not.have.class", "active");

    cy.get("#citiesBttn").click();
    cy.get("#citiesBttn").should("have.class", "active");
    cy.get("#booksBttn").should("not.have.class", "active");
  });

  it("shows correct search component", () => {
    cy.mount(SearchBox);
    cy.get("#citiesSearch").should("exist");

    cy.get("#booksBttn").click();
    cy.get("#citiesSearch").should("not.exist");
    cy.get("#booksSearch").should("exist");

    cy.get("#citiesBttn").click();
    cy.get("#booksSearch").should("not.exist");
    cy.get("#citiesSearch").should("exist");
  });
});
