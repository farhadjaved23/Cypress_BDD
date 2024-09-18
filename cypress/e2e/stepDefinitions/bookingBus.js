import { bookingPage } from "../../support/pages/bookingPage"
import { journeyPlannerPage } from "../../support/pages/journeyPlannerPage"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const bookingObj = new bookingPage()
const journeyObj = new journeyPlannerPage()

Given('User is at the booking page', () => {
    bookingObj.openURL()
})

When('User enters starting point as {string}, destination as {string}', (starting, destination) => {
    bookingObj.clickOneWayRadio()
    bookingObj.enterStartingPoint(starting)
    bookingObj.enterEndingPoint(destination)
    bookingObj.enterDate()
})

And('User clicks on find tickets button', () => {
    bookingObj.clickFindTickets()
})

Then('User gets result to the Website as per the requirement', () => {
    journeyObj.assertFromInput()
    journeyObj.assertToInput()
})

And('User verifies the travel time of the given result', () => {
    journeyObj.assertTimeDifference()
})

And('User verifies the the count of search result', () => {
    journeyObj.assertSearchResultCount()
    journeyObj.assertText()
})

And('User verifies cheapest ticket', () => {
    journeyObj.assertCheapestTicket()
})
But('User edits the search for 2 travellers', () => {
    journeyObj.assertCheapestTicket()
})
Then('users gets the cost for 2 travellers', () => {
    journeyObj.getPriceValue()  
    journeyObj.clickEditBtn()
    bookingObj.addTraveller()
    bookingObj.clickFindTickets()
    journeyObj.assertPriceFor2Travellers()
})

And('User clicks on cart button in order to add', () =>{
    journeyObj.addTicketInCart()
})

And('User changes the URL for Canada', () => {
    journeyObj.selectCountry()
})
And('User does not get the count in Add to Cart', () => {
    bookingObj.assertCartCount()
})