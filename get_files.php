<?php
// get_files.php

require_once 'db_connection.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, filename, category FROM resources";
$result = $conn->query($sql);

$files = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $files[] = $row;
    }
}

echo json_encode($files);

$conn->close();
?>