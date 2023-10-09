<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-type: text/html;charset=utf-8');


$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$var1 = $conn->query("
SELECT 
user_name FROM user
WHERE user_email=".$_POST['email']."
AND user_psw=".$_POST['psw'].";");

echo $var1;

$conn->close();