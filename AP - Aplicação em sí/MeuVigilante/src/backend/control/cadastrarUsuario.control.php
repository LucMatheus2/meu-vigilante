<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');
   
    require_once '../model/Denunciante.class.php';
    include_once '../model/conexão.php';

    $usuario = new Denunciante();

    $usuario->setCPF($_POST['cpf']);
    $usuario->setNome($_POST['nome']);
    $usuario->setSenha($_POST['senha']);

    $resp = $usuario->cadastrarUsuario($conexão);
    echo json_encode($resp);
    unset($usuario);