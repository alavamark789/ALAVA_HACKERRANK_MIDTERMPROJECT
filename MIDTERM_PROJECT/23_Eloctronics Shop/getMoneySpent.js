function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;

    for (let k of keyboards) {
        for (let d of drives) {
            let total = k + d;
            if (total <= b && total > maxSpent) {
                maxSpent = total;
            }
        }
    }

    return maxSpent;
}
