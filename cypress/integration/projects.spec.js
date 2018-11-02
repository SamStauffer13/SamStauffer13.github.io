/// <reference types="Cypress" />

context('projects section', () => {

    // https://github.com/cypress-io/cypress-example-kitchensink/blob/master/package.json    

    describe('when calling the actual server', () => {

        it('should display most recent projects', () => {

            cy.server()

            cy.route('/projects.json').as('fetch_projects')

            cy.visit('/')

            cy.wait('@fetch_projects')

            cy.get('#projects').scrollIntoView()

            cy.get('.info-back').its('length').should('be', 2)
        })
    });

    const setup = (mockedHttpRequest) => {

        cy.server()

        cy.route(mockedHttpRequest).as('fetch_projects')

        cy.visit('/')

        cy.get('#projects').scrollIntoView(); // call cy.wait('@fetch_projects') to execute this in your test       
    }

    describe('when server returns a mocked 200 http response', () => {

        beforeEach(() => {

            const stubbedResponse = cy.fixture('projects.json');

            setup({
                method: 'GET',
                url: '/projects.json',
                status: 200,
                response: stubbedResponse,
                delay: 100
            })
        })

        it('should display loading icon while loading', () => {

            cy.get('.loader').should('be.visible')
        })

        it('should display loading message while loading', () => {

            cy.get('#projects_message').contains('Looks like your connection is slow, give it a second...')
        })

        it('should display a welcome message', () => {

            cy.wait('@fetch_projects')

            cy.get('#projects_message').contains('Here\'s what i\'ve been up to in')
        })

        it('should display projects', () => {

            cy.wait('@fetch_projects')

            cy.get('.info-back').its('length').should('be', 2)
        })
    })

    describe('when server returns a mocked 500 http response', () => {

        beforeEach(() => {

            const stubbedResponse = cy.fixture('projects.json');

            setup({
                method: 'GET',
                url: '/projects.json',
                status: 500,
                response: stubbedResponse,
                delay: 10
            })
        })

        it('should display error message', () => {

            cy.wait('@fetch_projects')

            cy.get('#projects_message').contains('Sorry! Looks like this section is currently under maintenance (0_0)')
        })

        it('should display loading icon', () => {

            cy.wait('@fetch_projects')

            cy.get('.loader').should('be.visible')
        })
    })
})