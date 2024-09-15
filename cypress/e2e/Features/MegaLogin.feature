Feature: Login

    Scenario Outline: Login to Megabus Website

        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User gets '<result>' to the Website
        Examples:
            | username                     | password     | result  |
            | megatester@mailinator.com    | Megabus12345 | success |
            | dummytester@mailinator.com   | Megabus12345 | error   |