/**
 *Eliminamos los articulos pedidos
 *Recalcula el total
 */
export default function VaciarCarrito() {
    console.log("entra en vaciar carrito");
    //mientras carrito tenga hijos borra el primer hijo de carrito
    while (document.getElementById("carrito").hasChildNodes()) {
        document.getElementById("carrito").removeChild(document.getElementById("carrito").firstChild);
    }
    PonerPagoTotal();
}