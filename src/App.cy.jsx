import React from 'react'
import App from './App'

describe('<App />', () => {

  beforeEach(() => {
    cy.mount(<App />);
  });

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })

  it('renders the initial player names', () => {
    cy.get('.player-name').eq(0).should('have.text', 'Player 1');
    cy.get('.player-name').eq(1).should('have.text', 'Player 2');
  });

  it('allows player names to be edited', () => {
    cy.contains('button', 'Edit').eq(0).click();
    cy.get('input').eq(0).clear().type('Sean');
    cy.contains('button', 'Save').eq(0).click();
    cy.get('.player-name').eq(0).should('have.text', 'Sean');
  });

  it('highlights the active player', () => {
    cy.get('li').eq(0).should('have.class', 'active');
    cy.get('li').eq(1).should('not.have.class', 'active');
  });

  it('updates the board and switches active player on square selection', () =>{
    cy.get('button.square').eq(0).click();
    cy.get('button.square').eq(0).should('have.text', 'X');
    cy.get('li').eq(1).should('have.class', 'active');
  });

  it('detects a winner and displays GameOver component', () => {
    cy.get('button.square').eq(0).click();
    cy.get('button.square').eq(3).click();
    cy.get('button.square').eq(1).click();
    cy.get('button.square').eq(4).click();
    cy.get('button.square').eq(2).click();

    cy.contains('Game Over').should('be.visible');
    cy.contains('Player1 won!').should('be.visible');
    
  });

  it('restarts the game when restart button is clicked', () => {
    cy.get('button.square').eq(0).click();
    cy.get('button.square').eq(1).click();
    cy.contains('button', 'Rematch!').click();
    cy.get('button.square').each(square => {
      cy.wrap(square).should('have.text', '');
    });
    cy.get('li').eq(0).should('have.class', 'active');

  });

  it('detects a draw', () => {
    cy.get('button.square').eq(0).click();
    cy.get('button.square').eq(1).click();
    cy.get('button.square').eq(2).click();
    cy.get('button.square').eq(3).click();
    cy.get('button.square').eq(4).click();
    cy.get('button.square').eq(5).click();
    cy.get('button.square').eq(6).click();
    cy.get('button.square').eq(7).click();
    cy.get('button.square').eq(8).click();

    cy.contains('Game Over!').should('be visible');
  })
});