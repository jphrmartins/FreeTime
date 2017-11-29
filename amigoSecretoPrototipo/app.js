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
                var volta = 0;
                while(volta < listaSorteioPai.length){
                    var id = Math.floor((Math.random()*listaSorteioPai.length)+1);
                    var index = pegarPosicaoListaPai(id, listaSorteioPai);
                    if(!listaFilha.length){
                        if(index !== 0){
                            listaFilha[volta] = listaSorteioPai[index];
                            alert('somente: ' + listaSorteioPai[volta].nome + ', Pode ver a proxima tela.')                            
                            alert(listaSorteioPai[volta].nome + ', Você pegou: ' 
                                + listaSorteioPai[index].nome + '. Por favor, avance para a proxima tela');
                            volta++;
                        }
                    } else {
                        if(id !== listaSorteioPai[volta].id){
                            var saiu = false;
                            for (let loop = 0; loop < listaFilha.length; loop++) {
                                if(listaFilha[loop].id === id){
                                    saiu = true;
                                }
                            }
                            if(!saiu){
                                listaFilha[volta] = listaSorteioPai[index];
                                alert('somente: ' + listaSorteioPai[volta].nome + ', Pode ver a proxima tela.')                            
                                alert(listaSorteioPai[volta].nome + ', Você pegou: ' 
                                    + listaSorteioPai[index].nome + '. Por favor, avance para a proxima tela');
                                volta++;
                            }
                        }
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
                if ($scope.listaAmigos[i].nome) {
                    lista.push($scope.listaAmigos[i]);
                }
            }
            return lista;    
        }
        

    })
})();