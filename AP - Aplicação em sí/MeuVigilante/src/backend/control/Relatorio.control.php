<?php
    header('Access-Control-Allow-Origin:*');
    
    require_once '../model/Denuncia.class.php';
    include_once '../model/conexao.php';
    
    $Comprovante = new Denúncia();

    $Comprovante->setCodDenuncia($_GET['Denuncia']);

    $Comprovante->gerarRelatorio($conexão);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<title>Comprovante de Denúncia</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		@media print {
			* {
				background:transparent !important;
				color:#000 !important;
				text-shadow:none !important;
				filter:none !important;
				-ms-filter:none !important;
			}
			body {
				margin:0;
				padding:0;
				font-family: "Times New Roman",sans-serif;
				text-transform: uppercase;
			}
			header{
				text-align: center;
			}
			header figure ul li{
				display: inline;
			}
			@page {
				margin: 0.5cm;
			}
			section{
				text-align: left;
				margin: 0 3pt;
			}
			#codDenuncia {
				text-align: right;
				font-weight: bold;
			}
			.titulo{
				font-weight: bold;
			}
			.descricao{
				padding: 2%;
				border: 1pt solid black;
				text-align: justify;
			}
			footer{
				text-align: center;
				text-transform: capitalize;
				font-style: italic;
				color: gray;
			}
		}
	</style>
</head>
<body>
	<header>
		<figure>
			<ul>
				<li><img src="imagens/logoSEMMA.jpeg" alt="Logo da SEMMA"></li>
				<li><img src="imagens/meuVigilante_logo0.1.svg.png" alt="Logo meuVigilante"></li>
			</ul>
		</figure>
		<h1>Secretaria Municipal do Meio Ambiente de Castanhal</h1>
		<h2>Comprovante de Denúncia</h2>
	</header>
	<section>
		<p id="codDenuncia">Código de identificação : <?="DEN-".$Comprovante->getCodDenuncia();?></p>
		
		<p class="titulo">Denunciante</p>
		<p class="descricao"><?=$Comprovante->getDenunciante();?></p>

		<p class="titulo" style="text-align: center;">Denúncia relatada</p>
		<p class="descricao"><?=$Comprovante->getTexto();?></p>
		
		<p class="titulo">Data referente da denúncia</p>
		<p class="descricao"><?=$Comprovante->getData();?></p>

		<p class="titulo">Estado Atual : <?=$Comprovante->getEstado();?></p>
	</section>
	<footer>
		<p>&copy; <span id="anoAtual"></span> - Secretaria Municipal do Meio Ambiente de Castanhal</p>
		<p>Comprovante gerado no dia : <span id="dataDoComprovante"></span></p>
	</footer>
	<script type="text/javascript">
		var Data = new Date();
		
		var dia = Data.getUTCDay();
		var mes = Data.getMonth()+1;
		var ano = Data.getFullYear();

		var hora = Data.getHours();
		var minutos = Data.getMinutes();
		var segundos = Data.getSeconds();

		if (dia < 10) {
			dia = String("0"+dia);
		}
		if (mes < 10) {
			mes = String("0"+mes);
		}
	    if (hora < 10) {
			hora = String("0"+hora);
		}
		if (minutos < 10) {
			minutos = String("0"+minutos);
		}
		if (segundos < 10) {
			segundos = String("0"+segundos);
		}
		dia = String(dia);
		mes = String(mes);
		ano = String(ano);
		hora = String(hora);
		minutos = String(minutos);
		segundos = String(segundos);

		window.document.getElementById('anoAtual').innerHTML = String(Data.getFullYear())
		window.document.getElementById('dataDoComprovante').innerHTML = `${dia}/${mes}/${ano} ás ${hora}:${minutos}:${segundos}`;
		print();
	</script>
</body>
</html>