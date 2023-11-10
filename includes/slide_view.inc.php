<?php
declare(strict_types=1);

function generate_slide_projects(array $projects, $twig) {

    $template = $twig->load('slide.html.twig');

    return $template->render([
        'slider' => $projects,
    ]);
}