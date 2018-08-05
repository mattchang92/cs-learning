const eightQueens = () => {
  const validArrangements = [];

  const isValidPlacement = (board, col) => {
    const row = board.length;
    const isDiagonal = (eRow, eCol) => Math.abs(eRow - row) === Math.abs(eCol - col);

    for (let i = 0; i < board.length; i++) {
      if (row === i || col === board[i] || isDiagonal(i, board[i])) return false;
    }

    return true;
  };

  const placeQueens = (board = []) => {
    if (board.length === 8) {
      return validArrangements.push(board.slice());
    }

    for (let col = 0; col < 8; col++) {
      if (isValidPlacement(board, col)) {
        board.push(col);
        placeQueens(board);
        board.pop();
      }
    }
  };

  placeQueens();

  return validArrangements;
};

