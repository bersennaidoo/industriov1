import Button from "./Button"

describe("Button", () => {

    it("should render a button", () => {
        const label = "Calculate"
        cy.mount(<Button  label={label} onCalculate={cy.stub().as("click")} />)

        cy.getByCy("button").contains(label).click()
        cy.get("@click").should("be.called")
    })
})