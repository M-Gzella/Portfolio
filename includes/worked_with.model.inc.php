<?php

declare(strict_types=1);

/**
 * Gets all items from database, where own = 0
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Return array of items from database
 */
function get_worked_with_projects(object $pdo): array {
    $query = 'SELECT * FROM all_projects WHERE own = 0';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}