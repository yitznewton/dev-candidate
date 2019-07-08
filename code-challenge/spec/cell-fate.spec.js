const cellFate = require('../src/conway').cellFate;

describe('cell fate', () => {
  describe('live cell with zero live neighbors', () => {
    it('dies', () => {
      expect(cellFate(1, 0)).toEqual(0);
    });
  });

  describe('live cell with two live neighbors', () => {
    it('remains alive', () => {
      expect(cellFate(1, 2)).toEqual(1);
    });
  });

  describe('live cell with three live neighbors', () => {
    it('lives', () => {
      expect(cellFate(1, 3)).toEqual(1);
    });
  });

  describe('live cell with more than three live neighbors', () => {
    it('dies', () => {
      expect(cellFate(1, 4)).toEqual(0);
    });
  });

  describe('dead cell with two live neighbors', () => {
    it('remains dead', () => {
      expect(cellFate(0, 2)).toEqual(0);
    });
  });

  describe('dead cell with three live neighbors', () => {
    it('comes alive', () => {
      expect(cellFate(0, 3)).toEqual(1);
    });
  });
});
