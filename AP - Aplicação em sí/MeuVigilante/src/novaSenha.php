<?php include_once 'frontend/view/cabecalhoProtegido.php' ?>
   <h1>Redefinir Senha</h1>
   <div class="containerFormulario">
    <p class="alert alert-danger">As senhas não são iguais</p>
    <form name="novaSenha" method="post" action="">
            <p>Senha antiga: <input type="password" name="senhaAntiga" required></p>
            <p>Nova Senha: <input type="password" name="novaSenha" required></p>
            <p>Repita a nova senha: <input type="password" name="novaSenha2" required></p>
            <p><button class="btn btn-primary" type="reset">Limpar</button> <button class="btn btn-primary">Mudar Senha</button></p>
            <p><a href="modulos.php">Voltar para a tela de módulos</a></p>
    </form>
   </div>
<?php include_once 'frontend/view/rodape.html' ?>
</body>
</html>