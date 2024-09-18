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

Scenario Outline: Verify the cost of multiple travellers
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    And User verifies cheapest ticket
    But User edits the search for 2 travellers
    Then users gets the cost for 2 travellers
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |

Scenario Outline: Verify the cart count after changing URL
    Given User is at the booking page
    When User enters starting point as '<starting>', destination as '<destination>'
    And User clicks on find tickets button
    Then User gets result to the Website as per the requirement
    And User clicks on cart button in order to add
    And User changes the URL for Canada
    And User does not get the count in Add to Cart
    Examples:
        | starting                     | destination     |
        | Middlesbrough                | London          |



   