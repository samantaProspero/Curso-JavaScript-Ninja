/*Challenge-07
Crie um array com 5 items (tipos variados).
*/
let arr = ['Samanta', true, 27, {prato:'lasanha'}, null]
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (x){
    arr.push(x);
    return arr;
}
/*Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.*/
console.log(addItem(['Próspero', 19, false]))
/*Mostre no console o segundo elemento desse último array, criado acima, com a
frase:"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arr[arr.length-1][1]}`)
/*Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."*/

console.log(`O primeiro array tem ${arr.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[arr.length-1].length} itens.`)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.*/
let num = 10;
let pares= [];
while(num<=20){
    if (num%2===0){pares.push(num)};
    num++;
}
console.log( `Números pares entre 10 e 20: ${pares}.` );
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
//console.log( 'Números ímpares entre 10 e 20:' );
let num2 = 10;
let impares= [];
while(num2<=20){
    if (num2%2===1){impares.push(num2)};
    num2++;
}
console.log(`Números ímpares entre 10 e 20: ${impares}.`)

/*Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.*/

let pares2 = [];
for(let numero = 100; numero<=120; numero++){
    if(numero%2===0){pares2.push(numero)}
}
console.log( `Números pares entre 100 e 120: ${pares2}`);

let impares2 = [];
for(let numero = 111; numero<=125; numero++){
    if(numero%2===1){impares2.push(numero)}
}
console.log( `Números ímpares entre 111 e 125:${impares2}` );