//Challenge-05
/*Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).*/

let arr = [0,1,3,4,7,11,23]

/*Crie uma função que receba um array como parâmetro, e retorne esse array.*/

function myFunction(arg){
    return arg;}
/*Imprima o segundo índice do array retornado pela função criada acima.*/

console.log(myFunction(arr)[1])

/*Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.*/

function indice(arg, num){
    return arg[num];
}
console.log(indice(arr, 4))
/*Declare uma variável que recebe um array com 5 valores, de tipos diferentes.*/

let arr2 = [null,{b:2}, 'Samanta', [1,5,"Costelinha"],  15]
/*Invoque a função criada acima, fazendo-a retornar todos os valores do últimoarray criado.*/

for (let num = 0; num<arr2.length; num++) 
console.log(indice(arr2,num))
/*Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.*/

function book(bookName){
    let allBooks ={
        'livro 1':{
            quantidadePaginas: 120,
            autor: 'Samanta Próspero',
            editora:' Editora Vida Loka'
        },
        'livro 2':{
            quantidadePaginas: 52,
            autor: 'Carlos Alberto',
            editora:' Editora Sucesso'
        },
        'livro 3':{
            quantidadePaginas: 530,
            autor: 'Felipe Martins',
            editora:' Editora itaú'
        }
    } ;
    if (!bookName){ 
        return allBooks;
    }
    return allBooks[bookName];
}
console.log(book('livro 2'))
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let bookName = 'livro 2'
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} páginas!`)
/*Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."*/

console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`)
/*Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`)
