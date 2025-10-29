Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('HSBC Login Test Scenarios', () => {

    it('Validates the Login Functionality and Tooltip Behavior', () => {
        //Open https://www.hsbc.bank.in/
        cy.visit('https://www.hsbc.bank.in/', {
            timeout: 60000,
            failOnStatusCode: false
        })
        //Validate HSBC Bank Logo
        cy.get('div.header-logo.lg-2 img[alt="HSBC India Bank"]').should('be.visible');

        //Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and Deposit
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');

        //Click on Login button
        cy.get('a.selected-item.login-button.only-one-link:visible', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true });

        // Validate Log On header in Login page
        cy.get('a[href*="continue-to-logon"], a[href*="#modal"], a')
            .contains('Continue to log on with browser', { matchCase: false })
            .click({ force: true });

        cy.get('h2[class="pull-left heading t28l"]', { timeout: 10000 }).should('contain.text', 'Log On');

        //Check Continue button is available
        cy.get('button#usernameSubmitBtn, button[type="submit"]').should('be.visible')

        //Type any random email in the username field
        cy.get('input#username, input[name="username"]').should('be.visible').type('test@simplilearn.com')
        
        //Click on remember me
        cy.get('input[id="rememberMe"]').click()

        //Validate there is a question mark tooltip present on the page
        let tooltip ='span[class="icon icon-circle-help-solid help-icon"]'
        cy.get(tooltip).should('be.visible').click()

        //Now validate the username header in the new pop-up screen
        cy.get('h2, h3').contains('Username', { matchCase: false }).should('be.visible');

        // Validate and click Close button
        cy.get('button, a').contains(/close/i).should('be.visible').click({ force: true });



    })
})
