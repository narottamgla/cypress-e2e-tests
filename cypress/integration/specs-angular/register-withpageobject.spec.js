import registrationPO from '../../support/pageobject/registrationPage';

context('User Registration', () => {
    let registrationPage = new registrationPO();
    it('Navigate to application home page', () => {
        registrationPage.visitHomePage('https://protractor-demo.herokuapp.com/#/home');
        registrationPage.verifyHomePageNavigation();
    })

    it('Navigate to Registration page', () => {
        registrationPage.navigateToRegistrationPage();
    })

    it('Login User', () => {
        cy.fixture('login').as('loginData');
        cy.get('@loginData').then((data) => {
        registrationPage.loginToApp(data.username,data.password);
        registrationPage.verifyLogin();
        })
    })

    it('Logout User', () => {
        registrationPage.logoutFromApp();
        registrationPage.verifyLogout();
    })
})
