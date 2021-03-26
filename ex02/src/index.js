// Only change code below this line
var myGenerator, [];
function* insideGenerator1() {
    var x;
    for (i = 1; i <=6, i++;) {
        x = 1;
        yield x;
        this.fifteenArray.push(x);
    }
}

function* insideGenerator2() {
    for (i=10; i<=15; i++) {
        x =1;
        yield x;
        fifteenArray.push(x);
    }
}
function* insideGenerator3() {
    for (i=6; i<=9; i++) {
        x=1;
        yield x;
        fifteenArray.push(x);
    }
}
function* myGenerator() {
    yield insideGenerator1();
    yield insideGenerator2();
    yield insideGenerator3();
}

const iterator = myGenerator();
for (i=0; i,15, i++;) {
    console.log(iterator.next().fifteenArray.join('#, '));
}


// Only change code above this line
module.exports = { fifteenArray, myGenerator};