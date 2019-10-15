function randomInt(minval, maxval) {
    //todo make this work for negative minvals

    return Math.floor((Math.random() * maxval) + minval);
}

function randomColor() {
    return Math.floor(Math.random()*16777215);
}