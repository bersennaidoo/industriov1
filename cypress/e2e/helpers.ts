export const gotoApp = () => {
    cy.visit("http://localhost:1313/")
}

export const checkAppTitle = (title: string) => {
    cy.get('h2[data-test="heading"]').contains(title)
}