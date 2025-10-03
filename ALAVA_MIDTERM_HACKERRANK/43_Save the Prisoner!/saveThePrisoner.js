function saveThePrisoner(n, m, s) {
    let result = (s - 1 + m) % n;

    return result === 0 ? n : result;
}