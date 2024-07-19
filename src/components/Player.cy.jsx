import React from "react";
import Player from "./Player";

describe("<Player />", () => {
  beforeEach(() => {
    cy.mount(
      <Player
        initialName="Sean"
        symbol="X"
        isActive={false}
        onChangeName={() => {}}
      />
    );
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Player />);
  });

  it("displays the initial player name", () => {
    cy.get(".player-name").should("have.text", "Sean");
  });

  it("displays the player symbol", () => {
    cy.get(".player-symbol").should("have.text", "X");
  });

  it("shows input field when edit button is clicked", () => {
    cy.contains("button", "Edit").click();
    cy.get("input").should("have.value", "Sean");
  });

  it("changes player name when saved", () => {
    const onChangeName = cy.stub().as("onChangeName");
    cy.mount(
      <Player
        initialName="Sean"
        symbol="X"
        isActive={false}
        onChangeName={onChangeName}
      />
    );

    cy.contains('button', 'Edit').click();
    cy.get('input').clear().type('Bob');
    cy.contains('button', 'Save').click();
    cy.get('@onChangeName').should('have.been.calledWith', 'X', 'Bob');
    cy.get('.player-name').should('have.text', 'Bob');
  });
});
