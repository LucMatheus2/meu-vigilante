<?php
    include_once 'backend/model/conexão.php';
    include_once 'backend/model/Fiscal.class.php';
    include_once 'backend/control/logicaUsuario.control.php';

    $fiscal = new Fiscal();

    $fiscal->setEmail($_POST['user']);
    $fiscal->setSenha($_POST['senha']);

    $fiscal->listarFiscal($conexão);

    criarAutenticação($fiscal->getNome());
?>
<script>
    location.href = "modulos.php";
</script>