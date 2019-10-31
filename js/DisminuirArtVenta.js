/**
 * Disminuye en una unidad el articulo seleccionado
 * cuando no tiene mas unidades elimina el articulo
 * 
 * recalculamos unidades pedidas, subtotales y Total
 * 
 * @param {} botonBorrarUno.- identificamos el boton para conocer de que articulo se trata 
 * 
 */
export default function DisminuirArtVenta(botonBorrarUno) {
    //obtencion del portatil.id
    idArticulo = botonBorrarUno.id.split(" ")[1];
    //obtencion de las unidades pedidas
    existencias = document.getElementById("unidades" + "compra" + idArticulo).firstChild.nodeValue.split(" ")[1];
    //resta una unidad a las pedidas
    cantidadArticulosPedidos = parseInt(parseInt(existencias) - 1);
    //recalculamos unidades pedidas, subtotales y Total
    if (cantidadArticulosPedidos > 0) { //vamos reduciendo cantidadArticulosPedidos hasta 1
        misUnidadesArtVenta = document.getElementById("unidades" + "compra" + idArticulo).firstChild.nodeValue = "Unidades: " + cantidadArticulosPedidos;
        CalcularPrecio(cantidadArticulosPedidos, idArticulo);
    } else { //Al ser el ultimo articulo lo eliminamos de la cesta
        document.getElementById("compra" + idArticulo).remove();
        PonerPagoTotal();
    }
}