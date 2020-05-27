<?php include_once 'frontend/view/cabecalho.html' ?>
    <section id="login">
        <figure>
            <img src="frontend/img/meuVigilante_logo0.1.svg" alt="Meu Vigilante" id="logo">
        </figure>
        <p id="avisoLogin" class="alert alert-danger">Usuário ou senha incorretos</p>
        <form name="formularioDeLogin" method="post" action="entrar.php">
        	Usuário : <input type="email" name="user" placeholder="seuemail@mail.com" required><br/>
        	Senha : <input type="password" name="senha" placeholder="******" required><br/>
            <p><a href="recuperarSenha.php">Esqueci a minha senha</a></p>
            <button type="reset" class="btn btn-primary">Limpar</button>
            <button type="submit" class="btn btn-primary" onclick="return validarLogin()">Entrar</button> 
        </form>
    </section>
<?php include_once 'frontend/view/rodape.html' ?>