function repeatedString(s, n) {
    let countA = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            countA++;
        }
    }
    let fullRepeats = Math.floor(n / s.length);
    
    let totalA = fullRepeats * countA;

    let remainder = n % s.length;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') {
            totalA++;
        }
    }
    return totalA;
}
