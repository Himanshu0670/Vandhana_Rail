import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Visit to the website", () => {

  cy.visit('/');
  cy.url().should('include', '/login');
});

When("Enter valid credentials", () => {
  cy.contains('Email')
    .click({ force: true })
    .type('dinkar.gupta@vandhana.com');

  cy.contains('Password')
    .click({ force: true })
    .type('Lattice@1234');

  cy.get('.MuiButton-root').click({ force: true });

})

Then("User should successfully login", () => {

  cy.get('#notistack-snackbar')
    .should('be.visible')
    .and('have.text', 'Logged in successfully!');
});

