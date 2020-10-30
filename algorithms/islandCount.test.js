const islandCount = require('./islandCount');

describe('Edge Cases', () => {
    describe('Throw an error for the following invalid cases:', () => {
        test('', () => {

        });
    });
    describe('Return 0 for the following invalid cases:', () => {
        test('', () => {

        });
    });
});
describe('Functionality', () => {
    test('It should consider 1s land:', () => {
        expect(islandCount([
            [ 1, 0 ], 
            [ 0, 0 ]
        ])).toBe(1);
    });
    test('It should consider two 1s left or right of eachother to be one island:', () => {
        expect(islandCount([
            [1, 1, 0], 
            [0, 0, 0], 
            [0, 1, 1]
        ])).toBe(2);
    });
    test('It should consider two 1s above or below eachother to be one island:', () => {
        expect(islandCount([
            [1, 0, 0], 
            [1, 0, 1], 
            [0, 0, 1]
        ])).toBe(2);
    });
    test('It should not consider two 1s diagonal to one another to be on island:', () => {
        expect(islandCount([
            [1, 0, 1], 
            [0, 1, 0], 
            [1, 0, 1]
        ])).toBe(5);
        expect(islandCount([
            [0, 1, 0], 
            [1, 0, 1], 
            [0, 1, 0]
        ])).toBe(4);
    });
    test('It should work for complex shapes:', () => {
        expect(islandCount([
            [0, 1, 1, 1, 1, 1], 
            [0, 1, 0, 0, 1, 0], 
            [1, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 0]
        ])).toBe(3);
    });
});
describe('Bugs', () => {});