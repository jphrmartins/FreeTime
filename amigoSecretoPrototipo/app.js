(function() {
    'use strict';

    var app = angular.module('amigoSecreto', []);

    app.controller('interface', function ($scope) {
        $scope.amigo = {'id': 1, 'nome': ''};
        if(!$scope.listaAmigos){
            $scope.listaAmigos = [];
        }
        
        for (var index = 1; index < 12; index++) {
            $scope.listaAmigos.push($scope.amigo);
            $scope.amigo = {'id': index + 1, 'nome': ''};
        }
        $scope.adicionar = function(){
            var id = $scope.listaAmigos.length + 1;
            console.log(($scope.listaAmigos.length + 1) + ', id:' + id);
            console.log('1 ' + $scope.amigo.id)
            $scope.amigo.id = id;
            console.log('2 ' + $scope.amigo.id)
            $scope.listaAmigos.push($scope.amigo);
        }

        $scope.sortear = function(){
            var lista = $scope.listaAmigos;
            while (lista.length != 0) {
                var ran = Math.floor(Math.random()*lista.length);
            }
        }

    })
})();