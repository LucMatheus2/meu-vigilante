<?php
    include_once '../ini.php';
    
    class Denúncia {
        
        // Atributos
        private $codDenuncia;
        private $denunciante;
        private $texto;
        private $latitude;
        private $longitude;
        private $foto;
        private $estado;
        private $data;
        
        //Metodos
        public function efetuarDenuncia($conexão){
            $stmt = $conexão->prepare("INSERT INTO ".DENÚNCIAS."(Denunciante,Descricao,Latitude,Longitude,Data_de_nascimento,Foto,Estado) VALUES (?,?,?,?,NOW(),?,'S')");

            $stmt->bindValue(1,$this->getDenunciante());
            $stmt->bindValue(2,$this->getTexto());
            $stmt->bindValue(3,$this->getLatitude());
            $stmt->bindValue(4,$this->getLongitude());
            $stmt->bindValue(5,$this->getFoto());

            return $stmt->execute();
        }
        public function catalogarDenuncia($conexão){
            $resultado = [];

            $lista = $conexão->prepare("SELECT d.Cod_Serie as Cod,
            d.Denunciante,
            d.Descricao as Texto,
            d.Latitude,
            d.Longitude,
            d.Data_de_nascimento as Data,
            e.Descricao as Estado
            FROM ".DENÚNCIAS." as d INNER JOIN ".ESTADOS." as e ON e.Cod_estado = d.Estado
            WHERE Cod_Serie = ?");

            
            $lista->bindParam(1,$this->getCodDenuncia());
            $lista->execute();

            foreach ($lista as $pilha){
                $resultado = [
                    "CodSerie" => $pilha['Cod'],
                    "Denuncia" => $pilha['Texto'],
                    "Denunciante" => $pilha['Denunciante'],
                    "Latitude" => $pilha['Latitude'],
                    "Longitude" => $pilha['Longitude'],
                    "Data" => date('d/m/Y',strtotime($pilha['Data'])),
                    "Estado" => $pilha['Estado'],
                ];
            }

            return $resultado;
        }

        public function listarDenuncias($conexão){
            $user = $this->getDenunciante();
            $resultado = [];
            $i = 0;

            $lista = $conexão->prepare("SELECT d.Cod_Serie as Cod,
            d.Denunciante,
            d.Descricao as Texto,
            d.Latitude,
            d.Longitude,
            d.Data_de_nascimento as Data,
            e.Descricao as Estado
            FROM ".DENÚNCIAS." as d INNER JOIN ".ESTADOS." as e ON e.Cod_estado = d.Estado
            WHERE d.Denunciante = ? ORDER BY Data DESC");
            
            $lista->bindParam(1,$user);
            $lista->execute();

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
            if ($lista->rowCount() == 0){
                $resultado = false;
            }

            return $resultado;
        }

        public function listarTodasAsDenuncias($conexão){
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
            ORDER BY Data DESC");

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
        public function gerarRelatorio($conexão){
            $stmt = $conexão->prepare("SELECT d.Cod_Serie as Cod,
            de.Nome as Nome,
            d.Descricao as Denuncia,
            DATE_FORMAT(d.Data_de_nascimento,'%d/%m/%Y') as Data,
            e.Descricao as Estado 
            FROM ".DENÚNCIAS." as d INNER JOIN ".DENUNCIANTES." as de ON d.Denunciante = de.CPF INNER JOIN ".ESTADOS." as e ON e.Cod_estado = d.Estado WHERE Cod_Serie = ?");


            $stmt->bindParam(1,$this->getCodDenuncia());
            $stmt->execute();
            
            foreach ($stmt as $resultado) {
                $this->setDenunciante($resultado['Nome']);
                $this->setTexto($resultado['Denuncia']);
                $this->setEstado($resultado['Estado']);
                $this->setData($resultado['Data']);   
            }
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
        public function getData(){
            return $this->data;
        }
        public function setData($data){
            $this->data = $data;
        }
    }