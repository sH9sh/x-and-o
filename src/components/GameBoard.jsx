

export default function GameBoard({ onSelectSquare, board = [] }) {
  
return (
  <ol id="game-board">
    {Array.isArray(board) ? (
      board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {Array.isArray(row) ? (
              row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button className="square" onClick={() => onSelectSquare(rowIndex, colIndex)} 
                          disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
              ))
            ) : (
              <li key={`row-error-${rowIndex}`}>Row data is not an array</li>
            )}
          </ol>
        </li>
      ))
    ) : (
      <li key="board-error">Board data is not an array</li>
    )}
  </ol>
);
}
