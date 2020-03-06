(function(DOM){
  'use strict';

  /* CHALLENGE 28
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:http://apps.widenet.com.br/busca-cep/api-de-consulta
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  
 var $formCep = new DOM('[data-js="form-cep"]');
 var $inputCep = new DOM('[data-js="input-cep"]');
 var ajax = new XMLHttpRequest();

 $formCep.on('submit', handleFormSubmit);
  
  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', getClearUrl());
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }

  function getClearUrl() {
    let url = 'https://viacep.com.br/ws/'+cep+'/json/unicode/'
    return  url.replace(cep,$inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }

  function handleStateChange() {
    if(isRequestOk()) {
      fillCepFields();
    }
  }

  function fillCepFields() {
    var data = parseData();
    if(!data) {
      return console.log('data error', data);
    }
    var $logradouro = new DOM('[data-js="info-logradouro"]');
    var $bairro = new DOM('[data-js="info-bairro"]');
    var $estado = new DOM('[data-js="info-estado"]');
    var $cidade = new DOM('[data-js="info-cidade"]');
    var $cep = new DOM('[data-js="info-cep"]');
    $logradouro.get()[0].textContent = data.address;
    $bairro.get()[0].textContent = data.district;
    $estado.get()[0].textContent = data.state;
    $cidade.get()[0].textContent = data.city;
    $cep.get()[0].textContent = data.code;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
    }
    return result;
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
 
  /*function handleSubmitFormCEP(event){
    event.preventDefault();
    ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api-de-consulta');
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange)
  }
  function handleReadyStateChange(){
    if(ajax.readyState===4 && ajax.status===200){
      console.log('Popular formulário', ajax.responseText);
    }
    console.log('Carregando...')
  }*/
 
  
})(window.DOM)