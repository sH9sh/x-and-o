import React from 'react'
import Player from './Player'

describe('<Player />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Player />)
  })
})