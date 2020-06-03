<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');
   
    require_once '../model/Denunciante.class.php';
    include_once '../model/conexao.php';

    $usuario = new Denunciante();

    $usuario->setCPF($_GET['cpf']);
    $usuario->setNome($_GET['nome']);
    $usuario->setSenha($_GET['senha']);

    $resp = $usuario->cadastrarUsuario($conexão);
    echo json_encode($resp);
    unset($usuario);