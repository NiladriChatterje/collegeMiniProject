<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-type: application/json;charset=utf-8');


$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$var1 = $conn->query("
SELECT 
SUM(amount) FROM user_event 
WHERE user_id=".$_POST['id']."
GROUP BY event_status;
");

$var2 = $conn->query("
SELECT SUM(amount) FROM user_event WHERE user_id=".$_POST['id']." GROUP BY MONTH(timestamp);
");


$conn->close();
