//Escopo Global
var isAnonimo = false
var txtAviso = document.getElementById('aviso')
var txtLogin = document.getElementsByName('login')[0]
var txtSenhaCadastro2 = document.getElementsByName('senha2')[0]
var btnCadastrar = document.getElementById('btnCadastrar')

//Eventos DOM
document.getElementById('btnMenu').addEventListener('click',mostrarMenu)
document.querySelector('header nav button').addEventListener('click',esconderMenu)
document.getElementById('btnAjudaLogin').addEventListener('click',ensinarComoLogar)
document.getElementsByName('login')[0].addEventListener('keyup',validarAppCPFLogin)
document.getElementsByName('login')[0].addEventListener('blur',validarAppCPFLogin)
txtSenhaCadastro2.addEventListener('blur',validarSenhasDeCadastro)

//Funções
function criarBotãoDoMenu(){
    document.getElementById('btnMenu').style.display = "block"
}
function destruirBotãoDoMenu(){
    document.getElementById('btnMenu').style.display = "none"
}
function mostrarMenu(){
    document.getElementById('btnMenu').style.display = "none"
    document.getElementsByTagName('header')[0].style.display = "block"
    document.querySelector('header nav').style.left = "0"
}
function esconderMenu(){
    document.getElementById('btnMenu').style.display = "block"
    document.querySelector('header nav').style.left = "-100%"
    document.getElementsByTagName('header')[0].style.display = "none"
}
function ensinarComoLogar(){
    alert("O Login é o seu CPF\nEx: 123.456.789-01")
}
function preLoading(){
   carregarPaginaDe('Login')
}
function esconderPaginas(){
    var TAM = document.getElementsByTagName('section').length
    for(i=0;i<TAM;i++){
        document.getElementsByTagName('section')[i].style.display = "none"
    }
}
function carregarPaginaDe(nomeDaPagina){
    esconderPaginas()
    switch (nomeDaPagina) {
        case 'Login':
            document.getElementById('telaDelogin').style.display = "block"
            break
        case 'Cadastro':
            document.getElementById('telaDeCadastro').style.display = "block"
            break;
        case 'Principal':
            document.getElementById('telaPrincipal').style.display = "block"
            break;
        case 'Denuncia':
            document.getElementById('telaDeDenuncia').style.display = "block"
            break;
        default:
            break;
    }
}
function avisarSobreOAnonimato(){
    document.getElementById('avisoDeAnonimato').style.display = "block"
}
function fecharSobreOAnonimato(){
    document.getElementById('avisoDeAnonimato').style.display = "none"
}
function logar(){
    criarBotãoDoMenu()
    isCPFOk = validarAppCPFLogin()

    if (txtLogin.value.length == 0) {
        alert("O Campo está em branco")
        return false
    }
    
    if (isCPFOk == true){
        carregarPaginaDe('Principal')
    } else {
        return false
    }
}
function alterarParaPerfilAnônimo(){
    var Botoes = document.querySelectorAll('#telaPrincipal ul li button')
    var numeroDeBotoes = Botoes.length
    var i = 0
    fecharSobreOAnonimato()
    criarBotãoDoMenu()
    for(i=0;i<numeroDeBotoes;i++){
        Botoes[i].className = "btn btn-dark"
    }
    document.querySelector('footer').style.backgroundColor = "#000"
    document.querySelector('body').style.backgroundImage = "url('../img/fundoAplicativoP&B.svg.png');"
}
function logarAnonimamente(){
    alterarParaPerfilAnônimo()
    isAnonimo = true
    carregarPaginaDe('Principal')
}
function deslogar(){
    //Funções de deslogar
    isAnonimo = false
    destruirBotãoDoMenu()
    preLoading()
}
function iniciarDenuncia(){
    document.getElementById('etapaDeTipoDeDenuncia').style.display = "block"
    document.getElementById('etapaDeConclusaoDaDenuncia').style.display = "none"
    carregarPaginaDe('Denuncia')
}
function encaminharDenuncia(args){
    var ocorrencia = document.getElementsByName('ocorrencia')[0]
    var blocoOcorrencia = document.getElementById('blocoOcorrencia')
    
    String(args)
    args = args.toUpperCase()
    
    if (args == ""){
        ocorrencia.value = ""
        blocoOcorrencia.style.display = "block"
    } else {
        ocorrencia.value = args
        blocoOcorrencia.style.display = "none"
    }

    document.getElementById('etapaDeTipoDeDenuncia').style.display = "none"
    document.getElementById('etapaDeConclusaoDaDenuncia').style.display = "block"
}
function sair(){
    var confirmar = confirm("Você deseja mesmo sair?")
    if (confirmar == true) {
        close()
    }
}
function consultarAsMinhasDenuncias(){
    if (isAnonimo == true){
        alert("O rastreamento é feito por usuários autenticados por questões de segurança e consentimento.")
        carregarPaginaDe('Principal')
    }
}
function validarSenhasDeCadastro(){
    var txtSenhaCadastro = document.getElementsByName('senha1')[0].value
    var txtSenhaCadastro2V = txtSenhaCadastro2.value

    if (txtSenhaCadastro != txtSenhaCadastro2V){
        alert("As senhas não coincidem")
        btnCadastrar.disabled = true
    } else {
        btnCadastrar.disabled = false
    }
}
function validarAppCPFLogin(){
    var btnLoginJS = document.getElementById('btnLogin')
    let isValidoLogin = validarCPF(txtLogin)

    //Para o login
    if (txtLogin.value.length > 0 && txtLogin.value.length < 14) {
        btnLoginJS.disabled = true
    }
    else if (isValidoLogin == false) {
        txtAviso.innerText = "O CPF é invalido!"
        txtAviso.style.display = "block"
        btnLoginJS.disabled = true
    } else {
        txtAviso.style.display = "none"
        btnLoginJS.disabled = false
    }
}