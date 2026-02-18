describe('Login Page Tests', () => {

  beforeEach(() => {
    // Har test se pehle login page visit karo
    cy.visit('/');
    cy.url().should('include', '/login');
  });

  it('should show required field validations', () => {
    // Email required
    cy.get('[name="email"]').focus().blur();
    cy.contains('Email is required.').should('be.visible');

    // Password required
    cy.get('[name="password"]').focus().blur();
    cy.contains('Password is required.').should('be.visible');
  });

  it('should validate incorrect email format', () => {
    cy.get('[name="email"]').type('ram').blur();
    cy.contains('Please enter a valid email').should('be.visible');
  });

  it('should show password strength validations', () => {
    cy.get('[name="email"]').clear().type('diwakar.dubey@vandhana.com');

    // Short password
    cy.get('[name="password"]').type('Him').blur();
    cy.contains('Password must be at least 8 characters long.').should('be.visible');

    // Weak password
    cy.get('[name="password"]').clear().type('an87552333').blur();
    cy.contains('Password must be 8–15 characters with a uppercase, lowercase, and special character').should('be.visible');

    // Strong password
    cy.get('[name="password"]').clear().type('Ram123@gmail');
    cy.contains('Password must be 8–15 characters with a uppercase, lowercase, and special character').should('not.exist');
  });

  it('should not login with incorrect credentials and disable login button', () => {
    cy.get('[name="email"]').clear().type('diwakar.dubey@vandhana.com');
    cy.get('[name="password"]').clear().type('Ram123@gmail');
    
    cy.get('.MuiButton-root').click();
    
    cy.contains("Incorrect password. Please try again or click 'Forgot password?' to reset it.").should('be.visible');
    cy.get('.MuiButton-root').should('be.disabled');
  });

  it('should login successfully with valid credentials using custom command', () => {
    cy.login(); // Custom command handles correct login
  });

});
