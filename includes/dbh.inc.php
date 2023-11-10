<?php

$dsn = 'mysql:host=db;port=3306;dbname=projects';
$dbusername = 'root';
$dbpassword = 'root';
global $pdo;

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}