import Thumbnail from "./Thumbnail"

// In order to speed up my development
// As a developer
// I want to build a reusable thumbnail component
describe("Thumbnail", () => {

    it("should render a thumbnail", () => {

        const image = "images/200x200.png"
        const title = "product1"
        cy.mount(<Thumbnail image={image} title={title} />)

        cy.getByCy("thumbnail")
        .within(() => {
          cy.get("div")
          cy.get("p")
        })
    })
})