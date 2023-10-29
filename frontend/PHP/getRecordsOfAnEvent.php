<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json; charset=utf-8');


$host     = '127.0.0.1';
$db       = 'expense_tracker';
$user     = 'root';
$password = '';
$port     = 3306;


// Create connection
try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $var1 = "SELECT timestamp,purpose,amount FROM user_event WHERE user_id=$data->userID AND event_status='$data->nameId'";

    $res = $conn->prepare($var1);

    $res->execute();

    echo json_encode($res->fetchAll());
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
