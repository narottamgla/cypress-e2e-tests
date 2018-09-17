describe(' APP',function(){
it('starts the application', function(){
cy.clearCookies();
cy.clearLocalStorage();
cy.window().then((win) => {
win.sessionStorage.clear();
});
cy.visit('http://localhost:3000/#/main/customer/');
});
it('Interaction step 0', function(){
cy.get('.active').children().should('have.length', 1)
cy.get('.active').should('have.class', 'active');
cy.get('.active').click({force:true});
});
it('Interaction step 1', function(){
cy.get('body > nav > div > ul > li:nth-child(2) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(2) > a ').click({force:true});
});
it('Interaction step 2', function(){
cy.get('#username').click({force:true});
cy.get('#username').should('have.class', 'form-control');
cy.get('#username').should('have.class', 'ng-pristine');
cy.get('#username').should('have.class', 'ng-empty');
cy.get('#username').should('have.class', 'ng-invalid');
cy.get('#username').should('have.class', 'ng-invalid-required');
cy.get('#username').should('have.class', 'ng-valid-minlength');
cy.get('#username').should('have.class', 'ng-valid-maxlength');
});
it('Interaction step 3', function(){
cy.get('#username').clear();
cy.get('#username').type('angular');
});
it('Interaction step 4', function(){
cy.get('#password').click({force:true});
cy.get('#password').should('have.class', 'form-control');
cy.get('#password').should('have.class', 'ng-pristine');
cy.get('#password').should('have.class', 'ng-empty');
cy.get('#password').should('have.class', 'ng-invalid');
cy.get('#password').should('have.class', 'ng-invalid-required');
cy.get('#password').should('have.class', 'ng-valid-minlength');
cy.get('#password').should('have.class', 'ng-valid-maxlength');
});
it('Interaction step 5', function(){
cy.get('#password').clear();
cy.get('#password').type('password');
});
it('Interaction step 6', function(){
cy.get('.btn.btn-danger').contains('Login');
cy.get('.btn.btn-danger').should('have.class', 'btn');
cy.get('.btn.btn-danger').should('have.class', 'btn-danger');
cy.get('.btn.btn-danger').click({force:true});
});
it('Interaction step 7', function(){
cy.get('body > div > div > div > div > h4 > a ').contains('Logout');
cy.get('body > div > div > div > div > h4 > a ').click({force:true});
});
it('Interaction step 8', function(){
cy.get('body > nav > div > ul > li:nth-child(3) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(3) > a ').click({force:true});
});
it('Interaction step 9', function(){
cy.get('body > nav > div > ul > li:nth-child(4) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(4) > a ').click({force:true});
});
it('Interaction step 10', function(){
cy.get('body > nav > div > ul > li:nth-child(5) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(5) > a ').click({force:true});
});
it('Interaction step 11', function(){
cy.get('body > nav > div > ul > li:nth-child(6) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(6) > a ').click({force:true});
});
it('Interaction step 12', function(){
cy.get('body > nav > div > ul > li:nth-child(7) > a ').children().should('have.length', 1)
cy.get('body > nav > div > ul > li:nth-child(7) > a ').click({force:true});
});
it('Interaction step 13', function(){
cy.get('body > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > button ').contains('Customer Login');
cy.get('body > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > button ').should('have.class', 'btn');
cy.get('body > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > button ').should('have.class', 'btn-primary');
cy.get('body > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > button ').should('have.class', 'btn-lg');
cy.get('body > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > button ').click({force:true});
});
});