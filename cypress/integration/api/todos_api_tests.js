// @ts-check
/* eslint-env mocha */
describe('todos API', () => {
    /**
     * @typedef {Object} Todo
     * @property {number} id
     * @property {string} task
     */

    /** @type {Todo[]} */
    const initialItems = [
        {
            "id": 1,
            "task": "read something"
        },
        {
            "id": 2,
            "task": "write something"
        }
    ]

    const getItems = () =>
        cy.request('http://localhost:3000/todos')
            .its('body')

    /** @type {(todo:Todo) => Cypress.Chainable} */
    const add = item =>
        cy.request('POST', 'http://localhost:3000/todos', item)

    const deleteItem = item =>
        cy.request('DELETE', `http://localhost:3000/todos/${item.id}`)

    const deleteAll = () =>
        getItems()
            .each(deleteItem)

    const reset = () => {
        deleteAll()
        initialItems.forEach(add)
    }

    beforeEach(reset)
    afterEach(reset)

    it('returns JSON', () => {
        cy.request('http://localhost:3000/todos')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('loads 2 items', () => {
        cy.request('http://localhost:3000/todos')
            .its('body')
            .should('have.length', 2)
    })

    it('loads the initial items', () => {
        getItems()
            .should('deep.eq', initialItems)
    })

    it('returns id + task objects', () => {
        getItems()
            .each(value =>
                expect(value).to.have.all.keys('id', 'task')
            )
    })

    it('adds an item', () => {
        const randomId = Cypress._.random(0, 10000)
        const item = {id:randomId, task:'life'}

        add(item)
        cy.request(`http://localhost:3000/todos/${randomId}`)
            .its('body')
            .should('deep.eq', item)
    })

    it('deletes an item', () => {
        const id = initialItems[0].id
        cy.request('DELETE', `http://localhost:3000/todos/${id}`)
        getItems()
            .should('have.length', 1)
    })
})
