<?php 

class Ufologo {
    private $_pais;
    private $_legajo;
    private $_clave;

    public function __construct($pais,$legajo,$clave) {
        $this->_pais = $pais;
        $this->_legajo = $legajo;
        $this->_clave = $clave;
    }

    public function ToJSON() {
        $json = new StdClass();
        $json->pais = $this->_pais;
        $json->legajo = intval($this->_legajo);
        $json->clave = intval($this->_clave);
        return json_encode($json);
    }

    public function GuardarEnArchivo() {
        $ret = true;
        $json = new StdClass();
        $json->exito = $ret;
        $json->mensaje = "Exito";

        $path = "../archivos/ufologos.json";
        
        $jsonArray = array();
        if(filesize($path) > 0 ){
            $jsonArray = Ufologo::TraerTodos();
        }
        array_push($jsonArray,json_decode($this->ToJSON()));

        $jsonFinal = "[";

        $file = fopen($path,"w");
        
        if($file !== false) {
            for($i = 0 ; $i < count($jsonArray) ; $i++) {
                $jsonFinal .= ($i == count($jsonArray)-1)? json_encode($jsonArray[$i])."]" : json_encode($jsonArray[$i]).",\r\n";
            }
            fwrite($file,$jsonFinal);
            $ret = fclose($file);
        }
        else {
            $json->mensaje = "Error al abrir el archivo.";
            $json->exito = false;
        }
        return $json;
    }

    public static function TraerTodos() {
        $path = "../archivos/ufologos.json";
        $file = fopen($path,"r");
        $jsonArray = json_decode( fread($file,filesize($path)),false );
        fclose($file);
        return $jsonArray;
    }

    public static function VerificarExistencia($ufologo) {
        $jsonArray = Ufologo::TraerTodos();
        $json = new StdClass();
        $json->existe = false;
        $json->mensaje = "El ufologo no existe.";
        foreach($jsonArray as $item) {
            if($item->clave == $ufologo->_clave && $item->legajo == $ufologo->_legajo ) {
                $json->existe = true;
                $json->mensaje = "El ufologo existe.";
                break;
            }
        }
        return $json;
    }
}
?>