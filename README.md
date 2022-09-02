# Cypress Getting started

## Intro sl (1-2)

- General about tech stack
- Git/Github
- JS/Node/npm
- typescript/vscode

## Git/Github sl (3-6)

- What is git?
- What problems it solve.
- What if github.
- Setup empty project local. <cy-playground>

## Git/Github sl (6-10)

- Git branch
- Git Merge
- Git Remote commands
- Git push project to remote

## Node.js sl (11)

- Install node
- Chekch the version

## NPM sl (12-13)

- Basic commands 
- Setup empty project with npm
- install cypress from npm register v9.6.1
- push changes to remote <cy-playground>

##

```sh
  mkdir cy-playground
  cd ./cy-playground
  npm init
  npm install cypress@9.6.1
```

## Cypress

- Run cypress
- Setup npm script
- Create new test file
- Visit the test application


[Application Live Demo](https://arnold-dad-st.github.io/paper-todo-app/)
[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)


# Create new test file

## Update npm script 

``` sh
  {
    "scripts": {
      "cypress:open": "cypress open"
    }
  }
```

## First test: Visit the site and check the title text

```sh
  /// <reference types="cypress" />

  describe('Todos App', () => { 
    beforeEach(() => {
      cy.visit('https://arnold-dad-st.github.io/paper-todo-app/')
    });

    it('should open the web site', () => {
        cy.get('[data-cy="title"]').contains('PaperTodo')
    });
  })
```


## Second test: Create new todos and check the update

``` sh
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
```


## Third test: Clear the state and check check empty placeholder

``` sh
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
```


### Links and docs.

| Name | Link |
| ------ | ------ |
| Download/Install Git | [git] |
| Download/Install Node | [node] |
| How to setup project with npm | [npmnew] |
| How to create reop with git | [gitnew] |
| cypress | [cypack] |
| typescript playground | [ts] |



   [git]: <https://git-scm.com/downloads>
   [node]: <https://nodejs.org/en/>
   [npmnew]: <https://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_a_new_project.html>
   [gitnew]: <https://kbroman.org/github_tutorial/pages/init.html>
   [cypack]: <https://www.npmjs.com/package/cypress>
   [ts]: <https://www.typescriptlang.org/play>