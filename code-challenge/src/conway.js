exports.conway = (grid) => {
  return grid.map((row, x) => row.map((cellValue, y) => {
    const ns = neighborSum(grid, neighborCoordinates(grid, x, y));
    return cellFate(cellValue, ns);
  }));
};

const neighborCoordinates = exports.neighborCoordinates = (grid, x, y) => {
  const ret = [];
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  for (let i = x-1; i < x+2; i++) {
    for (let j = y-1; j < y+2; j++) {
      if (i < 0 || j < 0) {
        continue;
      }

      if (i > gridHeight-1 || j > gridWidth-1) {
        continue;
      }

      if (i === x && j === y) {
        continue;
      }

      ret.push([i,j]);      
    }
  }

  return ret;
};

const cellFate = exports.cellFate = (initialValue, neighborSum) => {
  if (initialValue === 0) {
    return (neighborSum === 3) ? 1 : 0;
  }

  return (neighborSum > 1 && neighborSum < 3) ? 1 : 0;
};

const neighborSum = (grid, neighborCoordinates) => {
  return neighborCoordinates.map(([x, y]) => grid[x][y])
    .reduce((cum, cur) => cum + cur, 0);
};
