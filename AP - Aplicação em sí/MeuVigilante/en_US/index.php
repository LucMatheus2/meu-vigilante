<?php include_once '../frontend/view/cabecalho.php';?>

<!-- TELA DE LOGIN -->
<section id="telaDelogin">
    <div id="avisoDeAnonimato">
            <div>
                <figure>
                    <img src="<?=RAIZ?>/frontend/img/anonimato.svg" alt="Perfil de Anonimato">
                </figure>
                <h1>You are entering in the anonymous mode</h1>
                <p>If you're interested more in security, that was for you</p>
                <p><button type="button" class="btn btn-dark" onclick="logarAnonimamente()">Prosseguir mesmo assim</button></p>
                <p><button type="button" class="btn btn-danger" onclick="fecharSobreOAnonimato()">Não, eu agradeço</button></p>
            </div>
    </div>
    <figure>
        <img src="<?=RAIZ?>/frontend/img/meuVigilante_logo0.1.svg" alt="Logo do Meu Vigilante">
    </figure>
    <p class="alert alert-danger" id="aviso">Lorem ipsum sei lá</p>
    <form name="formularioDeLogin" method="post" action="index.php">
        <h1>Login <button type="button" class="btn btn-info" id="btnAjudaLogin">?</button></h1>
        <p><input type="text" name="login" placeholder="Seu Usuário" maxlength="14"></p>
        <h2>Senha</h2>
        <p><input type="password" name="Senha" placeholder="******"></p>
        <p><button type="submit" class="btn btn-primary" onclick="return logar()" id="btnLogin">Login</button></p>
        <p><button type="button" class="btn btn-secondary" onclick="carregarPaginaDe('Cadastro')">Sign up</button></p>
        <p><button type="button" class="btn btn-dark" onclick="avisarSobreOAnonimato()">Annonymous Mode</button></p>
        <p><button type="button" class="btn btn-secondary" onclick="sair()">Quit</button></p>
    </form>
</section>

<!-- TELA DE CADASTRO -->
<section id="telaDeCadastro">
    <figure>
        <img src="<?=RAIZ?>/frontend/img/meuVigilante_logo0.1.svg" alt="Logo do Meu Vigilante">
    </figure>
    <form name="formularioDeCadastro" method="post" action="index.php">
        <h1>CPF</h1>
        <p><input type="text" name="cpf" placeholder="123.456.789-01" onkeyup="preencherCPF(this)" maxlength="14"></p>
        <h2>Complete name</h2>
        <p><input type="text" name="nome" placeholder="Seu nome"></p>
        <h2>Password</h2>
        <p><input type="password" name="senha1" placeholder="Uma senha pessoal"></p>
        <h2>Same password</h2>
        <p><input type="password" name="senha2" placeholder="A mesma senha de antes"></p>
        <p><button type="submit" class="btn btn-primary" id="btnCadastrar">Sign up</button></p>
        <p><button type="button" class="btn btn-secondary" onclick="carregarPaginaDe('Login')">Back to menu</button></p>
    </form>
</section>

<!-- TELA PRINCIPAL -->
<section id="telaPrincipal">
    <ul>
        <li><button class="btn btn-danger" onclick="iniciarDenuncia()">Do a report</button></li>
        <li><button class="btn btn-primary" onclick="consultarAsMinhasDenuncias()">Check reports</button></li>
        <li><button class="btn btn-success" onclick="deslogar()">Logout</button></li>
    </ul>
</section>
<!-- TELA DA DENUNCIA -->
<section id="telaDeDenuncia">
    <!-- Tipo De Denuncia -->
    <div id="etapaDeTipoDeDenuncia">
        <h1>What is happening?</h1>
        <h2>What's your report?</h2>
        <ul>
            <li>
                <div>
                    <figure>
                        <img src="<?=RAIZ?>/frontend/img/ico_DescarteComun.png" alt="Descarte Comum">
                    </figure>
                    <h3>Descaso Comum</h3>
                    <p>Se é Lixo na rua, calçada, canais ou em algum terreno baldio.</p>
                    <p><button class="btn btn-danger" onclick="encaminharDenuncia('descarte irregular')">SEU PROBLEMA É AQUI</button></p>
                </div>
            </li>
            <li>
                <div>
                    <figure>
                        <img src="<?=RAIZ?>/frontend/img/ico_Queimadas.png" alt="Descarte Comum">
                    </figure>
                    <h3>Queimadas</h3>
                    <p>Se é queima de lixo, seja na sua casa ou em algum lugar ao seu redor, ou queimada em geral perto de área protegida.</p>
                    <p><button class="btn btn-danger" onclick="encaminharDenuncia('queimada')">SEU PROBLEMA É AQUI</button></p>
                </div>
            </li>
            <li>
                <div>
                    <figure>
                        <img src="<?=RAIZ?>/frontend/img/ico_Outros.png" alt="Descarte Comum">
                    </figure>
                    <h3>Outros</h3>
                    <p>Se não é nenhum dos dois mencionados acima.</p>
                    <p><button class="btn btn-danger" onclick="encaminharDenuncia('')">APERTE AQUI</button></p>
                </div>
            </li>
        </ul>
    </div>

    <!-- Dados Gerais da Denuncia -->
    <div id="etapaDeConclusaoDaDenuncia">
        <h1>Conte mais</h1>
        <h2>Descreva mais os dados da denuncia</h2>
        <form name="formularioDaDenuncia" method="post">
            <p id="blocoOcorrencia">Ocorrência : <input type="text" name="ocorrencia"></p>
            <p>Descreva a ocorrência</p>
            <textarea name="txtDescricaoDaOcorrencia"></textarea>
            <p><button type="button" class="btn btn-primary">Registrar Localização</button> <button type="button" class="btn btn-secondary">Anexar Imagem</button></p>
            <p><button type="submit" class="btn btn-danger">DENUNCIAR</button></p>
            <p><button type="button" class="btn btn-primary" onclick="iniciarDenuncia()">Voltar</button></p>
        </form>
    </div>
    <p><button class="btn btn-secondary" onclick="carregarPaginaDe('Principal')">Cancelar</button></p>
</section>
<?php include_once '../frontend/view/rodape.php';?>