<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');

    require_once '../model/Denuncia.class.php';
    include_once '../model/conexao.php';

    $Denúncia = new Denúncia();

    //Pontos
    $Denúncia->setDenunciante($_GET['Denunciante']);
    $Denúncia->setTexto($_GET['Denuncia']);
    $Denúncia->setLatitude($_GET['Latitude']);
    $Denúncia->setLongitude($_GET['Longitude']);
    $Denúncia->setFoto($_GET['Foto']);
    
    

    $resp = $Denúncia->efetuarDenuncia($conexão);
    echo json_encode($resp);
    unset($Denúncia);