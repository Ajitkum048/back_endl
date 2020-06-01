var fak = require("faker");

for (let index = 0; index < 10; index++) {
    console.log(fak.commerce.productName() + " => " + fak.commerce.price());

}