/**
 * To solve a sudoku board
 *
 * @param {Array<Number<NUmber>>} board the soduko board in form of a two
 *                                      dimensional array
 * @return {Boolean} whether it is solvable or not
 */
function solveSudoku(board) {
  const emptyCell = findEmptyCell(board);

  if (!emptyCell) {
    return true;
  }

  const [row, col] = emptyCell;

  for (let num = 1; num <= 9; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      // Recursively try to sovle the puzzle
      if (solveSudoku(board)) {
        return true;
      }

      // if the current placement doesn't lead to a solution, backtrack
      board[row][col] = 0;
    }
  }

  // No solution found
  return false;
}

function findEmptyCell(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }

  return null; // All cells are filled
}

function isSafe(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

if (solveSudoku(puzzle)) {
  console.log('Solved Sudoku:');
  console.log(puzzle);
} else {
  console.log("No solution exists.");
}
