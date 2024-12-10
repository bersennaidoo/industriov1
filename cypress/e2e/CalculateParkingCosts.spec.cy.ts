describe('Calculate Parking Cost', () => {

  // A user visits home page
  it("should display the home page with a link to parking calculation link", () => {
    
    // user visits home page
    cy.visit('http://localhost:1313')
    cy.get("nav").contains("Parking Calculation")
  })

  // A user wants to calculate parking cost for 30 minutes
  it("should calculate parking cost for 30 minutes", () => {
    // user visits calculation page
    cy.visit("http://localhost:1313/parking_calc")

    // user see form with radio buttons for valet parking, short term parking and long term parking
    // user checks radio button for valet parking and fills form with duration of parking and submits
    cy.get("input[type='radio']").first().check()
    cy.get("input[type='text']").type("30")
    cy.get("#calc-button").click()

    // software displays amount for parking
    cy.get("#cost").contains("R12.00")
  })
})