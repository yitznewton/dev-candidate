const _ = require('lodash');
const jsc = require('jsverify');
const nextGeneration = require('../src/conway').nextGeneration;

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
      expect(nextGeneration(initialState)).toEqual(alternateState);
    });

    it('oscillates back to initial state', () => {
      expect(nextGeneration(nextGeneration(initialState))).toEqual(initialState);
    });
  });

  describe('Toad, period 2', () => {
    const initialState = [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,1,1,1,0],
      [0,1,1,1,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ];

    const alternateState = [
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,1,0,0,1,0],
      [0,1,0,0,1,0],
      [0,0,1,0,0,0],
      [0,0,0,0,0,0]
    ];

    it('generates expected second state', () => {
      expect(nextGeneration(initialState)).toEqual(alternateState);
    });

    it('oscillates back to initial state', () => {
      expect(nextGeneration(nextGeneration(initialState))).toEqual(initialState);
    });
  });

  describe('properties', () => {
    it('is composed of cells containing only 0 or 1', () => {
      const allCellsContainZeroOrOne = jsc.forall(
        'nearray (nearray (integer 0 1))',
        initialGrid => {
          const finalGrid = nextGeneration(nextGeneration(nextGeneration(nextGeneration(initialGrid))));
          return _(finalGrid).flatten().every(cellValue => cellValue === 0 || cellValue === 1);
        }
      );

      jsc.assert(allCellsContainZeroOrOne);
    });
  });
});
