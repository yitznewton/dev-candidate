const _ = require('lodash');

exports.nextGeneration = (grid) => {
  return grid.map((row, x) => row.map((cellValue, y) => {
    const ns = neighborSum(grid, neighborCoordinates(grid, x, y));
    return cellFate(cellValue, ns);
  }));
};

const neighborCoordinates = exports.neighborCoordinates = (grid, x, y) => {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  return potentialNearbyCells(grid, x, y).filter(neighborFilter(gridHeight, gridWidth, x, y));
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

const potentialNearbyCells = (grid, x, y) => {
  return _(_.range(x-1, x+2)).flatMap(i => {
    return _.range(y-1, y+2).map(j => [i,j]);
  });
};

const neighborFilter = (gridHeight, gridWidth, x, y) => {
  return ([i,j]) => {
    if (i < 0 || j < 0) {
      return false;
    }

    if (i > gridHeight-1 || j > gridWidth-1) {
      return false;
    }

    return i !== x || j !== y;
  };
};
