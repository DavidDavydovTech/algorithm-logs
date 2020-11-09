const peakMedian = require('./medianStream');

describe('Functionality', () => {
    test('It should work for arrays of length 1:', () => {
        expect(peakMedian([0])).toBe(0);
        expect(peakMedian([7])).toBe(7);
        expect(peakMedian([2])).toBe(2);
        expect(peakMedian([9])).toBe(9);
    });
    test('It should work for arrays of length 2:', () => {
        expect(peakMedian([0,3])).toBe(1.5);
        expect(peakMedian([7,9])).toBe(8);
        expect(peakMedian([2,3])).toBe(2.5);
        expect(peakMedian([9,28])).toBe(18.5);
    });
    test('It should work for larger arrays of even length:', () => {
        expect(peakMedian([1,2,3,4,5,6,7,8,9,10])).toBe(5.5);
    });
    test('It should work for larger arrays of odd length', () => {
        expect(peakMedian([0,1,2,3,4,5,6,7,8,9,10])).toBe(5);
    });
    test('It should work for unsorted arrays', () => {
        expect(peakMedian([0,10,1,9,2,8,3,7,4,6,5])).toBe(5);
    });
});