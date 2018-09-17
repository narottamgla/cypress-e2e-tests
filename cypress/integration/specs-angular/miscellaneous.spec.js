context('miscellaneous.spec', () => {
    it('Write to file', () => {
        cy.writeFile('cypress/fixtures/data.json', { name: 'Eliza', email1: 'eliza@example.com' })
            .then((user) => {
                expect(user.name).to.equal('Eliza')
            })
    })
})
