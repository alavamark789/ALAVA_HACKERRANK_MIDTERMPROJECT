function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let apple of apples) {
        let position = a + apple;
        if (position >= s && position <= t) {
            appleCount++;
        }
    }

    for (let orange of oranges) {
        let position = b + orange;
        if (position >= s && position <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}





