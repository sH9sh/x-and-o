import React from 'react'
import Log from './Log'

describe('<Log />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Log />)
  })
})