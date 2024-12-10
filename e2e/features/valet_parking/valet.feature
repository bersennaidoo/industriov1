Feature: Valet Parking feature
  In order visit the airport  
  As car owner 
  I want park my car and be charged a fair price

  Scenario: Calculate Valet Parking Cost for half an hour
    Given There is a valet parking lot
    When I park my car in the Valet Parking Lot for 30 minutes 
    Then I will have to pay R 12.00