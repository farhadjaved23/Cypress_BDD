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