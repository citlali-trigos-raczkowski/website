
// Disable saving screenshots on test failures
Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
});

describe('Home Page', () => {
    it('Loads and shows my name', () => {
        cy.visit('/');
        cy.contains('Citlali Trigos-Raczkowski');
    });
    it('Has a Version String', () => {
        cy.visit('/');
        cy.get('[id="version"]').should('exist');
    });

});