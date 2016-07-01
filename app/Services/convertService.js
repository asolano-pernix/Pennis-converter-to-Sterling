(function() {
    'use strict';

angular
    .module('myApp.view1')
    .factory('convertService', convertService);

/* @ngInject */
function convertService() {

    var actual = 0;
    var pos1 =0 ,pos2=0,pos3=0,pos4=0,pos5=0,pos6 = 0;
    var service = {
        calculate : calculate,
        convertResult : convertResult,
        checkInput : checkInput,
        deleteZeros: deleteZeros
    };

    return service;

    function calculate(pennis) {
        pennis = checkInput(pennis);
        if (pennis>=100 && pennis <200){
            actual =  pennis%100;
            pos2 = Math.floor(pennis/100);
            calculate(actual);
        }
        if (pennis>=200){
            actual = pennis%200;
            pos1= Math.floor(pennis/200);
            calculate(actual);
        }

        if (pennis>= 50 && pennis <100){
            actual = pennis % 50;
            pos3=Math.floor(pennis/50);
            calculate(actual);
        }

        if (pennis>=20 && pennis <50){
            pos4= Math.floor(pennis/20);
            actual =(pennis%20);
            calculate(actual);
        }
        if (pennis>= 2 && pennis <20){
            actual =pennis%2;
            pos5 = Math.floor(pennis/2);
            calculate(actual);
        }
        if (pennis==1){
            pos6= Math.floor(pennis/1);
        }

        return convertResult();


    }

    function convertResult() {
        var result ="";

        if (pos1>0){
            result = result + pos1 + "x" + "£2" +"," ;
        }
        if (pos2>0) {
            result = result + pos2 + "x"+ "£1" +",";
        }
        if (pos3>0) {
            result = result + pos3 + "x"+ "50p" +",";
        }
        if (pos4>0) {
            result = result + pos4 + "x"+ "20p" +",";
        }
        if (pos5>0) {
            result = result + pos5 + "x"+ "2p"+ ",";
        }
        if (pos6>0) {
            result = result + pos6 + "x"+ "1p" ;
        }

        return result;


    }
}
    function checkInput(input) {
        var number = input;

        if (input[1]=='.' && input.length==4){
            number = input * 100;
        }

        if (input[input.length-1]=="p" && isNaN(input[0])==false){
            number = input.substring(0, input.length-1);
        }

        if(input[0]== '£' && input[input.length]!='p' && input[2]!='.'){
            number= input.substring(1,input.length) * 100;
        }

        if(input[0] == '£'  && input[2] == '.' && input.length==5){
            var aux = input.substring(1,input.length);
            number = aux * 100;
        }
        if(input[0]=='£' && input.length==2 && (input[1]==1 || input.substring[1]==2)){
            number = input.substring(1,1) * 100;
        }
        if(input[0] == '£' && input.length==3 && input[2] == 'p'){
            number = input.substring(1,input.length) * 100;
        }
        if(input[0] ==0 && input[input.length-1] == 'p' && input.length==6 && input[2]=='.') {
            number = input.substring(1, input.length - 1) * 100;
        }
        if(input=='£1p' || input =='£2p' || input=='£2.p' || input =='£1.p' ){
            number = input[1] * 100;

        }
        if (input[0]=='0' && input.length>1){
            return deleteZeros(input);
        }

        if (!isNaN(input[0]) && input[input.length-1] == 'p' && input[1]=='.'){
            if (input.length==5) {
                number = input.substring(0, input.length - 1) * 100;
            }
            else{
                number = Math.round(input.substring(0, input.length - 1) * 100) / 100;
                number = number * 100;

            }
        }
        if(input[0] == '£' && input[input.length-1] =='p' && input.length>5){
            number = Math.round(input.substring(1, input.length - 1) * 100) / 100;
            number = number * 100;
        }

        number = parseInt(number);
        return number;
    }

    function deleteZeros (input){
        var i=0;
        var change = false;
        for (i;i<input.length && change==false ;i++){
            if (input[i]!=0){
                change=true;
            }
        }
        return checkInput(input.substring(i-1,input.length));

    }


})();

