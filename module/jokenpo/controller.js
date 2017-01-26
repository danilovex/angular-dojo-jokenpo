(function() {
        'use strict';

        function jokenpoController() {

            var vm = this; // jshint ignore:line
            vm.opcoesJogo = {pedra:1, tesoura:2,papel:3};
            vm.checkEmpate = function(jogador1, jogador2){
                if(jogador1 === jogador2){
                    return 'EMPATE';
                }else {
                    return false;
                }
            };

            vm.vencePedra = function(jogador1, jogador2){
                if (jogador1 === vm.opcoesJogo.pedra && jogador2===vm.opcoesJogo.tesoura)
                    return true;
                else if (jogador1 === vm.opcoesJogo.tesoura && jogador2 === vm.opcoesJogo.pedra)
                    return true;
                else {
                    return false;
                }
            };

            vm.vencePapel = function(jogador1, jogador2){
                if (jogador1 === vm.opcoesJogo.papel && jogador2===vm.opcoesJogo.pedra)
                    return true;
                else if (jogador1 === vm.opcoesJogo.pedra && jogador2 === vm.opcoesJogo.papel)
                    return true;
                else {
                    return false;
                }
            };
            vm.venceTesoura = function(jogador1, jogador2){
                if (jogador1 === vm.opcoesJogo.tesoura && jogador2===vm.opcoesJogo.papel)
                    return true;
                else if (jogador1 === vm.opcoesJogo.papel && jogador2 === vm.opcoesJogo.tesoura)
                    return true;
                else {
                    return false;
                }
            };
/*
            //example 1
            vm.myName = 'Paulo Henrique';
            vm.myNameSelected = undefined;

            vm.resultadoSoma = 0;

            //functions service
            vm.soma = function(num1, num2){
                //var res = JokenpoService.somaDoisNumeros(num1, num2);
                return num1+num2;
            };
*/
            /*
            //example 2
            vm.password = '';
            vm.complexidadeSenha = function() {
                var size = vm.password.length;
                if (size > 8) {
                    vm.strength = 'forte';
                } else if (size > 3) {
                    vm.strength = 'moderado';
                } else {
                    vm.strength = 'fraco';
                }
            };

            vm.somaDoisNumeros = function(a, b){
                return a + b;
            };

            */
        }
        angular.module('DojoAngular.Jokenpo').controller('JokenpoController', jokenpoController);
        jokenpoController.$inject = [];


    })();
