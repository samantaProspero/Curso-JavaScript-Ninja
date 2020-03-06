//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

//```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1,num2){
    return num1+num2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let somatorio = soma(15,2);
console.log(somatorio)


// Qual o valor atualizado dessa variável?
console.log(somatorio + 5)

// Declare uma nova variável, sem valor.
let newLet;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function inverte (newLet){
    newLet=25
    return `O valor da variável é ${newLet}`

}
// Invoque a função criada acima.
console.log(inverte())
// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável é 25 */
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function produto(x, y, z){
    if(x===undefined|| y===undefined|| z===undefined){
        console.log('Preencha todos os dados corretamente!')
    }else{
    return x*y*z+2}
}


// Invoque a função criada acima, passando só dois números como argumento.
console.log(produto(15,3,))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha os dados corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(produto(15,3,2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//92

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.*/

function operacao(a, b, c){
    if(a!==undefined && b=== undefined && c=== undefined){
        return a 
    }else if(a!==undefined && b!== undefined && c=== undefined){
        return a+b
    }else if(a!==undefined && b!== undefined && c!== undefined){
        return (a+b)/c
    }else if (a===undefined && b=== undefined && c=== undefined){
        return false
    }else{
        return null
    }
}
//Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(operacao())
console.log(operacao(7))
console.log(operacao(12,13))
console.log(operacao(20,10,5))


