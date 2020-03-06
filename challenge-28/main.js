(function(){
    'use strict';
    let ajax = new XMLHttpRequest();
    ajax.open('GET','data/data.json');
    ajax.send();

    console.log('Carregando...')
    ajax.addEventListener('readystatechange', function(){
        if (isRequestOk()){
            console.log('Requisição ok\n', JSON.parse(ajax.responseText)) 
        }
    }, false); 
    function isRequestOk(){
        return ajax.readyState===4 && ajax.status===200;
    }
    /*console.log('Requisição ok \n', ajax.responseXML);*/
})()