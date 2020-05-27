function validarLogin(){
    var JSuser = formularioDeLogin.user.value;
    var JSsenha = formularioDeLogin.senha.value;

    if (JSuser == "" || JSsenha == ""){
        $("#avisoLogin").text("Um dos campos está em branco");
        dispararAlertaDeMensagemNaTelaDeLogin()
        return false;
    } 
    else {
        $.ajax({
            url:'http://localhost/MeuVigilante/backend/control/listarFiscal.control.php',
            type:'POST',
            data:{
                user:JSuser,
                senha:JSsenha
            },
            success:function(r){
                if (r == false) {
                    $("#avisoLogin").html("Usuário(a) não encontrado(a)<br/>Verifique se você digitou os campos corretamente e tente novamente");
                    dispararAlertaDeMensagemNaTelaDeLogin();
                } else {
                    document.getElementById('avisoLogin').className = "alert alert-success";
                    $("#avisoLogin").text("Usuário logado!, você será redirecionado em breve");
                    dispararAlertaDeMensagemNaTelaDeLogin();
                }
                return r;
            },
            error:function(e){
                $("#avisoLogin").html("Houve um erro de conexão com o banco de dados.<br/>Contate o seu programador.<br/>Cod:. "+e.message);
                dispararAlertaDeMensagemNaTelaDeLogin();
                return false;
            }
        });
    }
}
function listarDenúncias(){
    var listagemDeDenúncias = document.querySelector("#listagemDeDenúncias tbody");
    $.ajax({
        url: 'http://localhost/MeuVigilante/backend/control/listarTodasAsDenuncias.control.php',
        success:function(r){
            let tam = r.length;
            for(let i = 0; i < tam; i++){
                listagemDeDenúncias.innerHTML += "<tr>";
                listagemDeDenúncias.innerHTML += `<th scope='row'>${r[i].CodSerie}</th>`;
                listagemDeDenúncias.innerHTML += `<td>${r[i].Denuncia}</td>`;
                listagemDeDenúncias.innerHTML += `<td>${r[i].Estado}</td>`;
                listagemDeDenúncias.innerHTML += "<td><button class='btn btn-success'>Averiguar Denúncia</button> <button class='btn btn-danger'>Rejeitar</button></td>";
                listagemDeDenúncias.innerHTML += "</tr>";
            }
        },
        error:function(e){
            alert("Erro no banco de dados");
        }
    });
}

function dispararAlertaDeMensagemNaTelaDeLogin(){
    $("#avisoLogin").fadeIn(500);
    $("#avisoLogin").delay(1500);
    $("#avisoLogin").fadeOut(500);
}