"use strict";
console.log("hey Typescript!");
function MyFn(val1, val2) {
    var val3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        val3[_i - 2] = arguments[_i];
    }
    console.log(val1);
    return "This is a return value " + val1 + " " + val2 + " " + val3;
}
var pro = { productId: 123, productName: "Ananya", productCategory: "Electronic" };
var fo = MyFn(pro, 12, "hello", "world");
console.log(fo);
//function interface
function MyFn1(val1) {
    console.log(val1);
    return "This is a return value " + val1;
}
var myNewFn;
myNewFn = MyFn1;
myNewFn(10);
