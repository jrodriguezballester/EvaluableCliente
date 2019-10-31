/**
 *Aumenta las unidades pedidas del articulo
 *Llama a CalcularPrecio para actualizar subtotal
 *
 * @param {*} articulo 
 * utilizado para identificar el articulo, es el div que contiene al objeto 
 *
 */
export default function AumentarArtVenta(articulo) {

    //añadir cantidad de pedidos
    var UnidadesArticuloCarrito = document.getElementById("unidades" + "compra" + articulo.id); //Seleccionamos el nodo donde estan las unidades pedidas
    var existencias = UnidadesArticuloCarrito.childNodes[0].textContent.split(" ")[1]; //obtencion de la cantidad anterior
    var artPedidos = parseInt(parseInt(existencias) + 1); // sumamos uno al anterior
    UnidadesArticuloCarrito.firstChild.nodeValue = "Unidades: " + artPedidos; //reescribimos las unidades pedidas

    //recalcular subtotal articulo

    CalcularPrecio(artPedidos, articulo.id);
}