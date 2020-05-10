<?php
    include_once '../../ini.php';
    
    class Denúncia {
        // Atributos
        private $codDenuncia;
        private $denunciante;
        private $texto;
        private $latitude;
        private $longitude;
        private $foto;
        private $estado;
        
        //Metodos
        public function efetuarDenuncia($conexão){
            $stmt = $conexão->prepare("INSERT INTO ".DENÚNCIAS."(Denunciante,Descricao,Latitude,Longitude,Data,Foto,Estado) VALUES (?,?,?,?,NOW(),?,'S')");

            $stmt->bindValue(1,$this->getDenunciante());
            $stmt->bindValue(2,$this->getTexto());
            $stmt->bindValue(3,$this->getLatitude());
            $stmt->bindValue(4,$this->getLongitude());
            $stmt->bindValue(5,$this->getFoto());

            return $stmt->execute();
        }

        public function listarDenuncias($conexão){
            $user = $this->getDenunciante();
            $resultado = [];
            $i = 0;

            $lista = $conexão->query("SELECT d.Cod_Serie as Cod,
            d.Denunciante,
            d.Descricao as Texto,
            d.Latitude,
            d.Longitude,
            d.Data,
            e.Descricao as Estado
            FROM ".DENÚNCIAS." as d INNER JOIN ".ESTADOS." as e ON e.Cod_estado = d.Estado
            WHERE d.Denunciante = '$user' ORDER BY Data DESC");

            foreach ($lista as $pilha){
                $resultado[$i] = [
                    "CodSerie" => $pilha['Cod'],
                    "Denuncia" => $pilha['Texto'],
                    "Denunciante" => $pilha['Denunciante'],
                    "Latitude" => $pilha['Latitude'],
                    "Longitude" => $pilha['Longitude'],
                    "Data" => date('d/m/Y',strtotime($pilha['Data'])),
                    "Estado" => $pilha['Estado'],
                ];
                $i++;
            }

            return $resultado;
        }

        //Gets & Sets
        public function getCodDenuncia(){
            return $this->codDenuncia;
        }
        public function setCodDenuncia($codDenuncia){
            $this->codDenuncia = $codDenuncia;
        }
        public function getTexto(){
            return $this->texto;
        }
        public function setTexto($texto){
            $this->texto = $texto;
        }
        public function getDenunciante(){
            return $this->denunciante;
        }
        public function setDenunciante($denunciante){
            $this->denunciante = $denunciante;
        }
        public function getLatitude(){
            return $this->latitude;
        }
        public function setLatitude($latitude){
            $this->latitude = $latitude;
        }
        public function getLongitude(){
            return $this->longitude;
        }
        public function setLongitude($longitude){
            $this->longitude = $longitude;
        }
        public function getFoto(){
            return $this->foto;
        }
        public function setFoto($foto){
            $this->foto = $foto;
        }
        public function getEstado(){
            return $this->estado;
        }
        public function setEstado($estado){
            $this->estado = $estado;
        }
    }