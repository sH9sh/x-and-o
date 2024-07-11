import React from 'react'
import GameBoard from './GameBoard'

describe('<GameBoard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameBoard />)
  })
})