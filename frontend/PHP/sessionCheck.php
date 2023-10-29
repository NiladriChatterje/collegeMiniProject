<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json; charset=utf-8');
session_start();
if (isset($_SESSION["username"]) && isset($_SESSION["userID"]))
    echo json_encode(["user_name" => $_SESSION["username"], "user_id" => $_SESSION["userID"]]);
else
    echo "false";
