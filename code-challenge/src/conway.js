const _ = require('lodash');

exports.nextGeneration = (liveCensus) => {
  const grid = gridToTest(liveCensus);

  return _(grid.x).flatMap(x => grid.y.map(y => {
    const ns = neighborSum(liveCensus, neighborCoordinates(x, y));
    return [[x,y], cellFate(cellValue(liveCensus, x, y), ns)];
  })).filter(([coords, fate]) => fate === 1).reduce((cum, [[xx,yy]]) => {
    addLiveCell(cum, xx, yy);
    return cum;
  }, {});
};

const gridToTest = exports.gridToTest = (liveCensus) => {
  const yCoords = Object.keys(liveCensus).map(x => parseInt(x));
  const xCoords = _(Object.values(liveCensus)).flatten().value();

  return {
    x: _.range(Math.min(...xCoords) - 1, Math.max(...xCoords) + 2),
    y: _.range(Math.min(...yCoords) - 1, Math.max(...yCoords) + 2)
  };
};

const neighborSum = (liveCensus, neighborCoordinates) => {
  return neighborCoordinates.map(([x,y]) => {
    return (_(liveCensus[x]).includes(y)) ? 1 : 0;
  }).reduce((cum, cur) => cum + cur);
};

const neighborCoordinates = exports.neighborCoordinatesB = (x, y) => {
  return potentialNearbyCells(x, y).filter(([i,j]) => i !== x || j !== y);
};

const potentialNearbyCells = (x, y) => {
  return _(_.range(x-1, x+2)).flatMap(i => {
    return _.range(y-1, y+2).map(j => [i,j]);
  });
};

const cellFate = exports.cellFate = (initialValue, neighborSum) => {
  if (initialValue === 0) {
    return (neighborSum === 3) ? 1 : 0;
  }

  return (neighborSum > 1 && neighborSum < 3) ? 1 : 0;
};

const cellValue = (liveCensus, x, y) => {
  return (_(liveCensus[x]).includes(y)) ? 1 : 0;
};

const addLiveCell = (liveCensus, x, y) => {
  if (typeof liveCensus[x] === 'undefined') {
    liveCensus[x] = [];
  }

  liveCensus[x].push(y);
};
