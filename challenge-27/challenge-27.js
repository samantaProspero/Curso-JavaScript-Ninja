(function(window,document){
    'use strict';
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

    function DOM (elements){
      this.element=document.querySelectorAll(elements);
    }
    DOM.prototype.on = function on(eventType, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.addEventListener(eventType, callback, false);
      })
    }
    DOM.prototype.off = function off(eventType, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.removeEventListener(eventType, callback, false);
      })
    }
    DOM.prototype.get = function get(){
      return this.element;
    }
    /*$a.on('click', function handleClick (e) {
        e.preventDefault();
        console.log('clicou');
        $a.off('click', handleClick)
        });
        console.log('Elementos selecionados:', $a.get());
        console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);*/

    //forEach, map, filter, reduce, reduceRight, every e some
    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    }
    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    }
    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    }
    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }
    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    }
    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    }
    /*let $a = new DOM('[data-js="link"]');
    console.log($a)
    $a.forEach(function(item){
        console.log(item.firstChild.nodeValue)
    })
    let dataJs=$a.map(function(item){
       return item.getAttribute('data-js');
    })
    console.log(dataJs)
    let reduce=$a.reduce(function(acc, item, index){
       return acc + ' '+ item.getAttribute('data-js') + index;
    }, 0)
    console.log(reduce)*/ 

    //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    DOM.prototype.isArray = function isArray(param){
        return Object.prototype.toString.call(param)==='[object Array]';
    }
    DOM.prototype.isObject = function isObject(param){
        return Object.prototype.toString.call(param)==='[object Object]';
    }
    DOM.prototype.isFunction = function isFunction(param){
        return Object.prototype.toString.call(param)==='[object Function]';
    }
    DOM.prototype.isNumber = function isNumber(param){
        return Object.prototype.toString.call(param)==='[object Number]';
    }
    DOM.prototype.isString = function isString(param){
        return Object.prototype.toString.call(param)==='[object String]';
    }
    DOM.prototype.isBoolean = function isBoolean(param){
        return Object.prototype.toString.call(param)==='[object Boolean]';
    }
    DOM.prototype.isNull = function isNull(param){
        return Object.prototype.toString.call(param)==='[object Null]'|Object.prototype.toString.call(param)==='[object Undefined]';
    }
    
    console.log(DOM.prototype.isArray([1,2,3]))
    console.log(DOM.prototype.isObject({}))
    console.log(DOM.prototype.isFunction(function(){}))
    console.log(DOM.prototype.isNumber(5))
    console.log(DOM.prototype.isString('Samanta'))
    console.log(DOM.prototype.isBoolean(false))
    console.log(DOM.prototype.isNull(null))
    
    })(window, document)