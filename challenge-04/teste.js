let carro = {
    marca:'Ford',
    modelo:'Escort',
    placa:'BKW2874',
    ano: 1992,
    cor:'prata',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas:0
}
carro.adicionarPessoas = function (numeroPessoas){
    let totalPessoas = carro.quantidadePessoas+numeroPessoas;
    if(carro.quantidadePessoas===carro.assentos && totalPessoas >= carro.assentos){
        return 'O carro já está lotado!'
    } 
    if(totalPessoas > carro.assentos){
        let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        let pluralOuSingular= quantasPessoasCabem ===1?'pessoa':'pessoas';
        let caber = quantasPessoasCabem===1? 'cabe' : 'cabem';
        return `Só ${caber} mais ${quantasPessoasCabem} ${pluralOuSingular}!`
    }
    carro.quantidadePessoas+=numeroPessoas;
    return `já temos ${carro.quantidadePessoas} pessoas no carro!`
}
carro.adicionarPessoas(12)