<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drink Search</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/drink_search.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="wrapper">
    <div class="header">
        <div class="shadow"></div>
        <h1>DrinkSearch</h1>
        <input type="text" class="search" placeholder="Wpisz nazwę szukanego napoju">
    </div>
    <div class="drink-list">
        <h2>Lista dostępnych napojów:</h2>
        <ul>
            <li>Mleko</li>
            <li>Piwo</li>
            <li>Whisky</li>
            <li>Pepsi</li>
            <li>Woda niegazowana</li>
            <li>Sok jabłkowy</li>
            <li>Sok winogronowy</li>
            <li>Sok bananowy</li>
            <li>Wino czerwone</li>
            <li>Wino Białe</li>
            <li>Energy drink</li>
            <li>Coca-Cola</li>
            <li>Sprite</li>
            <li>Fanta</li>
            <li>Rum</li>
            <li>Woda smakowa</li>
            <li>Wódka</li>
            <li>Aperol</li>
        </ul>
    </div>
</div>

<script src="../../dist/js/projects/drink_search.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>