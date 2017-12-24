var app = angular.module('app', []);

app.controller('stop', function($scope, $log, $interval){
    $scope.stop = function () {
        $scope.$emit('test');
    }
});
app.controller('status', function($scope, $log, $interval){
    $scope.gameover = false;
    $scope.name='';
    $scope.level=0;
    $scope.score=0;
    $scope.step=0;
    $scope.visiable=false;
    $scope.$on('test', function() {
        $scope.gameover = false;
        $scope.level=0;
        $scope.score=0;
        $scope.step=0;
        $scope.visiable=false;
        $interval.cancel(tictac);
        $scope.ballPos={'X':50*Math.sin(tic/60),
                        'Y':20*Math.cos(tic/20)};

    });


    var tictac, tic=0;
    $scope.ballPos={'X':50*Math.sin(tic/60),
                    'Y':20*Math.cos(tic/20)};
    $scope.size = 50;

    function timer (delta) {

        (function t () {
            if ($scope.step < 3) {
                console.log($scope.step);
                $scope.step++;
                setTimeout(t, delta);
            } else {
                $scope.gameover = true;
                $interval.cancel($scope.nextLevel);
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

    $scope.stop = function(){
        $interval.cancel(tictac);
    };


    $scope.saveResult = function(){
        /*
        сохранить результаты игры:
          $scope.name;
          $scope.level;
          $scope.score;
        */
    };
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
        templateUrl: './assets/directives/game.html'
    };
});
