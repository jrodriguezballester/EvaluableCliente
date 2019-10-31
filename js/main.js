import CrearArticulo from "./CrearArticulosSlide.js";
import plusSlides from './slider.js';
import AumentarArtVenta from "./AumentarArtVenta.js";
import CalcularPrecio from "./CalcularPrecio.js";
import comprar from "./comprar.js";
import DisminuirArtVenta from "./DisminuirArtVenta.js";
import MostrarArtVenta from "./MostrarArtVenta.js";
import PonerPagoTotal from "./PonerPagoTotal.js";
import VaciarArticulo from "./VaciarArticulo.js";
import VaciarCarrito from "./Vaciar.js";


var indice;
for (indice = 0; indice < list.length; indice++) {
    CrearArticulo(indice);
}


var contador = 0;
var slideIndex = 0;
plusSlides(contador);
//poner listener
let Articulos = document.getElementsByClassName("articulo");
console.log(Articulos);
for (var index = 0; index < Articulos.length; index++) {
    Articulos[index].addEventListener("click", comprar, true);
    console.log(Articulos[index]);
}
document.getElementById("vaciar").addEventListener("click", VaciarCarrito, true);