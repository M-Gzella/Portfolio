<!DOCTYPE html>
<html lang="pl">
<head>
    <link rel="manifest" href="manifest.json" />
    <!-- ios support -->
    <link rel="apple-touch-icon" href="images/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-128x128.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-152x152.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-384x384.png" />
    <link rel="apple-touch-icon" href="images/icons/icon-512x512.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
    <meta name="theme-color" content="#db4938" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/todolist.min.css">
</head>
<body>

<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="todo">
    <div class="header">
        <h1>ToDo List</h1>
        <input type="text" class="todo-input" placeholder="Wpisz treść zadania...">
        <button class="add-btn">Add</button>
    </div>
    <div class="todo-list">
        <h3>Lista zadań:</h3>
        <p class="alert-info">Brak zadań na liście</p>
        <ul>
        </ul>
    </div>
</div>

<div class="popup">
    <h3>Edytuj zadanie:</h3>
    <div class="popup-body">
        <p class="popup-info"></p>
        <input type="text" class="popup-input" placeholder="Wprowadź nową treść zadania">
        <button class="popup-btn accept">Zatwierdź</button>
        <button class="popup-btn cancel">Anuluj</button>
    </div>
</div>

<script src="../../dist/js/projects/todolist.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>