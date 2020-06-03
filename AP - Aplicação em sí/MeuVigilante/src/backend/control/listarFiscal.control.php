<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');

    include_once '../ini.php';
    include_once '../model/conexao.php';
    include_once '../model/Fiscal.class.php';

    $fiscal = new Fiscal();

    $fiscal->setEmail($_POST['user']);
    $fiscal->setSenha($_POST['senha']);

    $res = $fiscal->listarFiscal($conexão);
    
    echo json_encode($res);
    unset($fiscal);