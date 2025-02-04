function makebetweenfunc(min, max) {
    return function (num) {
        return (min <= num && max >= num);
    };
}
let btw1 = makebetweenfunc(10, 20);
console.log(btw1(15));
console.log(btw1(25));

// methods definition
const math = {
    pi: 3.14,
    sum: function (x, y) {
        return x + y;
    },
    square(num) {   //shorthand property
        return num ** 2;
    }
}
console.log(math.pi);
console.log(math.sum);//returns the whole function
console.log(math.sum(10, 15));//execting the methods
console.log(math.square(25));
