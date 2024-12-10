// In order to purchase items
// As a customer
// I want to view items
describe("View Items", () => {

    it("should display a list of items", () => {

        // Customer visits coffeeshop
        cy.visit("/coffeeshop")

        // Customer see a list of items to purchase
        cy.getByCy("thumbnail").should("be.visible")
    })
})

/*
// A user logs in to search and browse items to buy
describe("Login", () => {
    // In order to search, browse and buy items
    // As customer 
    // I want to login
    it("should allow the user to navigate to the login page and login", () => {
        
        // user visits site and is presented with navigation for the coffeeshop 
        // to navigate to login page
        // and login by filling form in
        cy.visit("/")
        cy.findByRole("link", { name: /CoffeeShop/i }).click()
        cy.findByRole("link", { name: /Log In/i }).click()
        cy.findByLabelText(/Username/i).type("Alice")
        cy.findByLabelText(/Password/i).type("pass")
        cy.findByRole("button", { name: /Log In/i }).click()
        cy.findByRole("link", { name: /Log In/i }).should("not.exist")
        cy.findByText(/Alice/i)
        // System should respond with 'successfully logged in'
        // and redirect to search and browse page to browse items and
        // purchase items
        
    })
})

// In order to pay for my items
// As a customer
// I want to checkout my items
describe("Checkout", () => {

    it("should allow the user to checkout", () => {

        // user adds items to cart and then user navigates to 
        // cart page and checks out
    })
})

// In order to get the exact items i want
// As a customer
// I want to view my orders and delete orders i don't want
describe("Orders", () => {

    it("should allow the customer to view their items in cart and delete items from cart", () => {

        // customer visits cart page after shopping and views her items
        // and decides to delete some items

        // the system should update cart items according to user action and confirm update
    })
})*/
