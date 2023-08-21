<?php

$url = "http://www.example.com?topic=filters";
 
// Validate website url for query string
if(filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED)){
    echo "The <b>$url</b> contains query string";
} else{
    echo "The <b>$url</b> does not contain query string";
}


//Validating integers within a range [array]
$int = 75;
 
// Validate sample integer value
if(filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range" => 0,"max_range" => 100)))){
    echo "The <b>$int</b> is within the range of 0 to 100";
} else{
    echo "The <b>$int</b> is not within the range of 0 to 100";
}

//Sanitizing a string
$comment = "<h1>Hey there! How are you doing today?</h1>";
 
// Sanitize and print comment string
$sanitizedComment = filter_var($comment, FILTER_SANITIZE_STRING);
echo $sanitizedComment;


//Validating an IP
$ip = "172.16.254.1";
 
// Validate sample IP address
if(filter_var($ip, FILTER_VALIDATE_IP)){
    echo "The <b>$ip</b> is a valid IP address";
} else {
    echo "The <b>$ip</b> is not a valid IP address";
}
?>