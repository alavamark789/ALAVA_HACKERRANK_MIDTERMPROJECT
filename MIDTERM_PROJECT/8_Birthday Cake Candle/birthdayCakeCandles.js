function birthdayCakeCandles(candles) {
    let highestNum = 0;
    let count = 0;

 
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > highestNum) {
            highestNum = candles[i];
        }
    }

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === highestNum) {
            count++;
        }
    }

    return count;
}



