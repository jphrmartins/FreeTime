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
                var id = $scope.listaAmigos.length + 1;
                $scope.amigo.id = id;
                $scope.listaAmigos.push($scope.amigo);
                $scope.amigo = {'id': 0, 'nome': ''}
        }
        $scope.sortear = function(){
            var listaSorteioPai = removeNomeInvalido();
            var listaFilha = [];
            var volta = 0; 
            if(listaSorteioPai.length !==1){
                debugger;
                while(volta < listaSorteioPai.length){
                    var id = Math.floor((Math.random()*listaSorteioPai.length)+1);
                    var index = pegarPosicaoListaPai(id, listaSorteioPai);
                    if(!listaFilha.length){
                        if(index !== 0){
                            volta = amigoSecretoSelecionado(volta, index, listaFilha, listaSorteioPai);
                        }
                    } else {
                        if (pessoaQueFaltaUltimaDaLista(volta, listaSorteioPai, listaFilha, id)){
                            alert('somente: ' + listaSorteioPai[volta].nome + ', Pode ver a proxima tela.')                            
                            alert(listaSorteioPai[volta].nome + ', Você retirou: ' 
                                + listaSorteioPai[index+1].nome + '. Por favor, avance para a proxima tela');
                            
                                alert('somente: ' + listaSorteioPai[volta+1].nome + ', Pode ver a proxima tela.')                            
                            alert(listaSorteioPai[volta+1].nome + ', Você retirou: ' 
                                + listaSorteioPai[index].nome + '. Por favor, avance para a proxima tela');
                            break;
                        } else if(idPessoaDaVolta(id, listaSorteioPai, volta)){      
                            if(casoPessoaAindaNaoRetirada(listaFilha, id)){
                            volta = amigoSecretoSelecionado(volta, index, listaFilha, listaSorteioPai);
                            }
                        }   
                    }
                }
            }else{
                alert('Número de pessoas invalidas');
            }
        }
        function idPessoaDaVolta(id, listaSorteioPai, volta) {
            return id !== listaSorteioPai[volta].id;
        }
        function pessoaQueFaltaUltimaDaLista(volta, listaSorteioPai,listaFilha, id) {
            debugger;
            return volta + 2 === listaSorteioPai.length  && id !== listaSorteioPai[listaSorteioPai.length-1].id
                    && casoPessoaAindaNaoRetirada(listaFilha, listaSorteioPai[listaSorteioPai.length-1].id) 
        }
        function casoPessoaAindaNaoRetirada(listaFilha, id) {
            for (let loop = 0; loop < listaFilha.length; loop++) {
                if(listaFilha[loop].id === id){
                    return false;
                }
            }
            return true;
        }
        function amigoSecretoSelecionado(volta, index, listaFilha, listaSorteioPai) {
            listaFilha[volta] = listaSorteioPai[index];
            alert('somente: ' + listaSorteioPai[volta].nome + ', Pode ver a proxima tela.')                            
            alert(listaSorteioPai[volta].nome + ', Você retirou: ' 
                + listaSorteioPai[index].nome + '. Por favor, avance para a proxima tela');
            volta++
            return volta;
        }
        function pegarPosicaoListaPai(id, lista) {
            debugger;
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