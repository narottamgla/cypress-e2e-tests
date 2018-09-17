context('User Registration', () => {
    it('Navigate to application home page', () => {
        cy.log("Opening application home page");
        //Open web page URL
        cy.visit('https://protractor-demo.herokuapp.com/#/home');
        //Verify navigation to application home page
        cy.location().should((loc) => {
            expect(loc.href).to.contain('heroku')
        })
        //Contains used to getText
        cy.get("#main h1").contains("Home Page")
        cy.log("Navigated to application home page");

    })

    it('Navigate to Registration page', () => {
        cy.log("Navigate to registration page");
        cy.get("[href='#/registration']").click();
        cy.get("#main > div > h1").contains("Registration")
        cy.log("Navigated to registration page");
    })

    it('Login User', () => {
        cy.log("Entering user details");
        cy.get("[ng-click='login()']").should('have.attr', 'disabled', 'disabled');
        cy.get("#username").type('angular');
        cy.get("#password").type('password');
        cy.get("[ng-click='login()']").click();
        cy.get("[ng-click=\"gotoRegister()\"]").should('be.visible');
        cy.log("Login successful");
    })

    it('Logout User', () => {
        cy.log("Performing logout");
        cy.get("[ng-click=\"gotoRegister()\"]").click();
        cy.get("#main > div > h1").contains("Registration");
        cy.log("Logout successful");
    })
})
