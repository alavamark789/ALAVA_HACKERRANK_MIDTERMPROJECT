function sockMerchant(n, ar) {
   let sockCount = {};
    let pairs = 0;

    for (let sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }

    for (let count of Object.values(sockCount)) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}
