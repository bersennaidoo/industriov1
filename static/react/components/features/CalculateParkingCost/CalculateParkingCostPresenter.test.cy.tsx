import CalculateParkingCostPresenter from "./CalculateParkingCostPresenter"

describe("CalculateParkingCostPresenter", () => {

    it("should render a form for calculating parking cost", () => {

        cy.mount(<CalculateParkingCostPresenter />)

        cy.get("form").contains("formcontrol")
    })
})