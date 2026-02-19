class AddUserPage {
    clickAddUserButton() {
        cy.contains('Add User').click().wait(1000);
    }

    clickRoleField() {
        cy.contains('label', 'Role')
            .parent().find('[role="combobox"]').click()
        cy.get('[data-value]').eq(0).should('have.text', 'Admin');
        cy.get('[data-value]').eq(1).should('have.text', 'Data Champion');
        cy.get('[data-value]').eq(2).should('have.text', 'Fleet Manager');
        cy.get('[data-value]').eq(3).should('have.text', 'Machine Manager');
        cy.get('[data-value]').eq(4).should('have.text', 'Supervisor');
        cy.contains('Admin').click().wait(200);
    }

    enterEmpID(empID) {
        cy.get('[name="emp_id"]').type(empID);
    }
    enterFirstName(firstName) {
        cy.get('[name="first_name"]').type(firstName);
    }

    enterLastName(lastName) {
        cy.get('[name="last_name"]').type(lastName);
    }

    enterEmail(email) {
        cy.get('[name="email"]').type(email);
    }
    enterMobile(mobile) {
        cy.contains('Submit').should('be.disabled');
        cy.get('[name="mobile"]').type(mobile);
    }
    clickSave() {
        cy.contains('Submit').should('be.enabled');
        
    }
}
export default AddUserPage;
