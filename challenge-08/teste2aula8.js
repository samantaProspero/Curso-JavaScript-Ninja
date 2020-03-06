//Primeira forma:
function showOtherFunction (func){
    return func();
}
function returnedFunction(){
    return 'função Returned Function'
}
console.log(showOtherFunction(returnedFunction))


//Segunda Forma:
function showOtherFunction2 (func){
    return func();
}
console.log(showOtherFunction2(function (){return 'Functional JS Ninja'}))


/*function calculator(num1, num2){
    function func2 (callback){
        return function callback(num1, num2){
        }
    }
    return func2(callback)
}
console.log(calculator(3,5))*/
function calculator(num1, num2){
    function func2 (callback){
        return callback(num1, num2)
    }
    return func2(callback)
}