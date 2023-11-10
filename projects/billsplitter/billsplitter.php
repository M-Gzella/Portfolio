<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Billsplitter</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/billsplitter.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="wrapper">
    <div class="top">
        <h1>BillSplitter</h1>
        <p>Podziel się rachunkiem ze znajomymi!</p>
    </div>
    <div class="bottom">
        <label for="price">Kwota do zapłaty:</label>
        <input type="number" id="price">
        <label for="people">Ilość osób:</label>
        <input type="number" id="people">
        <label for="tip">Napiwek</label>
        <select id="tip">
            <option value="0" disabled selected>- wybierz napiwek -</option>
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
        </select>
        <button class="count">Oblicz</button>
        <p class="error"></p>
        <p class="cost-info">Powinniście się złożyć po <span class="cost"></span>zł!</p>
    </div>
</div>

<script src="../../dist/js/projects/billsplitter.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>