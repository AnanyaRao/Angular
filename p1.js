"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello world!!');
var name1 = "Ananya";
name1 = 12;
var Performance1;
(function (Performance1) {
    Performance1[Performance1["Average"] = 2000] = "Average";
    Performance1[Performance1["Good"] = 3000] = "Good";
    Performance1[Performance1["Excellent"] = 3001] = "Excellent";
})(Performance1 || (Performance1 = {}));
; //default starts from 0
console.log(Performance1["Excellent"]);
//Array declarations
var SampleArr1 = ["Ananya", "Lohith", "Sush"];
var SampleArr2 = ["Ananya", "Lohith", "Sush", 12, true];
var myArray = ["A", "B", "C"];
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var items = myArray_1[_i];
    console.log(items);
}
for (var _a = 0, SampleArr2_1 = SampleArr2; _a < SampleArr2_1.length; _a++) {
    var items = SampleArr2_1[_a];
    console.log(items);
}
SampleArr1.push("hello");
for (var _b = 0, SampleArr1_1 = SampleArr1; _b < SampleArr1_1.length; _b++) {
    var items = SampleArr1_1[_b];
    console.log(items);
}
console.log(SampleArr1[0]);
var sampleTuple = ["Ananya", 9];
exports.myvalue = sampleTuple;
console.log(sampleTuple[0]);
sampleTuple.push("hello");
console.log(sampleTuple);
console.log(sampleTuple.pop());
var sample1 = ["S", "A"];
