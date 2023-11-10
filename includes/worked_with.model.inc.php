<?php

declare(strict_types=1);

function get_worked_with_projects(object $pdo) {
    $query = 'SELECT * FROM all_projects WHERE own = 0';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}