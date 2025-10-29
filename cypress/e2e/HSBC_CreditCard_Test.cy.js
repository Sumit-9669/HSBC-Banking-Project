Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('HSBC Credit Card Test Scenarios', () => {

    it('Validates Credit Card navigation and elements', () => {

        // Open https://www.hsbc.co.in/
        cy.visit('https://www.hsbc.co.in/', {
            timeout: 60000,
            failOnStatusCode: false
        })

        // Click on Banking menu navigation
        cy.contains('Banking', { matchCase: false })
            .should('exist')
            .click({ force: true })

        // Click on Credit Cards link
        cy.contains('Credit Cards', { matchCase: false })
            .should('exist')
            .click({ force: true })

        // Validate Credit Card as a header text
        cy.wait(2000)
        cy.get('h1, h2')
            .contains('Credit Cards', { matchCase: false })
            .should('exist')

        // Validate the Card HSBC Taj Credit Card is displayed
        cy.wait(2000)
        cy.contains('HSBC Taj Credit Card', { matchCase: false })
            .scrollIntoView()
            .should('exist')

        // Click on HSBC Taj Credit Card link
        cy.contains('HSBC Taj Credit Card', { matchCase: false })
            .click({ force: true })

        // Validate the URL contains https://www.hsbc.co.in/credit-cards/products/taj/
        cy.url({ timeout: 10000 })
            .should('include', '/credit-cards/products/taj/')

        // VAlidated the header is HSBC Taj Credit Card
        cy.wait(2000)
        cy.get('h1, h2')
            .contains('HSBC Taj Credit Card', { matchCase: false })
            .should('exist')

        // Click on HSBC Logo
        cy.get('img[alt*="HSBC"]', { timeout: 10000 })
            .filter(':visible')
            .first()
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true })

        // Validate page is navigating to home page by its title
        cy.title({ timeout: 10000 })
            .should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    })

})
