// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.url().should('include', '/65.1.109.241/login')
    cy.contains('Email').click({force: true}).type('dinkar.gupta@vandhana.com');
    cy.contains('Password').click({force: true}).type('Lattice@1234').wait(500);
    cy.get('.MuiButton-root').click({force:true});
    cy.get('#notistack-snackbar').should('have.text', 'Logged in successfully!')
})
