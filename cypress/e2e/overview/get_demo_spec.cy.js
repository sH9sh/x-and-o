describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://courses.letskodeit.com/practice');

        //findElement and findElements
        // Tag Name
        cy.get('button');

        //Id
        cy.get('#name');

        // Class Name
        cy.get('.inputs');

        // Attribute Value (input, class and placeholder are attributes)
        cy.get('[placeholder="Enter your name"]')

        // Class Value
        cy.get('[class="inputs displayed-class"]')

        // Tag Name and Attribute Value
        cy.get('input[id="name"]');

        // Tag Name And Multiple Attribute Value
        cy.get('input[id="name"][placeholder="enter your name"]')

        // Should attr / invoke alternative
  })
})

