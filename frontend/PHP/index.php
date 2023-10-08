<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-type: application/json;charset=utf-8');
$payload = $_POST;

echo json_encode(key($payload));
