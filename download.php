<?php
// download.php

require_once 'db_connection.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['download']) && !empty($_POST['files'])) {
    $fileIds = $_POST['files'];
    $fileIds = implode(',', array_map('intval', $fileIds));
    
    $sql = "SELECT filepath FROM resources WHERE id IN ($fileIds)";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $filepath = $row['filepath'];
            if(file_exists($filepath)) {
                header('Content-Type: application/pdf');
                header('Content-Disposition: attachment; filename="'.basename($filepath).'"');
                readfile($filepath);
            } else {
                echo "File not found.";
            }
        }
    } else {
        echo "No files selected for download.";
    }
}

$conn->close();
?>