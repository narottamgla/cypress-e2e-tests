describe('API Testing with Cypress', () => {
    var result

    it('Validate the header', () => {
        result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')

        result.its('headers')
            .its('content-type')
            .should('include', 'application/json')

    })

    it('Validate the status', () => {
        result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')

        result.its('status')
            .should('equal',200);
    })

    it('Validate the body ', () => {
        result = cy.request('http://services.groupkt.com/country/get/iso2code/AU')

        result.its('body')
            .its('RestResponse.messages')
            .should('include', 'Country found matching code [AU].');

    })
})