<?php
require_once 'vendor/autoload.php';
require_once 'includes/twig.inc.php';
require_once 'includes/dbh.inc.php';
require_once 'includes/slider_model.inc.php';
require_once 'includes/skills_model.inc.php';
require_once 'includes/slide_view.inc.php';
require_once 'includes/skills_view.inc.php';
require_once 'includes/form_handler_view.inc.php';

global $twig;
global $pdo;
session_start();
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <script src="https://www.google.com/recaptcha/api.js?render=6Lf-6AopAAAAAD5T6I_Hq1QkpJgnFZtiHifayLFO"></script>
    <script>
        grecaptcha.ready(function() {
            grecaptcha.execute('6Lf-6AopAAAAAD5T6I_Hq1QkpJgnFZtiHifayLFO', { action: 'send_form' })
                .then(function(token) {
                    document.getElementById('recaptcha_token').value = token;
                });
        });
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JGGTBX9MD7"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JGGTBX9MD7');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michał Gzella | Portfolio</title>
    <meta name="title" content="Michał Gzella | Portfolio" />
    <meta name="description" content="Eksperymentuje z kodem, a czasami nawet on eksperymentuje ze mną" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://michalgzella.pl" />
    <meta property="og:title" content="Michał Gzella | Portfolio" />
    <meta property="og:description" content="Eksperymentuje z kodem, a czasami nawet on eksperymentuje ze mną" />
    <meta property="og:image" content="./dist/img/meta_image.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://michalgzella.pl" />
    <meta property="twitter:title" content="Michał Gzella | Portfolio" />
    <meta property="twitter:description" content="Eksperymentuje z kodem, a czasami nawet on eksperymentuje ze mną" />
    <meta property="twitter:image" content="./dist/img/meta_image.png" />

    <link rel="apple-touch-icon" sizes="180x180" href="./dist/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./dist/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./dist/img/favicon-16x16.png">
    <link rel="manifest" href="./site.webmanifest">
    <link rel="mask-icon" href="./dist/img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Epilogue&family=Montserrat:wght@400;600;900&family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./dist/css/style.min.css">
</head>

