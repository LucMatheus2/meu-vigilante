<?php include_once 'frontend/view/cabecalhoProtegido.php'; ?>
<section class="containerFormulario">
    <h1>Cadastro de Colaboradores</h1>
    <form name="formularioDeCadastro" method="post" action="Cadastrar.php">
        <p>Nome : <input type="text" name="nome"></p>
        <p>Senha : <input type="password" name="senha"></p>
        <p>Repetir Senha : <input type="password" name="repSenha"></p>
        <p><button type="reset" class="btn btn-primary">Limpar</button>  <button type="submit" class="btn btn-primary">Cadastrar</button></p>
        <p><a href="modulos.php">Voltar para os módulos</a></p>
    </form>
</section>
<?php include_once 'frontend/view/rodape.html'; ?>
</body>
</html>