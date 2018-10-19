/// <reference types="Cypress" />

context('Projects', () => {

    // node_modules\.bin\cypress open

    it('should load most recent projects', () => {

        // cy.server()

        // cy.route('/projects.json', []).as('fetch_projects')

        // cy.visit('http://samstauffer.net')

        // cy.wait('@fetch_projects')

        // cy.get('.info-back').its('length').should('be', 2)
    })

    describe('http response scenarios', () => {

        const act = (mockedHttpRequest) => {

            cy.server()

            cy.route(mockedHttpRequest).as('fetch_projects')

            cy.visit('http://samstauffer.net')

            cy.wait('@fetch_projects')
        }

        it('loading icon should display when fetching projects', () => {

            act({
                method: 'GET',
                url: '/projects.json',
                status: 200,
                response: { projects: [] },
                delay: 500
            })

            cy.get('.loader').should('be.visible')
        })

        it('should order projects by their date of publish', () => {

        })

        it('project should display special video player when clicked', () => {

        })

        it('error message should display when fetching projects fails', () => {

            act({
                method: 'GET',
                url: '/projects.json',
                status: 404,
                response: { error: '' },
            })

            cy.get('#projects_message').contains('Sorry! Looks like this section is currently under maintenance (0_0)');
        })

        it('loading icon should no longer display when fetching projects fails', () => {

            act({
                method: 'GET',
                url: '/projects.json',
                status: 404,
                response: { error: '' },
            })

            cy.get('.loader').should('not.be.visible')
        })
    })
})