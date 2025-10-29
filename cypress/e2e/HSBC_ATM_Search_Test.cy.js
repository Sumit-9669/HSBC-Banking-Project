Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('HSBC ATM Search Test Scenarios', () => {
  it('ATM Search Test', () => {
    cy.visit('https://www.hsbc.bank.in/', {
      timeout: 60000,
      failOnStatusCode: false
    })
    cy.contains('Find your nearest HSBC branch or ATM').click({ force: true })
    cy.url().should('include', '/ways-to-bank/branches/')
    cy.origin('https://www.hsbc.co.in', () => {

      cy.get('h1').contains('Branches & ATMs')
      cy.get('a#content_main_button_1').click({ force: true })
      cy.get('input#searchInput').type('India').type('{enter}')
      cy.contains('Knowledge city').should('be.visible')
      cy.contains('Show more results').click()
      cy.contains('Bund Garden Road').should('be.visible')
      cy.get('a.social-icon-instagram').should('be.visible')
      cy.get('a.social-icon-facebook').should('be.visible')
      cy.get('a.social-icon-twitter').should('be.visible')
      cy.get('a.social-icon-youtube').should('be.visible')
      cy.get('div.header-logo>a>img').click()
    })
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    })
})
