const bubbleSort = function (arr) {
    const res = [...arr];
    let count = 0;
    
    for (let i in res) {
        for (let j = 0; j < res.length; j += 1) {
            const currentValue = res[j];
            if (res[j + 1] !== undefined && currentValue > res[j + 1]) {
                res[j] = res[j + 1];
                res[j + 1] = currentValue
                count += 1;
            }
        }
    }
    
    return res;
}

module.exports = bubbleSort;