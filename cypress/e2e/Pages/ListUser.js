class ListOfUser {
    
    UserList() {
       cy.contains('label', 'Role')
        .parent().find('[role="combobox"]').click()
        cy.get('[data-value]').eq(0).should('have.text', 'All');
        cy.get('[data-value]').eq(1).should('have.text', 'Admin');
        cy.get('[data-value]').eq(2).should('have.text', 'Data Champion');
        cy.get('[data-value]').eq(3).should('have.text', 'Fleet Manager');
        cy.get('[data-value]').eq(4).should('have.text', 'Machine Manager');
        cy.get('[data-value]').eq(5).should('have.text', 'Supervisor');
        cy.get('[data-value]').eq(1).click().wait(200);
        cy.contains('td', 'Admin')                 //Pure page me Admin wala 'td' search karega with admin text
        cy.get('table').contains('td', 'Admin').should('have.text','Admin'); //Sirf table ke andar Admin wala 'td' search karega
        cy.contains('label', 'Status')
        .parent().find('[role="combobox"]').click()
    }

}
export default ListOfUser;
