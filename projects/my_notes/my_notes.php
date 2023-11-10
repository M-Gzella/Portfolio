<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Notes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/my_notes.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="menu">
    <h1><i class="fas fa-sticky-note"></i>MyNotes</h1>

    <div class="menu-buttons">
        <button class="add icon"><i class="fas fa-plus"></i>Dodaj</button>
        <button class="delete-all icon"><i class="fas fa-trash-alt"></i>Usuń wszystkie</button>
    </div>
</div>

<div class="note-area">
</div>

<div class="note-panel">
    <h2>Dodaj notatkę</h2>
    <label for="category">Wybierz kategorię</label>
    <select id="category">
        <option value="0" disabled selected>- wybierz kategorię -</option>
        <option value="1">Zakupy</option>
        <option value="2">Praca</option>
        <option value="3">Inne</option>
    </select>

    <label for="text">Wpisz treść notatki</label>
    <textarea id="text"></textarea>
    <p class="error">Uzupełnij wszystkie pola!</p>
    <div class="panel-buttons">
        <button class="save icon"><i class="fas fa-save"></i>Zapisz</button>
        <button class="cancel icon"><i class="far fa-window-close"></i>Anuluj</button>
    </div>
</div>

<script src="../../dist/js/projects/my_notes.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>