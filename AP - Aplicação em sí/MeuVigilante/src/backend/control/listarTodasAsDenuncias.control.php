<?php
     header('Content-type:application/json');
     header('Access-Control-Allow-Origin:*');
     
     require_once '../model/Denuncia.class.php';
     include_once '../model/conexao.php';
     
     $Denúncia = new Denúncia();

     $resp = $Denúncia->listarTodasAsDenuncias($conexão);
     echo json_encode($resp);
     unset($Denúncia);