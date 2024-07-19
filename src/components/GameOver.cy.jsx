import React from 'react'
import GameOver from './GameOver'

describe('<GameOver />', () => {
  it('should have text game over', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameOver />)
    
    cy.get('#game-over').should('have.text', 'Game Over!It\'s a draw!Rematch!')
  });


  it('should click rematch button', () => {
    cy.mount(<GameOver/>)

    cy.get('button').click();
  })
})