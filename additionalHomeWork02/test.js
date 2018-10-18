// Type your tests here
const expect = require('expect.js');
const { pickPeaks, whoIsNext } = require('./functions.js');

describe('Lesson 2.5', () => {
  describe('function pickPeaks', () => {
    it('should get the value of peak and pos for one peak', () => {
      expect(pickPeaks([0, 7, 5, 2, 1, 4])).to.eql({ pos: [1], peaks: [7] });
    });

    it('should get the value of peak and pos for two peak', () => {
      expect(pickPeaks([0, 7, 6, 1, 7, 0])).to.eql({ pos: [1, 4], peaks: [7, 7] });
    });
    it('should get the value of peak and pos for plateaus peak', () => {
      expect(pickPeaks([0, 7, 7, 7, 7, 0])).to.eql({ pos: [1], peaks: [7] });
    });
    it('shouldn`t get the value of peak and pos for plateaus peak', () => {
      expect(pickPeaks([0, 7, 7, 7, 7, 8])).to.eql({ pos: [], peaks: [] });
    });
  });

  describe('function whoIsNext', () => {

  });
});