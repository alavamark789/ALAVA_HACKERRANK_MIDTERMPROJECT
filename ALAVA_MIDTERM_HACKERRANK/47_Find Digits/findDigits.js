function findDigits(n) {
    let count = 0;
    let strNum = n.toString(); 

    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i]);

        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }

    return count;
}
