var app = angular.module('app', ["ngRoute", "ngResource"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/page/:name", {
            templateUrl : function(page){
                return "assets/"+page.name+".html"
            }
        })
        .otherwise("/page/start");
});

app.controller('status', function($scope, $log, $interval, $http){
    $scope.user = {};
    $scope.gameover = false;
    $scope.level=0;
    $scope.score=0;
    $scope.step=0;
    $scope.visiable=false;
    $scope.$on('test', function() {
        $http.post('http://webdev/index.php?controller=user',  {id:"1",name: $scope.user.name,score:$scope.score});
        $scope.gameover = false;
        $scope.level=0;
        $scope.score=0;
        $scope.step=0;
        $scope.visiable=false;
        $scope.ballPos={'X':50*Math.sin(tic/60),
                        'Y':20*Math.cos(tic/20)};

    });

    var tictac, tic=0;
    $scope.ballPos={'X':50*Math.sin(tic/60),
                    'Y':20*Math.cos(tic/20)};
    $scope.size = 50;

    function timer (delta) {

        (function t () {
            if ($scope.step++ < 3) {
                setTimeout(t, delta);
            } else {
                $scope.gameover = true;
            }
        })();
    }

    $scope.nextLevel=function(){
        $scope.step = 0;
        if ($scope.level === 0) { timer(1000); }

        $scope.score += $scope.level*10;
        $scope.level++;

        if ($scope.size > 10)	{ $scope.size -= 5; }
        /*if ($scope.score > 30) { $scope.stop(); } */

        tictac=$interval(function() {
            tic++;
            $scope.ballPos.X=50*Math.sin(tic/60);
            $scope.ballPos.Y=20*Math.cos(tic/20);
        },50);
    };
});

app.controller("menuController", function ($scope, $http) {
    $http.get("http://webdev/index.php?controller=menu").success(function (data) {
        $scope.items = data;
    });
});

app.controller("top_list_controller",function($scope, $http){
    $http.get("http://webdev/index.php?controller=user").success(function (data) {
        $scope.users = data;
    });
});

app.controller('stop', function($scope, $log, $interval){
    $scope.stop = function () {
        $scope.$emit('test');
    }
});

app.directive('end', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './assets/directives/end.html'
    };
});

app.directive('game', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './assets/directives/game.html',
    };
});

app.directive("header", function(){
    return {
        templateUrl:"./assets/directives/header.html",
        replace: true,
        restrict: 'E'
    }
});
