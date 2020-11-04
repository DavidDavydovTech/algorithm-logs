// 

const trappingRainWater = (arr) => {
    if (arr.length < 3) return 0;
    let scans = arr.length - 2;
    let rainTrapped = 0;
    let occurrences = {}
    let unique = arr
        .filter((e, i) => {
            if (occurrences.hasOwnProperty(e)) {
                occurrences[e] += 1;
            } else {
                occurrences[e] = 1;
            }
            return arr.indexOf(e) === i;
        })
        .sort((a, b) => b - a);
    
    for (let height of Object.keys(occurrences)) {
        let count = occurrences[height];
        if (Math.floor(count / 2) > 0) {
            
        }
    }

    console.log(unique);
    console.log(occurrences)

    return rainTrapped;
}

let example = [5,0,5,4,1,2,0,2];
// let example = [5, 0, 0, 5];
console.log(trappingRainWater(example));