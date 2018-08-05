const paintFill = (screen, rowVal, colVal, color) => {
  const originalColor = screen[rowVal][colVal];

  const pointIsValid = (coordinate) => {
    const row = coordinate[0];
    const col = coordinate[1];
    return (row >= 0 && row < screen.length) && (col >= 0 && col < screen[0].length);
  };

  const getNeighbors = (row, col) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    return directions.map(d => [row + d[0], col + d[1]])
      .filter(p => pointIsValid(p));
  };

  const fill = (row, col) => {
    const neighbors = getNeighbors(row, col);

    neighbors.forEach((neighbor) => {
      const r = neighbor[0];
      const c = neighbor[1];
      if (screen[r][c] === originalColor) {
        screen[r][c] = color;
        fill(r, c);
      }
    });
  };

  fill(rowVal, colVal);

  return screen;
};

