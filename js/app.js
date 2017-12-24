var app = angular.module('app', []);

app.controller('mainCtrl', function($http) {
    $http.get('http://webdev/index.php?controller=user')
        .success(function (result) {
            console.log('success', result);
        })
        .error(function (result) {
            console.log('error');
        })
});
