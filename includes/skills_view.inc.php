<?php

/**
 * Generates skill cards from twig template
 *
 * @param array $skills
 *   Array of skills from database
 * @param $twig
 *   Twig environment
 *
 * @return mixed
 *   Returns filled template of skill cards
 */
function generate_skills (array $skills, $twig) {
    $template = $twig->load('skills.html.twig');

    return $template->render([
       'skills' => $skills
    ]);
}