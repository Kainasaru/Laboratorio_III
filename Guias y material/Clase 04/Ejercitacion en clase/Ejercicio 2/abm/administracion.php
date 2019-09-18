<?php
//include_once ("./verificacion.php");
require_once("clases/producto.php");
require_once("clases/archivo.php");

$queHago = isset($_POST['queHago']) ? $_POST['queHago'] : NULL;

switch ($queHago) {

	case "mostrarGrilla":

		$ArrayDeProductos = Producto::TraerTodosLosProductos();

		$grilla = '<table class="table">
					<thead style="background:rgb(14, 26, 112);color:#fff;">
						<tr>
							<th>  COD. BARRA </th>
							<th>  NOMBRE     </th>
							<th>  FOTO       </th>
						</tr>  
					</thead><tbody>';
		//AGREGAR COLUMNA 'ACCION'
		foreach ($ArrayDeProductos as $prod) {
			$grilla .= '<tr><td>' . $prod->GetCodBarra() . '</td><td>' . $prod->GetNombre() . '<br/>'
				. '<input type="button" class="MiBotonUTN" onclick="Main.ModificarProducto(\'' . $prod->GetCodBarra() . '\',\''
				. $prod->GetNombre() . '\')" value="Modificar" style="width:7em;" />'
				. '<input type="button" class="MiBotonUTN" onclick="Main.BorrarProducto(\'' . $prod->GetCodBarra()
				. '\')" value="Eliminar" style="width:7em;" /></td>'
				. '<td><img src="./archivos/' . $prod->GetPathFoto() . '" width="100px" height="100px" /></td></tr>';
			//AGREGAR UNA COLUMNA CON DOS 'BUTTONS' (ELIMINAR Y MODIFICAR)						
		}

		$grilla .= '</tbody></table>';

		echo $grilla;

		break;

	case "agregar":
	case "modificar":
		$res = Archivo::Subir();
		$codBarra = isset($_POST['codBarra']) ? $_POST['codBarra'] : NULL;
		$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : NULL;
		$archivo = $res["PathTemporal"];

		$p = new Producto($codBarra, $nombre, $archivo);

		if ($queHago === "agregar") {

			if (!$res["Exito"]) {
				echo $res["Mensaje"];
				break;
			}
			if (!Producto::Guardar($p)) {
				echo "Error al generar archivo";
				break;
			}
		}

		if ($queHago === "modificar") {
			if (!Producto::Modificar($p)) {
				echo "Lamentablemente ocurrio un error y no se pudo escribir en el archivo.";
				break;
			}
		}

		header("Location:./index.php");

		break;

	case "eliminar":
		$codBarra = isset($_POST['codBarra']) ? $_POST['codBarra'] : NULL;

		if (!Producto::Eliminar($codBarra)) {
			$mensaje = "Lamentablemente ocurrio un error y no se pudo escribir en el archivo.";
		} else {
			$mensaje = "El archivo fue escrito correctamente. PRODUCTO eliminado CORRECTAMENTE!!!";
		}

		echo $mensaje;
		break;

	default:
		echo ":(";
}
