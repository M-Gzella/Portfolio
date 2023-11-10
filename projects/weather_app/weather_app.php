<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/weather_app.min.css">


</head>

<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="wrapper">
    <div class="top">
        <h1>weather app</h1>
        <div class="main-info">
            <div>
                <h3 class="city-name"></h3>
                <input type="text" placeholder="Wpisz nazwę miasta..."><button>Wyślij</button>
                <p class="warning"></p>
            </div>
            <img src="../../dist/img/unknown.png" alt="Obrazek przedstawiający pogodę" class="photo">
        </div>
    </div>
    <div class="bottom">
        <div class="headings">
            <p>Weather:</p>
            <p>Temperature:</p>
            <p>Humidity:</p>
        </div>
        <div class="weather-info">
            <p class="weather"></p>
            <p class="temperature"></p>
            <p class="humidity"></p>
        </div>
    </div>
</div>


<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../../dist/js/projects/weather_app.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>

</html>