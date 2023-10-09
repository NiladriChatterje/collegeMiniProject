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
DELETE FROM user_event 
WHERE timestamp = ".$_POST['time']."; 
AND user_id=".$_POST['id']."
AND event_status=".$_POST['event'].";");


$conn->close();
