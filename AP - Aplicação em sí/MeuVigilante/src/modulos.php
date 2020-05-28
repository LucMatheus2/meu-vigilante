<?php include_once 'frontend/view/cabecalhoProtegido.php'; ?>
<div id="containerOpções">
    <nav>
        <li><a href="Cadastro.php">Cadastrar Novo Usuário</a></li>
        <li><a href="novaSenha.php">Mudar Senha</a></li>
        <li><a href="sair.php">Sair</a></li>
    </nav>
</div>
<div>
    <table class="table table-striped" id="listagemDeDenúncias">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Estado</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <!--
            <tr>
                <th scope="row">1</th>
                <th>Lorem ipsum</th>
                <th>Solicitada</th>
                <th><button class="btn btn-success">Averiguar Denúncia</button> <button class="btn btn-danger">Rejeitar</button></th>->
            </tr>
            -->
        </tbody>
    </table>
</div>
<?php include_once 'frontend/view/rodape.html'; ?>
<script>
    listarDenúncias();
</script>
</body>
</html>