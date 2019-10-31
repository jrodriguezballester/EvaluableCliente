/**
 *Calcula el subtotal de las unidades pedidas (de un solo articulo)
 *Llama a PonerPagoTotal para actualizar el Total (de todo el carrito)
 *
 * @param {*} unidadesPedidas Cantidad de unidades pedidas
 * @param {*} idArticulo Id del articulo
 */
export default function CalcularPrecio(unidadesPedidas, idArticulo) {
    //obtencion del precio desde el articulo      
    precio = document.getElementById("precio" + idArticulo).textContent.split(" ")[1]; //obtencion del precio
    subtotal = parseInt(precio) * unidadesPedidas; //calculo del subtotal del articulo

    //localizar donde lo pongo y escribir el precio
    document.getElementById("totalArtVenta" + "compra" + idArticulo).firstChild.nodeValue = "PrecioTotal: " + subtotal + "€";

    //recalcular Total
    PonerPagoTotal();
}