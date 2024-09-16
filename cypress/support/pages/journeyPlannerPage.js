export class journeyPlannerPage {
    weblocators = {

        fromText: '#heading1 > div > div.col-sm-5.ticket__stops > span:nth-child(1)',
        toText: '#heading1 > div > div.col-sm-5.ticket__stops > span:nth-child(2)',
        selectDate: '#mat-datepicker-0 > div > mat-month-view > table > tbody > tr:nth-child(4) > td:nth-child(3)',
        time: '#heading1 > a > div:nth-child(1) > div.col-xs-8.ticket__time',
        timeDiff: '#heading1 > a > div.row.ticket__summary > div.col-xs-12.col-sm-4 > span',
        searchedTicket: '#resultsAccordion > div',
        showingResult: 'body > main > div > mb-app > mb-journeys > mb-search-results > div > div > div > mb-search-results-list > div > div.ng-tns-c9-1 > div.row.sr-list__sort-filter > div.sr-list__text > span',
        sortDropdown: 'select[id="sortselected"]',
        firstTicketPrice: '#heading1 > a > div:nth-child(1) > div.col-xs-4.ticket__price > span'
    }
assertFromInput()
{
    cy.get(this.weblocators.fromText).invoke('text').then(fromText =>{
        expect(fromText).contains('Middlesbrough')
    })
}
assertToInput()
{
    cy.get(this.weblocators.toText).invoke('text').then(ToText =>{
        expect(ToText).contains('London')
    })
} 

selectPrice()
{
    cy.get(this.weblocators.sortDropdown).select(2)
}

calculateTimeDifference(startTime, endTime) {
    const startDate = new Date(`1970-01-01T${startTime}:00Z`);
    const endDate = new Date(`1970-01-01T${endTime}:00Z`);

    const timeDiffInMs = endDate - startDate;
    const diffInMinutes = Math.floor(timeDiffInMs / (1000 * 60));
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    return `${hours}h ${minutes}m`;
}

assertTimeDifference() {
    cy.get(this.weblocators.time).invoke('text')
        .then(date => {
            let startTime = date.substr(0, 5);
            let endTime = date.substr(5, 5);
            const expectedTimeDifference = this.calculateTimeDifference(startTime, endTime);
            cy.get(this.weblocators.timeDiff).invoke('text')
                .then(displayedText => {
                    expect(displayedText.substr(1, 6)).to.eq(expectedTimeDifference);
                });
        });
}

 assertSearchResultCount() {
    cy.wait(4000);
    cy.get(this.weblocators.searchedTicket).each(($row) => {
        cy.wrap($row).invoke('attr', 'data-index')
            .then(dataIndex => {
                const indexx = parseInt(dataIndex);
                const indexx2 = indexx + 1;
                cy.wrap(indexx2).as('currentIndexx2')
            });
    });
}

 assertText() {
    cy.get('@currentIndexx2').then(indexx2 => {
        cy.get(this.weblocators.showingResult)
            .invoke('text')
            .then(text => {
                cy.log('Text from span: ' + text);
                expect(text.substr(8, 1)).to.eq(indexx2.toString());
            });
    });
}

assertCheapestTicket() {
    this.selectPrice()
    const price = []
    cy.get('#resultsAccordion > div').find('mb-panel-item > div > a > div > .col-xs-4')
        .each($row => {

            cy.wrap($row).invoke('text').then(text => {
                price.push(text)
                price.sort()
            })
        }).then(() => {
            cy.wait(3000)
            cy.get(this.weblocators.firstTicketPrice).invoke('text')
                .then(text => {
                    expect(text).to.eq(price[0])
                })
        });    
}
}