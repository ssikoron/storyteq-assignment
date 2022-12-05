import CitiesSearch from "../CitiesSearch.vue";

describe("CitiesSearch", () => {
  it("renders the Autocomplete component properly and has focus on mount", () => {
    cy.mount(CitiesSearch);
    cy.get("label").should("contain", "Search");
    cy.get("input").should("have.focus");
  });

  it("shows search results", () => {
    cy.mount(CitiesSearch);
    cy.get("input").type("san");
    cy.get("li").should("have.length", 6);
  });

  it("doesn't perform search if < 3 characters", () => {
    cy.mount(CitiesSearch);
    cy.get("input").type("sa");
    cy.get("li").should("not.exist");
  });

  it("shows helptext when < 3 chars", () => {
    cy.mount(CitiesSearch);
    cy.get("input").type("sa");
    cy.get("#helpText").should(
      "contain",
      "You must enter at least 3 characters to search"
    );
  });

  it("shows 'no results' when no results'", () => {
    cy.mount(CitiesSearch);
    cy.get("input").type("thisShouldProduceNoResults");
    cy.get("[role='alert']").contains("No results");
  });

  it("resets when input cleared", () => {
    cy.mount(CitiesSearch);

    cy.get("input").type("san");
    cy.get("input").clear();
    cy.get("li").should("not.exist");
    cy.get("[role='alert']").should("not.exist");

    cy.get("input").type("thisShouldProduceNoResults");
    cy.get("input").clear();
    cy.get("li").should("not.exist");
    cy.get("[role='alert']").should("not.exist");
  });
});