<body class="light_theme">
    <div class="global_nav">
        <ul>
            <li><a class="active" href="#main_page"></a></li>
            <li><a href="#about_me"></a></li>
            <li><a href="#skills"></a></li>
            <li><a href="#my_works"></a></li>
            <li><a href="#contact"></a></li>
        </ul>
    </div>
    <div class="wrapper">
        <section id="main_page" class="section main_page active">
            <div class="bulb"></div>
            <nav class="nav">
                <div class="hamburger_btn"></div>
                <div class="menu_mobile">
                    <div class="close_menu">x</div>
                    <ul>
                        <li><a class="menu" href="#main_page">Home</a></li>
                        <li><a class="menu" href="#about_me">O mnie</a></li>
                        <li><a class="menu" href="#skills">Umiejętności</a></li>
                        <li><a class="menu" href="#my_works">Moje prace</a></li>
                        <li><a class="menu" href="#contact">Kontakt</a></li>
                    </ul>
                </div>
                <div class="nav_left">
                    <ul>
                        <li><a class="menu" href="#main_page">Home</a></li>
                        <li><a class="menu" href="#about_me">O mnie</a></li>
                        <li><a class="menu" href="#skills">Umiejętności</a></li>
                        <li><a class="menu" href="#my_works">Moje prace</a></li>
                        <li><a class="menu" href="#contact">Kontakt</a></li>
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
                <div class="content_left">
                    <div class="content_left--top">
                        <h1><span>Cieszę się, </span><span>że tutaj jesteś!</span></h1>
                    </div>
                    <div class="content_left--bottom">
                        <span class="line"></span>
                        <span class="element_left"></span>
                        <span class="element_right"></span>
                    </div>
                </div>
                <div class="content_right">
                    <p>Eksperymentuje z kodem,</p><p>a czasami nawet on</p><p>eksperymentuje ze mną</p>
                </div>
            </div>

        </section>

        <section id="about_me" class="section about_me active">
            <h2>O mnie</h2>
            <div class="content">
                <div class="content_left">
                    <div class="content_left--picture"></div>
                    <div class="content_left--info">
                        <p class="name">Michał Gzella</p>
                        <p class="birth">20.02.2001r.</p>
                        <p class="location">Gdańsk</p>
                        <p class="education">Technikum Łączności nr. 4</p>
                    </div>
                </div>
                <div class="content_right">
                    <div class="content_right--about">
                        <span>Cześć!</span>
                        <p>Nazywam się Michał Gzella i mam 22 lata. Urodziłem się i nadal mieszkam w urokliwym Gdańsku. Jestem absolwentem technikum łączności nr. 4 w Gdańsku, gdzie specjalizowałem się w technice informatycznej.</p>
                        <p>Moja pasja do programowania sięga moich 17 lat, i od tego czasu nieustannie rozwijam się w tej dziedzinie. W 2019 roku podjąłem pracę w sieci restauracji McDonald’s, gdzie pracowałem jako kierownik zmiany nocnej, zdobywając cenne doświadczenie w zarządzaniu.</p>
                        <p>w 2022 roku zostałem zatrudniowy w firmie KingAPP® na stanowisko frontend developer. Tam mogłem w pełni wykorzystać swoje umiejętności, pracując nad tworzeniem atrakcyjnych interfejsów użytkownika.</p>
                        <p>Od 2022 roku aktywnie poszerzam oraz doskonale swoją wiedzę w zakrasie tworzenia stron internetowych.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="section skills active">
            <h2>Umiejętności</h2>
            <div class="skills_container">

                <div data-id="0" class="skill_card">
                    <div class="skill_card--top">
                        <div class="dots">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <p>Frontend</p>
                    </div>
                    <div class="skill_card--bottom">
                        <ul>
                            <?php
                                echo generate_skills(get_frontend_skills($pdo), $twig);
                            ?>
                        </ul>
                    </div>
                    <span class="chevron"></span>
                </div>

                <div data-id="1" class="skill_card">
                    <div class="skill_card--top">
                        <div class="dots">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <p>Backend</p>
                    </div>
                    <div class="skill_card--bottom">
                        <ul>
                            <?php
                                echo generate_skills(get_backend_skills($pdo), $twig);
                            ?>
                        </ul>
                    </div>
                    <span class="chevron"></span>
                </div>

                <div data-id="2" class="skill_card">
                    <div class="skill_card--top">
                        <div class="dots">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <p>Inne</p>
                    </div>
                    <div class="skill_card--bottom">
                        <ul>
                            <?php
                                echo generate_skills(get_other_skills($pdo), $twig);
                            ?>
                        </ul>
                    </div>
                    <span class="chevron"></span>
                </div>

            </div>
        </section>

        <section id="my_works" class="section my_work active">
            <h2>Moje prace</h2>
            <div class="content">
                <div class="slider_container">
                    <div class="prev_btn"></div>
                    <div class="next_btn"></div>
                    <div class="slider">
                        <?php
                            echo generate_slide_projects(get_sliders_elements($pdo), $twig);
                        ?>
                    </div>
                </div>
                <a href="projects/my_projects.php" class="check_btn">Sprawdź resztę</a>
            </div>
        </section>

        <section id="contact" class="section contact active">
            <h2>Kontakt</h2>
            <p>Masz pytania? Napisz do mnie!</p>
            <form action="includes/form_handler.inc.php" method="POST">
                <label for="name">Imię</label>
                <input id="name" name="name" type="text">

                <label for="email">E-mail</label>
                <input id="email" name="email" type="email">

                <label for="topic">Temat</label>
                <input id="topic" name="topic" type="text">

                <label for="message">Treść</label>
                <textarea id="message" name="message"></textarea>
                <button class ="form_btn">Wyślij</button>
                <input type="hidden" id="recaptcha_token" name="recaptcha_token" value="">
            </form>
            <?php
                show_errors();
                email_sent();
            ?>
        </section>
    </div>


    <script src="dist/js/main.min.js"></script>
</body>
</html>