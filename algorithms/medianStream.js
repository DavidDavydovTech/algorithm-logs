// The 'Median Stream' problem.

// Given a stream of unordered integers, find the median of the stream. 
// We will be asked to find the median multiple times, so the peekMedian
// function should have optimal time complexity.

// The "median" is the middle number of a sorted, odd-length set or
// the average of the two middle numbers in a sorted, even-length set.

// Examples:

// [1, 4, 8]
// Median is 4 (middle number)

// [1, 3, 7, 8]
// Median is 5 (average of two middle numbers)

const peekMedian = (arr) => {
    const sortedArr = arr.sort((a,b) => a - b);
    const len = sortedArr.length;
    switch(true) {

    }
}

module.exports = peekMedian;