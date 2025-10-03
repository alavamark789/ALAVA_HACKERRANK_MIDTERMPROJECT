function misereNim(s) {
    let allOnes = s.every(x => x === 1); 
    let xorSum = 0;

    for (let num of s) {
        xorSum ^= num; 
    }

    if (allOnes) {
        if (s.length % 2 === 0) {
            return "First";
        } else {
            return "Second"; 
        }
    } else {
        if (xorSum === 0) {
            return "Second";
        } else {
            return "First";
        }
    }
}
