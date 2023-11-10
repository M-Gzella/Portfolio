<?php
require_once '../vendor/autoload.php';
require_once '../includes/twig.inc.php';
require_once '../includes/dbh.inc.php';
require_once '../includes/own_projects_model.inc.php';
require_once '../includes/worked_with.model.inc.php';
require_once '../includes/slide_view.inc.php';
require_once '../includes/worked_with_view.inc.php';

global $twig;
global $pdo;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michał Gzella</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Epilogue&family=Montserrat:wght@400;600;900&family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../dist/css/projects.min.css">
</head>

<body class="light_theme">
<div class="wrapper">
    <section id="own_projects" class="section own_projects project_page">
        <h2>Własne projekty</h2>
        <div class="arrow_right_back"></div>
        <div class="slides_container own_projects_slides_container">
            <?php
            echo generate_slide_projects(get_all_projects($pdo), $twig);
            ?>
        </div>
    </section>

    <section id="main_page" class="section main_page my_projects active project_page">
        <div class="bulb"></div>
        <nav class="nav">
            <div class="hamburger_btn"></div>
            <div class="menu_mobile">
                <div class="close_menu">x</div>
                <ul>
                    <li><a class="menu" href="/#main_page">Home</a></li>
                    <li><a class="menu" href="/#about_me">O mnie</a></li>
                    <li><a class="menu" href="/#skills">Umiejętności</a></li>
                    <li><a class="menu" href="/#my_works">Moje prace</a></li>
                    <li><a class="menu" href="/#contact">Kontakt</a></li>
                </ul>
            </div>
            <div class="nav_left">
                <ul>
                    <li><a class="menu" href="/#main_page">Home</a></li>
                    <li><a class="menu" href="/#about_me">O mnie</a></li>
                    <li><a class="menu" href="/#skills">Umiejętności</a></li>
                    <li><a class="menu" href="/#my_works">Moje prace</a></li>
                    <li><a class="menu" href="/#contact">Kontakt</a></li>
                </ul>
            </div>
            <div class="nav_right">
                <div class="socials">
                    <a class="github" href="https://github.com/M-Gzella" target="_blank"></a>
                    <a class="linkedin" href="https://www.linkedin.com/in/micha%C5%82-gzella-554243291/" target="_blank"></a>
                </div>
                <div class="theme_btn">
                    <div class="theme_bg">
                        <div class="theme_element"></div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="content">
            <h2>Moje prace</h2>
        </div>
        <div class="arrow_left">
            <div class="text_container">
                <span>Moje własne</span><span> projekty</span>
            </div>
        </div>
        <div class="arrow_right">
            <div class="text_container">
                <span>Projekty przy których</span><span> pracowałem</span>
            </div>
        </div>
    </section>

    <section id="worked_with" class="section worked_with project_page">
        <h2>Projekty przy których pracowałem</h2>
        <div class="arrow_left_back"></div>
        <div class="slides_container worked_with_slides_container">
            <?php
            echo generate_work_projects(get_worked_with_projects($pdo), $twig);
            ?>
        </div>
    </section>

    <script src="../dist/js/projects.min.js"></script>
</body>
</html>