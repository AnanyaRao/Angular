class Prod1{
    productId:number;
    private productName:string;

    constructor(productId:number,productName:string){
        this.productId = productId;
        this.productName = productName;
    }

    get ProductName():string{
        return this.productName;
    }
    set ProductName(productName:string){
        this.productName=productName;
    }
    getProductDetails():string{
        return this.productId+" is a  product Id";
    }
}

var prod1 = new Prod1(123,"Mobile");
prod1.ProductName="television";
console.log(prod1.productId);

console.log(prod1.ProductName);
var a:string = prod1.getProductDetails();
console.log(a);