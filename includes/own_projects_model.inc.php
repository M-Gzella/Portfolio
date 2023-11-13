<?php

declare(strict_types=1);

/**
 * Gets all items from database, where own = 1
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Returns array of items from database
 */
function get_all_projects(object $pdo): array {
    $query = 'SELECT * FROM all_projects WHERE own = 1;';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}