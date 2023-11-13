<?php

declare(strict_types=1);

/**
 * Gets all items from database, where type = frontend
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Return array of items from database
 */
function get_frontend_skills (object $pdo): array {
    $query = 'SELECT * FROM skills WHERE type = "frontend";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

/**
 * Gets all items from database, where type = backend
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Return array of items from database
 */
function get_backend_skills (object $pdo): array {
    $query = 'SELECT * FROM skills WHERE type = "backend";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

/**
 * Gets all items from database, where type = other
 *
 * @param object $pdo
 *   Needed for database connection
 *
 * @return array
 *   Return array of items from database
 */
function get_other_skills (object $pdo): array {
    $query = 'SELECT * FROM skills WHERE type = "other";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}