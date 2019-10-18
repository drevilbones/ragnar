function randomInt(minval, maxval) {
    if (minval < 0) {
        maxval = maxval + (minval * -1);
    }

    return Math.floor((Math.random() * maxval) + minval);
}

function randomColor() { //idk why this works, math is weird
    return Math.floor(Math.random()*16777215);
}