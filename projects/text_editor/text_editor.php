<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text editor</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4f548c60ed.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../dist/css/projects/text_editor.min.css">
</head>
<body>
<button class="back_btn" onclick="goBack()">Powrót</button>


<div class="buttons">
    <button class="sizeUp">+</button>
    <button class="sizeDown">-</button>
    <button class="color">color</button>
</div>
<div class="text">
    <p>Lorem ipsum dolor sit amet.</p>
</div>

<script src="../../dist/js/projects/text_editor.min.js"></script>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>