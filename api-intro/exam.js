function function1(x) {
    let r = 1;
    r += x;
    if (x > 4 && x < 10) {
        r += 2 * x;
    } else if (x <= 4) {
        r + 3 * x;
    } else {
        r += 4 * x;
    }
    return r;
}

console.log(function1(10));