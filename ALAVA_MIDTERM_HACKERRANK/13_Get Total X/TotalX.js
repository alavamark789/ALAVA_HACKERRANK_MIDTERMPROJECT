function getTotalX(a, b) {
    let count = 0;

    for (let num = Math.max(...a); num <= Math.min(...b); num++) {
        if (a.every(x => num % x === 0) && b.every(x => x % num === 0)) {
            count++;
        }
    }

    return count;
}
