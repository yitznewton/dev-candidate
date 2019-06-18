const neighborCoordinates = require('../src/conway').neighborCoordinates;

describe('neighbor coordinates', () => {
  const grid = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
  ];

  it('includes surrounding cells in the middle of the grid', () => {
    expect(new Set(neighborCoordinates(grid, 2, 2))).toEqual(new Set([
      [1,1],
      [1,2],
      [1,3],
      [2,1],
      [2,3],
      [3,1],
      [3,2],
      [3,3]
    ]));
  });

  it('does not go beyond zero on the grid', () => {
    expect(new Set(neighborCoordinates(grid, 0, 0))).toEqual(new Set([
      [0,1],
      [1,1],
      [1,0]
    ]));
  });

  it('does not go beyond the max of the grid', () => {
    expect(new Set(neighborCoordinates(grid, 4, 4))).toEqual(new Set([
      [4,3],
      [3,3],
      [3,4]
    ]));
  });
});
