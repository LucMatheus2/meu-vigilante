<?php

    include_once './ini.php';

    class Fiscal{
        //Atributos
        private $nome;
        private $email;
        private $senha;

        //Métodos
        public function listarFiscal($conexão){
            $stmt = $conexão->prepare("SELECT * FROM ".FISCAIS." WHERE Email = ? AND SENHA = ? LIMIT 1");
            $stmt->bindValue(1,$this->getEmail());
            $stmt->bindValue(2,$this->getSenha());
            $stmt->execute();

            if ($stmt->rowCount() == 1) {
                foreach($stmt as $usuario) {
                    $this->setNome($usuario['Nome']);
                }
                return true;
            } 
            else {
                return false;
            }
        }

        //Funções de Agregação
        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function getEmail(){
            return $this->email;
        }
        public function setEmail($email){
            $this->email = $email;
        }
        public function getSenha(){
            return $this->senha;
        }
        public function setSenha($senha){
            $this->senha = hash('sha512',$senha);
        }
    }