import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';

Given('User is on the login page', () => {
  cy.visit('/');
  cy.url().should('include', '/login');
});

// Required field validations
When('User leaves email field empty and moves out of focus', () => {
  cy.get('[name="email"]').focus().blur();
});
Then('Error message {string} should be visible', (msg) => {
  cy.contains(msg).should('be.visible');
});

When('User leaves password field empty and moves out of focus', () => {
  cy.get('[name="password"]').focus().blur();
});

// Invalid email format
When('User enters {string} in the email field and moves out of focus', (email) => {
  cy.get('[name="email"]').clear().type(email).blur();
});

// Password strength validations
Given('User enters {string} in the email field', (email) => {
  cy.get('[name="email"]').clear().type(email);
});

When('User enters short password {string} and moves out of focus', (password) => {
  cy.get('[name="password"]').clear().type(password).blur();
});

When('User enters weak password {string} and moves out of focus', (password) => {
  cy.get('[name="password"]').clear().type(password).blur();
});

When('User enters strong password {string}', (password) => {
  cy.get('[name="password"]').clear().type(password);
});

Then('Error message {string} should not exist', (msg) => {
  cy.contains(msg).should('not.exist');
});

// Login with incorrect credentials
Given('User enters {string} in the password field', (password) => {
  cy.get('[name="password"]').clear().type(password);
});

When('User clicks the login button', () => {
  cy.get('.MuiButton-root').click();
});

Then('Login button should be disabled', () => {
  cy.get('.MuiButton-root').should('be.disabled');
});

// Login with valid credentials
When('User logs in using valid credentials', () => {
  cy.contains('Email')
    .click({ force: true })
    .type('dinkar.gupta@vandhana.com');

  cy.contains('Password')
    .click({ force: true })
    .type('Lattice@1234');

  cy.get('.MuiButton-root').click({ force: true });

});

Then('User should be successfully logged in', () => {
  // Example: check dashboard or user profile
  cy.url().should('include', '/user');
});