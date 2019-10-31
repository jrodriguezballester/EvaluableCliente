/**
 *Calcula el precio total del carrito  y lo muestra
 *a partir de la suma de los totales de los articulos pedidos
 *
 *De cada articulo <div> el tercer <p>,su hijo(texto),es el subtotal
 */
export default function PonerPagoTotal() {
    //recorrer todos los totales, sumarlos y ponerlos
    subtotal = 0;
    //obtener los hijos de carrito (articulos)
    articulos = document.getElementById('carrito').getElementsByTagName("div");
    //De cada articulo (div) obtengo el total
    for (i = 0; i < articulos.length; i++) {
        subtotal += parseInt(articulos[i].getElementsByTagName("p")[2].firstChild.nodeValue.split(" ")[1]);
        //el tercer <p>,su hijo(texto),cortandolo nos da el total
        //    console.log("subtotal ", subtotal);
    }
    //poner el total
    document.getElementById('total').getElementsByTagName("div")[0].firstChild.nodeValue = "Total a pagar: " + subtotal + " €";
}