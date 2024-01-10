describe("listbox commands", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("enter to the home page", () => {
        cy.fixture("index").then((index) => {
            cy.get(index.title).should("contain", index.titleResult);
        });
    });

    it("to click on commands listbox ", () => {
        cy.fixture("index").then((index) => {
            cy.get(index.listboxCommands).click();
            cy.get(index.listboxCommandsResult).should("be.visible");
        });
    });
});
