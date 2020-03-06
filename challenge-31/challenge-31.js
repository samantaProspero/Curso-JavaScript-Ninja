(function($) {
    'use strict';
/*CHALLENGE 31
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório do curso, para colar o link do pull request do seu repo.
*/
    let app =(function appControler () {
    return {
        init:function init (){
          console.log('app init');
          this.companyInfo();
          this.initEvents();
        },
        initEvents: function initEvents(){
          $('[data-js="form-register"]').on('submit', this.handleSubmit)
        },
        handleSubmit: function handleSubmit(e){
          e.preventDefault();
          console.log('submit');
          let $tableCar = $('[data-js="table-car"]').get();
          $tableCar.appendChild(app.createNewCar())
        },
        createNewCar: function createNewCar(){
          let $fragment= document.createDocumentFragment();
          let $tr = document.createElement('tr');
          let $tdImage = document.createElement('td');
          let $image = document.createElement('img');
          let $tdBrand = document.createElement('td');
          let $tdYear = document.createElement('td');
          let $tdPlate = document.createElement('td');
          let $tdColor = document.createElement('td');
  
          $image.setAttribute('src', $('[data-js="image"]').get().value);
          $tdImage.appendChild($image);
          
          $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
          $tdYear.textContent = $('[data-js="year"]').get().value;
          $tdPlate.textContent = $('[data-js="plate"]').get().value;
          $tdColor.textContent = $('[data-js="color"]').get().value;
          
          $tr.appendChild($tdImage);
          $tr.appendChild($tdBrand);
          $tr.appendChild($tdYear);
          $tr.appendChild($tdPlate);
          $tr.appendChild($tdColor);
          
          return $fragment.appendChild($tr);
        },
        companyInfo: function companyInfo (){
          let ajax = new XMLHttpRequest();
          ajax.open('GET', 'company.json', true);
          ajax.send();
          ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
          
        },
        getCompanyInfo: function getCompanyInfo(){
          if(!app.isReady.call(this))
            return;
          
          let data = JSON.parse(this.responseText);
          let $companyName = $('[data-js="company-name"]').get();
          let $companyPhone = $('[data-js="company-phone"]').get();
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
        },
        isReady: function isReady() {
          return this.readyState===4 && this.status===200;
          
        }
      };
    })();
    app.init();
  })(window.DOM);