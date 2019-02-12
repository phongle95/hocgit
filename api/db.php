<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $servername = "localhost";
    // $username = "hoctien1_root";
    // $password = "Anhyeuem1.";
    // $dbname = "hoctien1_tripcar";
    // $username = "id6562944_phongle";
    // $password = "lehongphong"; 
    // $dbname = "id6562944_databasethammy";
    $username = "root";
    $password = ""; 
    $dbname = "thammyvien";
    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_set_charset($conn,"utf8"); 
?>