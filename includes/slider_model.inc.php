<?php

declare(strict_types=1);

/**
 * Gets all items from database, where slider = 1
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Return array of items from database
 */
function get_sliders_elements(object $pdo): array {
    $query = 'SELECT * FROM all_projects WHERE slider = 1;';
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}