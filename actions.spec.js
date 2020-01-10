/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it("Get header text", () => {
    cy.get(".container > div > h3").should("have.text", "Todos List");
  });
});

context('adding new todo', function () {
  it('accepts create input', () => {
    cy.visit('http://localhost:3000/create');
    cy.get('input[name="des"]').type('testing description');
    cy.get('input[name="res"]').type('testing responsibility')
    cy.get('input[name="highP"]').check();
    cy.get('input[name="submitButton"]').click();
  })

})

context('click updating button', function () {
  it('accepts update input', () => {
    cy.visit('http://localhost:3000/');
    cy.get('Link').first().click({ force: true }).then(data => {
      cy.log('Loginregerghrehreh successful')
    });
  })

})
context('updating todo', function () {
  it('update input', () => {
    cy.visit('http://localhost:3000/');
    cy.get('Link').first()
      .should('have.attr', 'to')
      .then((to) => {
        cy.visit("http://localhost:3000" + to);
        cy.get('input[name="todo_description"]').type('update description');
        cy.get('input[name="todo_responsible"]').type('update responsibility');
        cy.get('input[name="Low"]').check();
        cy.get('input[name="completedCheckbox"]').check();
        cy.get('input[name="updateButton"]').click();
      })

    //  cy.visit('http://localhost:3000/edit/:idhrthrth');   
    // cy.get('input[name="todo_description"]').type('update description');  
    // cy.get('input[name="todo_responsible"]').type('update responsibility');  
    // cy.get('input[name="Low"]').check();
    // cy.get('input[name="completedCheckbox"]').check();
    // cy.get('input[name="updateButton"]').click();   
  })

})
