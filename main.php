<!DOCTYPE html>
<html ng-app='app'>
<head>
	<title>Start Game</title>
	<meta charset="UTF-8">
    <script src="js/lib/angular.js"></script>
    <script src="js/lib/angular-route.js"></script>
    <script src="js/lib/angular-resource.js"></script>
    <script src="js/app.js"></script>
    <link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="sortcut icon" type="image/x-icon" href="favicon.ico">
</head>
<body background="images/backgr.jpg" class="body">
    <header></header>

    <div ng-controller="status">
        <form class="form" action="#">
            <button  ng-click='visiable=true' ng-show="!visiable" class="form__button"><b >Start</b></button>
        </form>

        <game ng-if="visiable&&!gameover"> </game>
        <end ng-if="gameover"></end>
    </div>
</body>
</html>
