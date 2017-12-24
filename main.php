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
    <?php require("menu.php"); ?>
</head>
<body background="images/backgr.jpg" class="body">
<header class="header">
    <div class="logo">
        <span class="logo__icon"></span>
        <a class="logo__text" href="main.php"><b>Game Name</b></a>
    </div>
    <ul class="menu">
<?php
$page = 1;
if (isset($_GET["page"])) $page = $_GET["page"];
echo Menu::renderMenu($page);
?>
    </ul>
</header>
<?php echo Menu::getPage($page); ?>
</body>
</html>
