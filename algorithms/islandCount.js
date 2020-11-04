// The "Island Count" Problem

// Given a two dimensional array of 1s and 0s, count the number of 
// "islands" of 1s.

// An "island" is a group of adjacent values that are all 1s. Every cell 
// in the array can be adjacent to the two values that are next to it in 
// the same dimension or the two that share it's index in a neighboring dimension.

const islandCount = (arr, land = 1) => {
    let cnt = 0;
    let map = [];

    const traceIsland = (x,y) => {
        map[y][x] = undefined;
        let directions = [
            {
                newX: x - 1,
                newY: y,
            },
            {
                newX: x + 1,
                newY: y,
            },
            {
                newX: x,
                newY: y - 1,
            },
            {
                newX: x,
                newY: y + 1,
            }
        ]
        for (let direction of directions) {
            const { newX, newY } = direction;
            if (map[y][x] === 1) {
                traceIsland(x,y)
            }
        }
    }

    for (let sub of arr) {
        map.push([...sub]);
    }

    for (let rowIndex in map) {
        let row = map[rowIndex];
        for (let tileIndex in row) {
            let tile = row[tileIndex];
            if (tile === 1) {
                cnt += 1;
                traceIsland(tileIndex, rowIndex);
            }
        }
    }

    return cnt;
}

module.exports = islandCount;