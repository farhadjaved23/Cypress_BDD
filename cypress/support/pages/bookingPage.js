export class bookingPage {
    weblocators = {

        fromField: 'input[id="startingAt"]',
        ToField: 'input[id="goingTo"]',
        oneWayRadioBtn: '#homepageContentArea > div.container-fluid.bg-blue > mb-user-home > div > div > div > div > div > mb-journey-planner-lite > div > div > mb-journey-search > div > div > div > div > form > div:nth-child(1) > div > fieldset > mb-radio-group > div:nth-child(1) > label',
        leavingDateField: 'input[placeholder="Pick a date"]',
        currentDateNum: '#mat-datepicker-0 > div > mat-month-view > table > tbody',
        findTicketBtn: 'button[id="findTickets"]',
        fromText: '#heading1 > div > div.col-sm-5.ticket__stops > span:nth-child(1)',
        toText: '#heading1 > div > div.col-sm-5.ticket__stops > span:nth-child(2)',
        selectDate: '#mat-datepicker-0 > div > mat-month-view > table > tbody > tr:nth-child(4) > td.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted',
        time: '#heading1 > a > div:nth-child(1) > div.col-xs-8.ticket__time',
        timeDiff: '#heading1 > a > div.row.ticket__summary > div.col-xs-12.col-sm-4 > span',
        searchedTicket: '#resultsAccordion > div',
        showingResult: 'body > main > div > mb-app > mb-journeys > mb-search-results > div > div > div > mb-search-results-list > div > div.ng-tns-c9-1 > div.row.sr-list__sort-filter > div.sr-list__text > span',
        sortDropdown: 'select[id="sortselected"]',
        firstTicketPrice: '#heading1 > a > div:nth-child(1) > div.col-xs-4.ticket__price > span',
        incrementBtn: 'button[id="totalPassengers_plus"]',
        clickCountryMain: 'a[aria-label="Change location & language"]',
        selectCACountry: '#navbar > ul > li.dropdown.lang.open > ul > li:nth-child(3)',
        cartCount: 'body > nav > mb-nav-bar-mini-basket > div > a'
    }

    openURL(){
        cy.visit(Cypress.env('bookBus').URL);
    }
    clickOneWayRadio()
    {
        cy.get(this.weblocators.oneWayRadioBtn).click()
    }
    enterStartingPoint(starting)
    {
        cy.get(this.weblocators.fromField).type(starting)
    }
    enterEndingPoint(destination)
    {
        cy.wait(1000)
        cy.get(this.weblocators.ToField).type(destination)
    }
    enterDate()
    {
        cy.wait(2000)
        cy.get(this.weblocators.leavingDateField).click()
        cy.wait(2000)
        cy.get(this.weblocators.leavingDateField).click()
        cy.wait(5000)
        cy.get(this.weblocators.selectDate).click()
    }
    clickFindTickets()
    {
        cy.get(this.weblocators.findTicketBtn).click()
    }
    addTraveller()
    {
        cy.get(this.weblocators.incrementBtn).click()
    }
    clickCountry()
    {
        cy.get(this.weblocators.clickCountryMain).click()
    }
    selectCountryFromList()
    {
        cy.get(this.weblocators.selectCACountry).contains('English').click()
    }
    changeURL()
    {
        cy.wait(6000)
        cy.visit('www.ca.megabus.com')
    }
    assertCartCount()
    {
        cy.get(this.weblocators.cartCount).invoke('text')
        .then((count)=>{
            cy.wrap(count).should('eq','0') 
        })  
    }
}