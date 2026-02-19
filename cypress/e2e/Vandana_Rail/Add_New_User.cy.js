import AddUserPage from '../Pages/AddUserPage';

describe('Add New User', () => {

    const addUser = new AddUserPage();

    before(() => {
        cy.login();
    });

    it('Add new user using fixture data', function () {

        cy.fixture('Userdata').then((data) => {

            addUser.clickAddUserButton();
            addUser.clickRoleField();
            addUser.enterEmpID(data.empID);
            addUser.enterFirstName(data.firstName);
            addUser.enterLastName(data.lastName);
            addUser.enterEmail(data.email);
            addUser.enterMobile(data.mobile);
            addUser.clickSave();
        });

    });

});
