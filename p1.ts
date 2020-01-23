console.log('Hello world!!');

var name1:any = "Ananya";

name1=12;

enum Performance1{"Average"=2000,"Good"=3000,"Excellent"};//default starts from 0
console.log(Performance1["Excellent"]);

//Array declarations
var SampleArr1:string[] = ["Ananya","Lohith","Sush"];
var SampleArr2:any[] = ["Ananya","Lohith","Sush",12,true];
var myArray :Array<string> = ["A","B","C"];

for (const items of myArray){
    console.log(items);
}

for (const items of SampleArr2){
    console.log(items);
}

SampleArr1.push("hello");

for (const items of SampleArr1){
    console.log(items);
}

console.log(SampleArr1[0]);

var sampleTuple : [String,Number] = ["Ananya",9];
console.log(sampleTuple[0]);
sampleTuple.push("hello");
console.log(sampleTuple);
console.log(sampleTuple.pop());

var sample1 : Array<String> = ["S","A"];

export {sampleTuple as myvalue};