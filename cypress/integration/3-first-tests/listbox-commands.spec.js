describe("listbox commands", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("check title content", () => {
        cy.customLog("check title content");
        cy.fixture("index").then((index) => {
            cy.get(index.title).should("contain", index.titleResult);
        });
    });

    it("to click on commands listbox", () => {
        cy.customLog("to click on commands listbox");
        cy.fixture("index").then((index) => {
            cy.get(index.listboxCommands).click();
            cy.get(index.listboxCommandsResult).should("be.visible");
        });
    });
});
