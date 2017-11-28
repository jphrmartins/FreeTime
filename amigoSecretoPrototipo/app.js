(function() {
    'use strict';

    var app = angular.module('amigoSecreto', []);

    app.controller('interface', function ($scope) {
        $scope.amigo = {'id': 1, 'nome': ''};
        $scope.listaAmigos = [];
        for (var index = 1; index < 12; index++) {
            listaAmigos.push(this.amigo);
            this.amigo = {'id': index + 1, 'nome': ''};
        }
        $scope.adicionar = function(){
            var id = listaAmigos.length + 1;
            this.amigo.id = id;
            listaAmigos.push(this.amigo);
        }

    })
})();