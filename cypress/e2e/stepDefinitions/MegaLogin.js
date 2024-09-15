import { loginPage } from "../../support/pages/loginPage"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const loginObj = new loginPage()

Given('User is at the login page', () => {
    loginObj.openURL()
})

When('User enters username as {string} and password as {string}', (username, password) => {
    loginObj.enterEmail(username)
    loginObj.enterPassword(password)
})

And('User clicks on login button', () => {
    loginObj.submitLoginBtn()
})

Then('User gets {string} to the Website', (result) => {
    if(result == 'success'){
    loginObj.assertSuccessfulLogin() 
    }
    else if (result === 'error'){
    loginObj.assertUnsuccessfulLogin()
    }
})