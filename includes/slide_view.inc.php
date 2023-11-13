<?php
declare(strict_types=1);

/**
 * Generates project slides from twig template
 *
 * @param array $projects
 *   Array of projects from database
 * @param $twig
 *   Twig environment
 *
 * @return mixed
 *   Returns filled project slide
 */
function generate_slide_projects(array $projects, $twig) {

    $template = $twig->load('slide.html.twig');

    return $template->render([
        'slider' => $projects,
    ]);
}