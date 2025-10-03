function migratoryBirds(arr) {
  let freq = {};

    for (let bird of arr) {
        freq[bird] = (freq[bird] || 0) + 1;
    }

    let maxCount = 0;
    let minBirdId = Infinity;

    for (let bird in freq) {
        if (
            freq[bird] > maxCount || 
            (freq[bird] === maxCount && parseInt(bird) < minBirdId)
        ) {
            maxCount = freq[bird];
            minBirdId = parseInt(bird);
        }
    }

    return minBirdId;
}
