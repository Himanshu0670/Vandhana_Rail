import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let userData;

before(() => {
  cy.fixture('Userdata').then((data) => {
    userData = data;
  });
});

Given('User is logged into the application', () => {
  cy.login();
});

When('User clicks on Add User button', () => {
  cy.contains('Add User').click().wait(1000);
});

When('User selects role from fixture', () => {
  cy.contains('label', 'Role')
    .parent()
    .find('[role="combobox"]')
    .click();

  cy.contains(userData.role).click().wait(200);
});

When('User enters user details from fixture', () => {
  cy.get('[name="emp_id"]').type(userData.empID);
  cy.get('[name="first_name"]').type(userData.firstName);
  cy.get('[name="last_name"]').type(userData.lastName);
  cy.get('[name="email"]').type(userData.email);

  cy.contains('Submit').should('be.disabled');
  cy.get('[name="mobile"]').type(userData.mobile);
});

Then('Submit button should be enabled', () => {
  cy.contains('Submit').should('be.enabled');
});