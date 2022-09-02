/// <reference types="cypress" />

describe('Todos App', () => { 
  beforeEach(() => {
    cy.visit('https://arnold-dad-st.github.io/paper-todo-app/')
  });

  it('should open the web site', () => {
      cy.get('[data-cy="title"]').contains('PaperTodo')
  });

  it('should create new todo items', () => {
    cy.get('[data-cy="todo-input"]').type('New todo item 1');

    cy.get('[data-cy="submit-btn"]').click();

    cy.get('[data-cy="todo-input"]').type('New todo item 2');

    cy.get('[data-cy="submit-btn"]').click();


    cy.get('[data-cy="todos"] li')
      .should("have.length", 2)
      .last()
      .should("have.text", "New todo item 2")
  });

  it('should remove all todos', () => {
    cy.get('[data-cy="todo-input"]').type('New todo item 1');

    cy.get('[data-cy="submit-btn"]').click();

    cy.get('[data-cy="todo-input"]').type('New todo item 2');

    cy.get('[data-cy="submit-btn"]').click();

    cy.get('[data-cy="todos"] li')
      .should("have.length", 2)

    cy.get('[data-cy="clear-btn"]').click();

    cy.get('[data-cy="todos"] li')
    .should("have.length", 0)

    cy.get('[data-cy="placeholder"]').should("have.text", 'Chill scenes.');
    
  });
})