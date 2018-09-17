context('User Registration', () => {
    it('Navigate to application home page', () => {
        //Open web page URL
        cy.visit('https://selenium-site-jquery.herokuapp.com');
        //Verify navigation to application home page
        cy.location().should((loc) => {
            expect(loc.href).to.contain('heroku')
        })
    })

    it('Navigate to register page', () => {
        //Click registration tab
        cy.get("div:nth-child(2) > div.collapse.navbar-collapse > ul > li:nth-child(6) > a").click();
        //verify navigation to registration page
        cy.get('h3').contains('Registration Form')
        cy.log("Navigated to registration page");
    })

    it('Register User', () => {
        cy.get("div:nth-child(2) > div.collapse.navbar-collapse > ul > li:nth-child(6) > a").click();
        cy.get('#firstName').type('test user');
        cy.get('#email').type('test@test.com');
        cy.get('#password').type('password');
        cy.get('#birthDate').type('1999-01-01');
        cy.get('#femaleRadio').check();
        cy.get('#calorieCheckbox').check();
        cy.get("body > section > div > div > form > div:nth-child(8) > div > div > label > input[type='checkbox']").check();
        cy.get("button[type='submit']").click();
        cy.log("Clicking register button");
    })

    it('Scrolling with cypress', () => {
        cy.get("div:nth-child(2) > div.collapse.navbar-collapse > ul > li:nth-child(6) > a").click();
        cy.scrollTo('center');
        cy.scrollTo('bottom');
        cy.scrollTo(250)
        cy.scrollTo(0, 250)
        cy.wait(10000);
        cy.scrollTo("60%", "60%")
    })

    it('scrollIntoView with cypress', () => {
        cy.get("button[type='submit']").scrollIntoView();
        cy.get("button[type='submit']").scrollIntoView()
            .should('be.visible')
    })


    it('Navigate to Interaction page', () => {
        //Click Interaction  tab
        //cy.get(".dropdown-toggle").first().click();
        //cy.get("body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li > a").last().click();
        cy.get("body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li").find("a[href='frames-windows.html']").click();
        //verify navigation to registration page
        cy.log("Navigated to Interaction page");
    })

    it('Verify all nav menus', () => {
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li > a').then(function ($lis) {
            expect($lis).to.have.length(7)
            expect($lis.eq(0)).to.contain('Home')
            expect($lis.eq(1)).to.contain('Interaction')
            expect($lis.eq(2)).to.contain('Widget')
        })
    })

    it('Print all nav menus using each', () => {
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li > a')
            .each(function ($el, index, $list) {
                cy.log($el, index, $list)
            })
    })


    it('Using its', () => {
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li > a')
        // calls the 'length' property returning that value
            .its('length')
            .should('be.gt', 6)
    })

    it('Using alias with cypress', () => {
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li>a')
            .first()
            .as('firstMenuItem')

        cy.get('@firstMenuItem')
            .not('have.class', '.active')
            .and('contain', 'Home')
    })

    it('Using contains with cypress', () => {
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li>a')
            .first()
            .contains('Home').not('have.class', 'third')
        //With regular expression
        cy.get('body > header > div:nth-child(2) > div.collapse.navbar-collapse > ul > li>a')
            .first()
            .contains('Home')
            .not('test');
    })

    before(function () {
        cy.log("Before All");
    })

    after(function () {
        cy.log("After All");
    })

    beforeEach(function () {
        cy.log("Before Each");
    })

    afterEach(function () {
        cy.log("After Each");
    })
})

