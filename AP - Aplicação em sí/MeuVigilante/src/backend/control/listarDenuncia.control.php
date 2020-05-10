<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');
    
    require_once '../model/Denúncia.class.php';
    include_once '../model/conexão.php';
    
    $Denúncia = new Denúncia();

    $Denúncia->setDenunciante($_POST['Denunciante']);

    $resp = $Denúncia->listarDenuncias($conexão);
    echo json_encode($resp);
    unset($Denúncia);