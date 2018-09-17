export default class RegistrationPage {

    constructor() {
        this.registrationPageLink = "[href='#/registration']";
        this.registrationPageHeader = "#main > div > h1";
        this.loginButton = "[ng-click='login()']";
        this.username = "#username";
        this.userpassword = "#password";
        this.logoutButton = "[ng-click='gotoRegister()']";
    }

    visitHomePage(url) {
        cy.log("Opening application home page");
        return cy.visit(url);
    }

    verifyHomePageNavigation() {
        cy.location().should((loc) => {
            expect(loc.href).to.contain('heroku')
        })
         cy.log("Navigated to application home page")
    }

    navigateToRegistrationPage() {
        cy.log("Navigate to registration page");
        //Wait for element till 10 second
        //cy.get(this.registrationPageLink, { timeout: 10000 }).click();
        cy.get(this.registrationPageLink,{ timeout: 10000 }).should('be.visible').click();
     //   cy.get(this.registrationPageLink).should('be.visible').click();
        cy.get(this.registrationPageHeader).contains("Registration")
        cy.log("Navigated to registration page");
    }

    loginToApp(username,password) {
        cy.log("Entering user details");
        cy.get(this.loginButton).should('have.attr', 'disabled', 'disabled');
        cy.get(this.username).type(username);
        cy.get(this.userpassword).type(password);
        cy.get(this.loginButton).click();
    }

    verifyLogin() {
        cy.get(this.logoutButton).should('be.visible');
        cy.log("Login successful");
    }

    logoutFromApp() {
        cy.log("Performing logout");
        cy.get(this.logoutButton).click();
    }

    verifyLogout() {
        cy.get(this.registrationPageHeader).contains("Registration")
        cy.log("Logout successful");
    }
};
