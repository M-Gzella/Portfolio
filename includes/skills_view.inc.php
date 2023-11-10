<?php

function generate_skills ($skills, $twig) {
    $template = $twig->load('skills.html.twig');

    return $template->render([
       'skills' => $skills
    ]);
}