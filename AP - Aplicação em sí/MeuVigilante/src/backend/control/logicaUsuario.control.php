<?php
    session_start();
    
    function resgatarUsuario(){
        return $_SESSION['user'];
    }

    function verificarAutenticação(){
        if(isset($_SESSION['user']) == false){
            http_response_code(403);
            echo "<script>window.location.href = 'login.php'</script>";
        };
    }
    function criarAutenticação($user){
        $_SESSION['user'] = $user;
    }
    function removerAutenticação(){
        session_unset();
        session_destroy();
    }