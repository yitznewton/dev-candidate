const conway = require('../src/conway').conway;

describe("Conway's Game of Life", () => {
  describe('Blinker, period 2', () => {
    const initialState = [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0]
    ];

    const alternateState = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ];

    it('generates expected second state', () => {
      expect(conway(initialState)).toEqual(alternateState);
    });

    it('oscillates back to initial state', () => {
      expect(conway(conway(initialState))).toEqual(initialState);
    });
  });
});
