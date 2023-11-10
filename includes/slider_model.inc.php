<?php

declare(strict_types=1);
function get_sliders_elements(object $pdo) {
    $query = 'SELECT * FROM all_projects WHERE slider = 1;';
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}