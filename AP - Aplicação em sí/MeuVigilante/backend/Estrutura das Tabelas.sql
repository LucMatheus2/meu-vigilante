/* Estruturas das tabelas */

/* Criando o banco de dados */
CREATE DATABASE meuVigilante;

/* Tabela de Denuncias */
CREATE TABLE mv_tb_denuncia(
	Cod_serie int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Denunciante varchar(11),
    Descricao text,
    Latitude double,
    Longitude double,
    Data_de_nascimento date,
    Foto varchar(100),
    Estado ENUM('S','H','E','V','R','A'),
    FOREIGN KEY (Estado) REFERENCES mv_tb_denunciante(Cod_estado)
)DEFAULT CHARSET=utf8;

/* Tabela de estados */
CREATE TABLE mv_tb_estado(
    Cod_estado char(1) PRIMARY KEY DEFAULT 'S',
    Descricao varchar(60)
)DEFAULT CHARSET=utf8;

/* Tabela de Denunciante */
CREATE TABLE mv_tb_denunciante(
    CPF varchar(14) PRIMARY KEY,
    Nome varchar(60),
    Senha varchar(128)
)DEFAULT CHARSET=utf8;

/* Inserindo registros */
INSERT INTO mv_tb_estado VALUES ('S','Solicitada'),('H','Homologada'),('E','Encaminhada'),('V','Verificada'),('R','Rejeitada ou Ignorada'),('A','Averiguada');
