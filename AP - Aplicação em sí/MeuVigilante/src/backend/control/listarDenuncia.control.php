<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');
    
    require_once '../model/Denuncia.class.php';
    include_once '../model/conexao.php';
    
    $Denúncia = new Denúncia();

    $Denúncia->setDenunciante($_GET['Denunciante']);

    $resp = $Denúncia->listarDenuncias($conexão);
    echo json_encode($resp);
    unset($Denúncia);