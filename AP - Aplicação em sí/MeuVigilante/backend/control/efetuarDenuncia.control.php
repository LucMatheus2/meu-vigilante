<?php
    header('Content-type:application/json');
    header('Access-Control-Allow-Origin:*');

    require_once '../model/Denúncia.class.php';
    include_once '../model/conexão.php';

    $Denúncia = new Denúncia();

    //Pontos
    $Denúncia->setDenunciante($_POST['Denunciante']);
    $Denúncia->setTexto($_POST['Denuncia']);
    $Denúncia->setLatitude($_POST['Latitude']);
    $Denúncia->setLongitude($_POST['Longitude']);
    $Denúncia->setFoto($_POST['Foto']);
    
    $resp = $Denúncia->efetuarDenuncia($conexão);
    echo json_encode($resp);
    unset($Denúncia);