<?php
    include_once '../../frontend/view/ini.php';

    class Denunciante{
        
        //Atributos
        private $cpf;
        private $nome;
        private $senha;

        //Métodos
        public function cadastrarUsuario($conexao) {
            $stmt = $conexao->prepare("INSERT INTO ".DENUNCIANTES." VALUES (?,?,?)");
            
            $stmt->bindValue(1,$this->getCPF());
            $stmt->bindValue(2,$this->getNome());
            $stmt->bindValue(3,$this->getSenha());

            return $stmt->execute();
        }

        public function listarUsuario($conexao){
            $cpf = $this->getCPF();
            $resposta = $conexao->query("SELECT * FROM ".DENUNCIANTES." WHERE CPF = '$cpf'");
            
            foreach ($resposta as $dados){
                $this->setCPF($dados['CPF']);
                $this->setNome($dados['Nome']);
                $this->setSenha($dados['Senha']);
            }
        }

        public function deletarUsuario($conexao){
            $cpf = $this->getCPF();
            $resposta = $conexao->query("DELETE * FROM ".DENUNCIANTES." WHERE CPF = '$cpf'");
            return $resposta
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