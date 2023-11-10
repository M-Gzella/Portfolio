<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Degree converter</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/degree_converter.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<label for="converter">Konwerter <span class="one">°C</span> na <span class="two">°F</span></label>
<input type="number" id="converter" placeholder="Wpisz liczbę...">
<p class="result"></p>

<div>
    <button class="conv">Konwertuj</button>
    <button class="reset">Reset</button>
    <button class="change">Zamień</button>
</div>

<script src="../../dist/js/projects/degree_converter.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>