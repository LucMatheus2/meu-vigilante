<?php
    include_once 'ini.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- METADADOS -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEU VIGILANTE</title>
    <meta name="description" content="Aplicativo de denúncia de descare de lixo em Castanhal">
    <meta name="generator" content="Visual Studio Code">
    <link rel="icon" href="<?=RAIZ?>/frontend/img/icone.png" type="image/png">
    <link rel="shortcut icon" href="<?=RAIZ?>/frontend/img/icone.png" type="image/png">
    <!-- SEO -->
    <!-- // Colocar Depois // -->
    <!-- Link CSS -->
    <link rel="stylesheet" href="<?=RAIZ?>/frontend/css/bootstrap.css">
    <link rel="stylesheet" href="<?=RAIZ?>/frontend/css/design.css">
</head>
<body>
    <button class="btnMenuMobile" id="btnMenu">&#9776;</button>
    <header>
        <nav>
            <button class="btnMenuMobile">&#10060;</button>
                <ul>
                    <li><a href="#">Efetuar Denuncias</a></li>
                    <li><a href="#">Consultar Denuncias</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            <div id="rodape-mobile">
                &copy; 2020 - Universidade do Estado do Pará
            </div>
        </nav>
    </header>