/*function adder(x){
    return function (y){
        return x+y;
    };
}
let add2= adder(2)
console.log(add2(3))
console.log(adder(2)(3))
console.log(adder(20)(13))*/

function adder(x){
    function addOther(y){
        return x+y;
    } return addOther;
}
console.log(adder(2)(3)) 