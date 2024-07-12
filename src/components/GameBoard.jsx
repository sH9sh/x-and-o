

export default function GameBoard({ onSelectSquare, board = [] }) {
  
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return updatedBoard;
//     });

//     onSelectSquare();
//   }
return (
  <ol id="game-board">
    {Array.isArray(board) ? (
      board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {Array.isArray(row) ? (
              row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
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
