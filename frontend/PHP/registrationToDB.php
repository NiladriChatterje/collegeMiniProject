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
INSERT INTO user VALUES
(".$_POST['user_id'].",".$_POST['user_name'].",".$_POST['user_email'].");");


$conn->close();
