<?php
     header('Content-type:application/json');
     header('Access-Control-Allow-Origin:*');
    
     require_once '../model/Denunciante.class.php';
     include_once '../model/conexao.php';

     $usuario = new Denunciante();

     $usuario->setCPF($_GET['cpf']);
     $usuario->setSenha($_GET['senha']);

     $resposta = $usuario->listarUsuario($conexão);
    
     echo json_encode($resposta);
     unset($usuario);