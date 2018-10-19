/// <reference types="Cypress" />

context('Projects', () => {

    // node_modules\.bin\cypress open

    it('should load most recent projects', () => {
        cy.server()

        cy.route('/projects.json', []).as('fetch_projects')

        cy.visit('http://samstauffer.net')

        cy.wait('@fetch_projects')

        cy.get('.info-back').its('length').should('be.gt', 1)
    })

    it('loading icon should display when fetching projects', () => {

        cy.server()
        
        const request = {
            method: 'GET',
            url: '/projects.json',
            status: 200,
            response: { projects: []},
            delay: 5000,
        };

        cy.route(request).as('fetch_projects')

        cy.visit('http://samstauffer.net')

        cy.wait('@fetch_projects')

        cy.get('.loader').should('be.visible')
    })

    it('error message should display when fetching projects fails', () => {

        cy.server()
        
        const request = {
            method: 'GET',
            url: '/projects.json',
            status: 404,
            response: { error: ''},
        };

        cy.route(request).as('fetch_projects')

        cy.visit('http://samstauffer.net')

        cy.wait('@fetch_projects')

        cy.get('#projects_message').contains('Sorry! Looks like this section is currently under maintenance (0_0)');

        cy.get('.loader').should('not.be.visible')

    })

    it('should order projects by their date of publish', () => {

    })

    it('project should display special video player when clicked', () => {

    })
})