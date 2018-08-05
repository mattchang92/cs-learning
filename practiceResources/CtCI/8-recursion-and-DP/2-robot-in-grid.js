const getPath = (grid, row, col, path, failedPaths) => {
  if (row < 0 || col < 0) return false;
  if (!grid[row][col]) return false;
  if (row === 0 && col === 0) {
    path.push([0, 0]);
    return true;
  }

  if (failedPaths[row][col]) return false;

  if (getPath(grid, row - 1, col, path) || getPath(grid, row, col - 1, path)) {
    path.push([col, row]);
    return true;
  }

  failedPaths[row][col] = true;
  return false;
};

const findPath = (grid, row, col) => {
  const failedPaths = [];
  const path = [];

  getPath(grid, row, col, path, failedPaths);
};

