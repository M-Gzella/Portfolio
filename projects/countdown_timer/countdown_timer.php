<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown timer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/countdown_timer.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="settings">
    <h1>Ustawienia</h1>
    <label for="event-name">Nazwa wydarzenia:</label>
    <input type="text" id="event-name" value="Nowy rok">
    <table class="date">
        <tr>
            <td><label for="event-day">Dzień:</label></td>
            <td><label for="event-month">Miesiąc:</label></td>
            <td><label for="event-year">Rok:</label></td>
        </tr>
        <tr>
            <td><input type="number" id="event-day" min="1" max="31" value="1"></td>
            <td><input type="number" id="event-month" min="1" max="12" value="1"></td>
            <td><input type="number" id="event-year" min="1" value="2024"></td>
        </tr>
    </table>

    <label for="event-image">Link do obrazka:</label>
    <input type="text" id="event-image" value="https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_1280.jpg">
    <button class="save">Zapisz</button>
</div>
<div class="counter-app">

    <div class="app-body">
        <div class="image-section"></div>
        <div class="settings-btn"><i class="fas fa-sliders-h"></i></div>

        <div class="time-section">
            <h3><span class="event">Nowy rok</span> za:</h3>
            <div class="time-cards">
                <div class="card">
                    <p class="days-count number">1</p>
                    <p class="card-title">Dni</p>
                </div>
                <div class="card">
                    <p class="hours-count number">1</p>
                    <p class="card-title">Godzin</p>
                </div>
                <div class="card">
                    <p class="minutes-count number">1</p>
                    <p class="card-title">Minut</p>
                </div>
                <div class="card">
                    <p class="seconds-count number">1</p>
                    <p class="card-title">Sekund</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../../dist/js/projects/countdown_timer.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>