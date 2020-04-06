//Escopo Global


//Eventos DOM
document.getElementById('btnMenu').addEventListener('click',mostrarMenu)
document.querySelector('header nav button').addEventListener('click',esconderMenu)
document.getElementById('btnAjudaLogin').addEventListener('click',ensinarComoLogar)

//Funções
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
   esconderPaginas()
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