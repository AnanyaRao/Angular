var Prod1 = /** @class */ (function () {
    function Prod1(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
    Object.defineProperty(Prod1.prototype, "ProductName", {
        get: function () {
            return this.productName;
        },
        set: function (productName) {
            this.productName = productName;
        },
        enumerable: true,
        configurable: true
    });
    Prod1.prototype.getProductDetails = function () {
        return this.productId + " is a  product Id";
    };
    return Prod1;
}());
var prod1 = new Prod1(123, "Mobile");
prod1.ProductName = "television";
console.log(prod1.productId);
console.log(prod1.ProductName);
var a = prod1.getProductDetails();
console.log(a);
