Articulos = document.getElementsByClassName("articulo");
for (index = 0; index < Articulos.length; index++) {
    Articulos[index].addEventListener("click", comprar, true);
}
document.getElementById("vaciar").addEventListener("click", VaciarCarrito, true);