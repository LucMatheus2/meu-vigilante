<?php
    class Foto{
        private $arquivo;

        public function getArquivo(){
            return $this->arquivo;
        }

        public function setArquivo($arquivo){
            $this->arquivo = $arquivo;
        }
    }