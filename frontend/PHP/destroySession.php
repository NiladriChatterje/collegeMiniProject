<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json; charset=utf-8');
session_start();
$_SESSION["username"] = null;
echo "{$_SESSION["username"]}";
