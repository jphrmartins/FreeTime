(function() {
    'use strict';

    var app = angular.module('amigoSecreto', []);

    app.controller('interface', function ($scope) {
        $scope.amigo = {'id': 1, 'nome': ''};
        if(!$scope.listaAmigos){
            $scope.listaAmigos = [];
        }
        
        for (var index = 1; index <= 4; index++) {
            $scope.listaAmigos.push($scope.amigo);
            $scope.amigo = {'id': index + 1, 'nome': ''};
        }
        $scope.adicionar = function(){
            for (let index = 0; index < 2; index++) {
                var id = $scope.listaAmigos.length + 1;
                $scope.amigo.id = id;
                $scope.listaAmigos.push($scope.amigo);
                $scope.amigo = {'id': 0, 'nome': ''}
            }
        }
        $scope.sortear = function(){
            var listaSorteioPai = removeNomeInvalido();
            if(listaSorteioPai.length%2 === 0){
                var listaFilha = [];
                var i = 0;
                while(i < listaSorteioPai.length){
                    var ran = Math.floor((Math.random()*listaSorteioPai.length)+1);
                    var posicao = pegarPosicaoListaPai(ran, listaSorteioPai);
                    if(listaFilha[i] !== listaSorteioPai[posicao]){
                        listaFilha[i] = listaSorteioPai[posicao];
                        alert('somente: ' + listaSorteioPai[i] + ', Pode ver a proxima tela.')                            
                        alert(listaSorteioPai[i].nome + ', Você pegou: ' 
                            + listaSorteioPai[posicao] + '. Por favor, avance para a proxima tela');
                        i++;
                    }   
                }
            } else {
                alert("Número de pessoas invalidas. Requer um número par de pessoas");
            }
        }
        function pegarPosicaoListaPai(id, lista) {
            var index = 0;
            while (index < lista.length) {
                if(lista[index].id === id){
                    return index;
                }
                index++;
            }
        }
        function removeNomeInvalido() {
            var lista = [];
            for (let i = 0; i < $scope.listaAmigos.length; i++) {
                if ($scope.listaAmigos[i].nome !== ' ' || !$scope.listaAmigos[i].nome) {
                  lista.push($scope.listaAmigos[i]);
                }
            }
            return lista;    
        }
        

    })
})();