<?php

declare(strict_types=1);
function get_frontend_skills (object $pdo) {
    $query = 'SELECT * FROM skills WHERE type = "frontend";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function get_backend_skills (object $pdo) {
    $query = 'SELECT * FROM skills WHERE type = "backend";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function get_other_skills (object $pdo) {
    $query = 'SELECT * FROM skills WHERE type = "other";';
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}