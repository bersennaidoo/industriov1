import  Header  from "./Header"

// In order to have introductory information and navigation
// As developer 
// I want a header component to span all the pages of the site
describe("Header", () => {

    it("Should render a header", () => {
        
        // render component
        cy.mount(<Header />)
        
        // get element identified by header attr
        cy.getByCy("header")
          .within(() => {
            cy.get("img")
            cy.get("h1")
          })
    })
})