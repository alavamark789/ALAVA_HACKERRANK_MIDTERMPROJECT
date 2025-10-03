function catAndMouse(x, y, z) {
    let distCatA = Math.abs(z - x);
    let distCatB = Math.abs(z - y);

    if (distCatA < distCatB) {
        return "Cat A";
    } else if (distCatB < distCatA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
