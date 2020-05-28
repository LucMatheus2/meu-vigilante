<?php
    include_once '../../ini.php';

    class Denunciante{
        
        //Atributos
        private $cpf;
        private $nome;
        private $senha;

        //Métodos
        public function cadastrarUsuario($conexao) {
            $stmt = $conexao->prepare("INSERT INTO ".DENUNCIANTES."(CPF,Nome,Senha,Classe) VALUES (?,?,?,DEFAULT)");
            
            $stmt->bindValue(1,$this->getCPF());
            $stmt->bindValue(2,$this->getNome());
            $stmt->bindValue(3,$this->getSenha());

            return $stmt->execute();
        }

        public function listarUsuario($conexao){
            $stmt = $conexao->prepare("SELECT * FROM ".DENUNCIANTES." WHERE CPF = ? AND Senha = ? AND privilegio = '2'");
            
            $stmt->bindValue(1,$this->getCPF());
            $stmt->bindValue(2,$this->getSenha());

            $stmt->execute();

            if ($stmt->rowCount() == 1){
                $resposta = [];
                foreach ($stmt as $usuarios){
                    $resposta = [
                    "CPF" => $usuarios['CPF'],
                    "Usuario" => $usuarios['Nome']
                    ];
                }
            } else {
                $resposta = false;
            }

            return $resposta;
        }

        public function deletarUsuario($conexao){
            $cpf = $this->getCPF();
            $resposta = $conexao->query("DELETE * FROM ".DENUNCIANTES." WHERE CPF = '$cpf'");
            return $resposta;
        }

        //Gets & Sets
        public function getCPF(){
            return $this->cpf;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf;
        }
        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function getSenha(){
            return $this->senha;
        }
        public function setSenha($senha){
            $this->senha = hash('sha512',$senha);
        }
    }