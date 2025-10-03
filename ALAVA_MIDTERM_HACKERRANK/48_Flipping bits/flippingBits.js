function flippingBits(n) {
    let allOnes = Math.pow(2, 32) - 1;
    let result = allOnes - n;

    return result;
}
