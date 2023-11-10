<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance manager</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/finance_manager.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>

<header>
    <h1><i class="fas fa-wallet"></i>Wallet</h1>
    <p>Twój osobity menedżer finansów!</p>
</header>
<main>
    <section class="transactions">
        <h2 class="title">Lista transakcji</h2>
        <div class="transaction-list">

            <div class="income-area">
                <h3>Przychód:</h3>
            </div>

            <div class="expenses-area">
                <h3>Wydatki:</h3>
            </div>
        </div>
    </section>
    <section class="options">
        <div>
            <h2 class="title">Dostępne środki</h2>
            <p class="available-money">0zł</p>
        </div>
        <div class="controls">
            <button class="add-transaction"><i class="fas fa-plus"></i>Dodaj transakcję</button>
            <button class="delete-all"><i class="far fa-trash-alt"></i>Usuń wszystko</button>
        </div>
        <div class="style-selection">
            <h2 class="title">Wybierz motyw:</h2>
            <div class="color-buttons">
                <button class="light"></button>
                <button class="dark"></button>
            </div>
        </div>
    </section>
</main>

<div class="add-transaction-panel">
    <h2 class="title">Dodaj nową transakcję</h2>

    <label for="name">Nazwa:</label>
    <small>(podaj nazwę transakcji)</small>
    <input type="text" id="name">

    <label for="amount">Kwota:</label>
    <small>(podaj kwotę transakcji, jeśli dodajesz wydatek, postaw znak minusa na początku kwoty)</small>
    <input type="number" id="amount">

    <label for="category">Wybierz kategorię:</label>
    <small>( [ + ] oznacza przychód, [ - ] oznacza wydatek)</small>
    <select id="category">
        <option value="none" selected disabled></option>
        <option value="income">[ + ] Przychód</option>
        <option value="shopping">[ - ] Zakupy</option>
        <option value="food">[ - ] Jedzenie</option>
        <option value="cinema">[ - ] Kino</option>
    </select>

    <div class="panel-buttons">
        <button class="save"><i class="fas fa-save"></i>Zapisz</button>
        <button class="cancel"><i class="far fa-window-close"></i>Anuluj</button>
    </div>
</div>

<script src="../../dist/js/projects/finance_manager.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>