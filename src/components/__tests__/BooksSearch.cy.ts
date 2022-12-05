import BooksSearch from "../BooksSearch.vue";

describe("BooksSearch", () => {
  it("renders the Autocomplete component properly and has focus on mount", () => {
    cy.mount(BooksSearch);
    cy.get("label").should("contain", "Search");
    cy.get("input").should("have.focus");
  });

  it("shows search results", () => {
    cy.mount(BooksSearch);
    cy.get("input").type("progress");
    cy.get("li").should("have.length", 1);
  });

  it("searches only by title", () => {
    cy.mount(BooksSearch);
    cy.get("input").type("john");
    cy.get("[role='alert']").contains("No results");
  });

  it("doesn't perform search if < 3 characters", () => {
    cy.mount(BooksSearch);
    cy.get("input").type("pr");
    cy.get("li").should("not.exist");
  });

  it("shows helptext when < 3 chars", () => {
    cy.mount(BooksSearch);
    cy.get("input").type("pr");
    cy.get("#helpText").should(
      "contain",
      "You must enter at least 3 characters to search"
    );
  });

  it("shows 'no results' when no results'", () => {
    cy.mount(BooksSearch);
    cy.get("input").type("thisShouldProduceNoResults");
    cy.get("[role='alert']").contains("No results");
  });

  it("resets when input cleared", () => {
    cy.mount(BooksSearch);

    cy.get("input").type("progress");
    cy.get("input").clear();
    cy.get("li").should("not.exist");
    cy.get("[role='alert']").should("not.exist");

    cy.get("input").type("thisShouldProduceNoResults");
    cy.get("input").clear();
    cy.get("li").should("not.exist");
    cy.get("[role='alert']").should("not.exist");
  });
});
