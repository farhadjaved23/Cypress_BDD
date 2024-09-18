export class loginPage {
    weblocators = {

        emailField: 'input[name="emailAddress"]',
        passwordField: 'input[name="password"]',
        loginBtn: 'button[id="login"]',
        successMsg: 'body > main > div > mb-app > mb-profile > div.row.wrapper.page-head > div > div > div > h1',
        errorMsg: '#login > mb-login > div > form > div:nth-child(4) > mb-custom-alert > div > span.custom-alert__text'
    }

    openURL(){
        cy.visit(Cypress.env('login').URL);
    }
    enterEmail(username)
    {
        cy.get(this.weblocators.emailField).type(username)
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.passwordField).type(password)
    }
    submitLoginBtn()
    {
        cy.get(this.weblocators.loginBtn).click()
    }
    assertSuccessfulLogin()
    {
        cy.get(this.weblocators.successMsg).invoke('text').then((successMsg) =>{
            cy.wrap(successMsg).should('eq','Hello!')
        })
    }
    assertUnsuccessfulLogin()
    {
        cy.get(this.weblocators.errorMsg).should('be.visible')
    }
}