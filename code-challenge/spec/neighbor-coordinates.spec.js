const neighborCoordinates = require('../src/conway').neighborCoordinatesB;

describe('neighbor coordinates', () => {
  it('includes surrounding cells', () => {
    expect(new Set(neighborCoordinates(0, 0))).toEqual(new Set([
      [0,1],
      [1,1],
      [1,0],
      [1,-1],
      [-1,0],
      [-1,-1],
      [0,-1],
      [-1,1]
    ]));
  });
});
