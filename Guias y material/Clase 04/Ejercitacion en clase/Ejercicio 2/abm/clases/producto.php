<?php
class Producto
{
	//--------------------------------------------------------------------------------//
	//--ATRIBUTOS
	private $codBarra;
	private $nombre;
	private $pathFoto;
	//--------------------------------------------------------------------------------//

	//--------------------------------------------------------------------------------//
	//--GETTERS Y SETTERS
	public function GetCodBarra()
	{
		return $this->codBarra;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetPathFoto()
	{
		return $this->pathFoto;
	}

	public function SetCodBarra($valor)
	{
		$this->codBarra = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetPathFoto($valor)
	{
		$this->pathFoto = $valor;
	}

	//--------------------------------------------------------------------------------//
	//--CONSTRUCTOR
	public function __construct($codBarra = NULL, $nombre = NULL, $pathFoto = NULL)
	{
		if ($codBarra !== NULL && $nombre !== NULL) {
			$this->codBarra = $codBarra;
			$this->nombre = $nombre;
			$this->pathFoto = $pathFoto;
		}
	}

	//--------------------------------------------------------------------------------//
	//--TOSTRING	
	public function ToString()
	{
		return $this->codBarra . " - " . $this->nombre . " - " . $this->pathFoto . "\r\n";
	}
	//--------------------------------------------------------------------------------//

	//--------------------------------------------------------------------------------//
	//--METODOS DE CLASE
	public static function Guardar($obj)
	{
		$resultado = FALSE;

		//ABRO EL ARCHIVO
		$ar = fopen("archivos/productos.txt", "a");

		//ESCRIBO EN EL ARCHIVO
		$cant = fwrite($ar, $obj->ToString());

		if ($cant > 0) {
			$resultado = TRUE;
		}
		//CIERRO EL ARCHIVO
		fclose($ar);

		return $resultado;
	}
	public static function TraerTodosLosProductos()
	{

		$ListaDeProductosLeidos = array();

		//leo todos los productos del archivo
		$archivo = fopen("archivos/productos.txt", "r");

		while (!feof($archivo)) {
			$archAux = fgets($archivo);
			$productos = explode(" - ", $archAux);
			//http://www.w3schools.com/php/func_string_explode.asp
			$productos[0] = trim($productos[0]);
			if ($productos[0] != "") {
				$productos[2] = preg_replace('/[\x00-\x1F\x80-\xFF]/', '',$productos[2]);
				$ListaDeProductosLeidos[] = new Producto($productos[0], $productos[1], $productos[2]);
			}

		}
		fclose($archivo);

		return $ListaDeProductosLeidos;
	}
	public static function Modificar($obj)
	{
		$resultado = false;
		$productos = Producto::TraerTodosLosProductos();
		for ($i = 0; $i <  count($productos); $i++) {
			if ($productos[$i]->GetCodBarra() == $obj->GetCodBarra()) {
				if( $obj->GetPathFoto() !== null ) {
					unlink("./archivos/" . $productos[$i]->GetPathFoto());
				}
				else {
					$obj->SetPathFoto($productos[$i]->GetPathFoto()) ;
				}
				$productos[$i] = $obj;
				$resultado = true;
				break;
			}
		}
		if ($resultado) {
			$file = fopen("./archivos/productos.txt", "w");
			$text = "";
			foreach ($productos as $prod) {
				$text .= $prod->ToString();
			}
			fwrite($file, $text);
			fclose($file);
		}
		return $resultado;
	}
	public static function Eliminar($codBarra)
	{
		$resultado = false;
		$productos = Producto::TraerTodosLosProductos();
		for ($i = 0; $i <  count($productos); $i++) {
			if ($productos[$i]->GetCodBarra() == $codBarra) {
				unlink("./archivos/" . $productos[$i]->GetPathFoto());
				unset($productos[$i]);
				$productos = array_values($productos);
				$resultado = true;
				break;
			}
		}
		if( $resultado ) {
			$file = fopen("./archivos/productos.txt", "w");
			$text = "";
			foreach ($productos as $prod) {
				$text .= $prod->ToString();
			}
			fwrite($file, $text);
			fclose($file);
		}
		return $resultado;
	}
	//--------------------------------------------------------------------------------//
}
