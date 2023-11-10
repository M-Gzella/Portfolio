<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walidator formularza</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/magic8ball.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="wrapper">
    <div class="info">
        <h1>Magic <span>8</span>Ball</h1>
        <p>Zadaj pytanie, kliknij bilę i poznaj prawdę!</p>
    </div>
    <div class="ball-img">
        <img src="https://cdn.pixabay.com/photo/2012/04/16/11/05/ball-35516_1280.png" alt="bila numer 8">
    </div>
    <div class="question-area">
        <h2>Zadaj pytanie</h2>
        <input type="text">
        <p class="answer"></p>
        <p class="error"></p>
    </div>
</div>

<script src="../../dist/js/projects/magic8ball.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>