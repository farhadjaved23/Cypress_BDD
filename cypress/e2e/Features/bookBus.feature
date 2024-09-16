Feature: Booking Bus

   Scenario Outline: Display the bus information after giving testdata
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |

Scenario Outline: Verify the travel time
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    And User verifies the travel time of the given result
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |

Scenario Outline: Verify the count of search result
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    And User verifies the the count of search result
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |

Scenario Outline: Verify the cheapest ticket after sort
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    And User verifies cheapest ticket
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |