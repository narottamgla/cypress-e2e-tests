describe('User Registration', () => {
    it('Navigate to application home page', () => {
        //Open web page URL
        cy.visit('https://selenium-site-jquery.herokuapp.com');
        //Verify navigation to application home page
        cy.location().should((loc) => {
            expect(loc.href).to.contain('heroku')
        })

        cy.get("div:nth-child(2) > div.collapse.navbar-collapse > ul > li:nth-child(6) > a").click();
        //verify navigation to registration page
        cy.get('h3').contains('Registration Form')

        cy.get('h3').then(function ($header) {
            expect($header).to.contain("Registration Form")
            cy.log("Navigated to registration page");
        })
    })
})