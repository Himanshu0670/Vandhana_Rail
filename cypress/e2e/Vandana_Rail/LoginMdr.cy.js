describe('My first test', () => {

  it('Login = Positive check', () => {
      cy.login() // custom command added 
    console.log("Function worked as expected");
  });
});

