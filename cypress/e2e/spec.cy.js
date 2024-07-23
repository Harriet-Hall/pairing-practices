describe("Visits our pairing practices site", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  })
  it("Checks for main title", () => {
    cy.get("h1").contains("Pairing Practices");
  });

  it("Checks for secondary title", () => {
    cy.get("h2").contains("Checklist");
  });

  it("Checks for checkbox", () => {
    cy.get("input[type=checkbox]")
  })
  describe("Checks for strike through when checkbox is checked", () => {
    it("Strikes the text through if checked", () => {
      cy.get("input[type=checkbox]").click()
      cy.get("label").should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)")
    })
  })
});

