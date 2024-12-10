Feature: Earning points from flights

  Scenario: Flights within Europe earn 100 points
    Given "Tara" is a "Stardard" Frequent Flyer member
    When she flies from Paris and Berlin in Economy class
    Then should earn 100 points