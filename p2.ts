console.log("hey Typescript!");

function MyFn(val1:Product,val2?:any,...val3:any[]) : string{

    console.log(val1);
    return "This is a return value "+val1+" "+val2+" "+val3;
}

let pro ={productId :123,productName :"Ananya",productCategory : "Electronic"};
var fo:string = MyFn(pro,12,"hello","world");
console.log(fo);

interface Product{
    productId :number;
    productName :string;
}

//function interface
function MyFn1(val1:number) : string{

    console.log(val1);
    return "This is a return value "+val1;
}
interface FnCheck{
    (val1:number):string
}
let myNewFn :FnCheck;
myNewFn = MyFn1;
myNewFn(10);

