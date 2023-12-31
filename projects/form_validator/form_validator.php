<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form validator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/form_validator.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<div class="wrapper">
    <form>
        <h1>Zarejestruj się</h1>
        <div class="form-box">
            <label for="username">Nazwa użytkownika:</label>
            <input type="text" id="username" placeholder="Podaj nazwę użytkownika">
            <p class="error-text">error</p>
        </div>
        <div class="form-box">
            <label for="password">Hasło:</label>
            <input type="password" id="password" placeholder="Podaj hasło">
            <p class="error-text">error</p>
        </div>
        <div class="form-box">
            <label for="password2">Powtórz hasło:</label>
            <input type="password" id="password2" placeholder="Powtórz hasło">
            <p class="error-text">error</p>
        </div>
        <div class="form-box">
            <label for="email">Adres e-mail:</label>
            <input type="email" id="email" placeholder="Podaj adres e-mail">
            <p class="error-text">error</p>
        </div>
        <div class="control-buttons">
            <button class="clear">Wyczyść</button>
            <button class="send">Wyślij</button>
        </div>
        <div class="popup">
            <p>Formularz został poprawnie wysłany</p>
            <button class="close">Zamknij</button>
        </div>
    </form>
</div>

<script src="../../dist/js/projects/form_validator.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>