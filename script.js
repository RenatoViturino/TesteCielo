var app = angular.module("MyApp", []);
app.controller("lancamentoConta", function ($scope, $http) {
    $http.get('lancamento-conta-legado.json/?post_type=lancamentoConta').
        success(function (data, status, headers, config) {
         console.log(data);
     
        }).error(function (data, status, headers, config) {

        });
     

});