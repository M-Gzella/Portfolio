<?php

declare(strict_types=1);

function generate_work_projects(array $projects, $twig) {

    $template = $twig->load('work.html.twig');

    return $template->render([
        'projects' => $projects
    ]);
}