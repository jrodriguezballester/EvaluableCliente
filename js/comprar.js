import AumentarArtVenta from "./AumentarArtVenta";
import MostrarArtVenta from "./MostrarArtVenta";

/**
 * Comprueba si el articulo ya existe en el carrito 
 *          Crea el Articulo dentro del Carrito
 *           o 
 *          Aumenta la cantidad de unidades Pedidas
 * 
 * @param {*} this  Articulo seleccionado coge todo el div
 * 
 */
export default function comprar() {
    //si existe aumenta las unidades pedidas   // si no existe lo crea.

    // (document.getElementById("compra" + this.id)) ? AumentarArtVenta(this): MostrarArtVenta(this);
    if (document.getElementById("compra" + this.id)) {
        AumentarArtVenta(this)
    } else {
        MostrarArtVenta(this)
    }

}