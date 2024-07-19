import React from "react";
import GameBoard from "./GameBoard";

describe("<GameBoard />", () => {
  let mockOnSelectSquare;

  beforeEach(() => {
    mockOnSelectSquare = cy.stub();
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameBoard />);
  });

  it("it renders the game board correctly with valid data", () => {
    const board = [
      [null, "X", "O"],
      ["O", "X", null],
      ["X", null, "O"],
    ];

    cy.mount(<GameBoard onSelectSquare={mockOnSelectSquare} board={board} />);

    cy.get("#game-board li > ol > li button").eq(0).click();
    cy.wrap(mockOnSelectSquare).should("have.been.calledOnceWith", 0, 0);

    cy.get("#game-board li > ol > li button").eq(5).click();
    cy.wrap(mockOnSelectSquare).should("have.been.calledWith", 1, 2);
  });

  it("renders error message when the board is not an array", () => {
    cy.mount(<GameBoard onSelectSquare={mockOnSelectSquare} board={null} />);
    cy.get("#game-board li").should(
      "contain.text",
      "Board data is not an array"
    );
  });
});
