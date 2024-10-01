<?php
// db_connection.php

$servername = "localhost";
$username = "root";
$password = "";  // By default, XAMPP's MySQL root user has no password
$dbname = "ctu_resources";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If you reach here, connection is successful
// echo "Connected successfully";
?>