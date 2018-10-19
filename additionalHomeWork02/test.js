/* eslint max-nested-callbacks: ["error", 4] */
const expect = require('expect.js');
const { pickPeaks, whoIsNext } = require('./functions.js');

describe('Lesson 2.5', () => {
  describe('function pickPeaks', () => {
    it('should normally get the value of peak and pos', () => {
      expect(pickPeaks([0, 7, 5, 2, 1, 4])).to.eql({ pos: [1], peaks: [7] });
      expect(pickPeaks([0, 7, 6, 1, 7, 0])).to.eql({ pos: [1, 4], peaks: [7, 7] });
    });
    it('should get the value of peak and pos for plateaus peak', () => {
      expect(pickPeaks([0, 7, 7, 7, 7, 0])).to.eql({ pos: [1], peaks: [7] });
    });
    it('shouldn`t get the value of peak and pos for plateaus peak', () => {
      expect(pickPeaks([0, 7, 7, 7, 7, 8])).to.eql({ pos: [], peaks: [] });
    });
    it('shouldn`t get the value of peak and pos for empty array', () => {
      expect(pickPeaks([])).to.eql({ pos: [], peaks: [] });
    });
  });

  describe('function whoIsNext', () => {
    const queue = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

    it('should normally get the person in queues', () => {
      expect(whoIsNext(queue, 1)).to.be('Sheldon');
      expect(whoIsNext(queue, 5)).to.be('Howard');
      expect(whoIsNext(queue, 52)).to.eql('Penny');
      expect(whoIsNext(queue, 7230702951)).to.eql('Leonard');
    });
  });
});
