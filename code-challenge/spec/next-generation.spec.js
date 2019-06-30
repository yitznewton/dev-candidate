const _ = require('lodash');
const nextGeneration = require('../src/conway').nextGeneration;

describe("Conway's Game of Life", () => {
  describe('Blinker, period 2', () => {
    const initialState = {
      1: [2],
      2: [2],
      3: [2],
    };

    const alternateState = {
      2: [1,2,3]
    };

    it('generates expected second state', () => {
      expect(nextGeneration(initialState)).toEqual(alternateState);
    });

    it('oscillates back to initial state', () => {
      expect(nextGeneration(nextGeneration(initialState))).toEqual(initialState);
    });
  });

  describe('Toad, period 2', () => {
    const initialState = {
      2: [2,3,4],
      3: [1,2,3]
    };

    const alternateState = {
      1: [3],
      2: [1,4],
      3: [1,4],
      4: [2]
    };
    it('generates expected second state', () => {
      expect(nextGeneration(initialState)).toEqual(alternateState);
    });

    it('oscillates back to initial state', () => {
      expect(nextGeneration(nextGeneration(initialState))).toEqual(initialState);
    });
  });
});
