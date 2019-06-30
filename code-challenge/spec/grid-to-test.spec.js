const gridToTest = require('../src/conway').gridToTest;

describe('deriving grid to test', () => {
  it('', () => {
    const liveCensus = {
      1: [3],
      4: [1]
    };

    expect(gridToTest(liveCensus)).toEqual({x: [0,1,2,3,4], y: [0,1,2,3,4,5]})
  });
});
