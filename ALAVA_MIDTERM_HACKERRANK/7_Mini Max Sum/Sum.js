function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);

    console.log(minSum + " " + maxSum);
}

