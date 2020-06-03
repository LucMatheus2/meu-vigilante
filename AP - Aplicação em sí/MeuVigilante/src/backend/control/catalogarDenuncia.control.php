<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');
    
    require_once '../model/Denuncia.class.php';
    include_once '../model/conexao.php';
    
    $Denúncia = new Denúncia();

    $Denúncia->setCodDenuncia($_GET['Denuncia']);

    $resp = $Denúncia->catalogarDenuncia($conexão);
    echo json_encode($resp);
    unset($Denúncia);