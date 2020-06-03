<?php
    $db = 'meuVigilante';
    $port = 'localhost';
    $user = 'root';
    $pass = '';
    
    try {
        $conexão = new PDO("mysql:dbname=$db;host=$port",$user,$pass);
    } catch (PDOException $e){
        echo 'Deu ruim';
    }