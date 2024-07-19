import React from 'react'
import Log from './Log'

describe('<Log />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Log />)
  })

  it('renders log entries correctly', () => {
    // Arrange
    const turns = [
      { player: 'Player 1', square: {row: 1, col: 2}},
      { player: 'Player 2', square: {row: 2, col: 3}},
    ];

    // Act
    cy.mount(<Log turns={turns}/>);

    // Assert

    cy.get('#log li').should('have.length', turns.length);
    cy.get('#log li').eq(0).should('contain.text', 'Player 1 selected 1, 2');
    cy.get('#log li').eq(1).should('contain.text', 'Player 2 selected 2, 3');

  })

  it('renders no entries when turns is an empty array', () => {
    cy.mount(<Log turns={[]} />);

    cy.get('#log li').should('have.length', 0);

  });
})