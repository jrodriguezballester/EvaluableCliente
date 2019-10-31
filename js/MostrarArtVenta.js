/**
 *Muestra un nuevo articulo en el carro de la compra
 *(crea los nodos y les da valor)
 * Los elementos seran hijos de "carrito" con id de tipo "compra+idArticulo" donde ... es la id del Articulo
 *Inserta los nuevos articulos siempre a la izquierda 
 *
 * @param {*} Articulo utilizado para identificar el articulo (Div articulo)
 */
export default function MostrarArtVenta(Articulo) {

    // nodo principal (div)
    artVenta = document.createElement("div");
    artVenta.id = "compra" + Articulo.id;
    artVenta.className = "compra";

    // nodo imagen (img)
    artVentaImagen = document.createElement("img");
    valorSRC = document.getElementById(Articulo.id).getElementsByTagName("img")[0].getAttribute("src");
    artVentaImagen.setAttribute("src", valorSRC);
    artVentaImagen.setAttribute("height", "150");

    //nodo precio unitario    (p+texto)                            
    textPrecio = Articulo.getElementsByTagName("p")[0].textContent; //obtenemos el texto de la etiqueta p del articulo comprado                
    // textPrecio.id = "precio" + Articulo.id;
    textoPrecio = document.createTextNode(textPrecio); //creamos el nodo que contiene el texto

    precio = document.createElement("p");
    precio.id = "precio" + Articulo.id;
    precio.appendChild(textoPrecio);

    //nodo unidades (p+texto variable)
    unidades = document.createElement("p");
    unidades.id = "unidades" + "compra" + Articulo.id;
    cantidad = 1;
    textounidades = document.createTextNode("Unidades: " + cantidad); //añadir variable cantidad
    unidades.appendChild(textounidades);

    //nodo totalArtVenta (p+texto variable)
    totalArtVenta = document.createElement("p");
    totalArtVenta.id = "totalArtVenta" + "compra" + Articulo.id;
    totalArtVenta.className = "total";
    euros = "";
    euros = textPrecio.split(" ")[1]; //obtencion del precio (solo el numero)
    textoPrecioTotal = document.createTextNode("PrecioTotal: " + cantidad * euros + " €"); //añadir variables  cantidad  

    totalArtVenta.appendChild(textoPrecioTotal);
    // PonerPagoTotal();

    //nodo boton  Quitar uno
    borrarUno = document.createElement("button");
    borrarUno.id = "borrarUno " + Articulo.id;
    borrarUno.className = "boton botonU";
    textoBoton = document.createTextNode("Quitar uno");
    borrarUno.setAttribute('onclick', "DisminuirArtVenta(this)");
    borrarUno.appendChild(textoBoton);


    //nodo boton  Quitar Todos
    borrarTodos = document.createElement("button");
    borrarTodos.id = "borrarUno " + Articulo.id;
    borrarTodos.className = "boton botonT";
    textoBoton = document.createTextNode("Quitar Todos");
    borrarTodos.setAttribute('onclick', "VaciarArticulo(this)");
    borrarTodos.appendChild(textoBoton);

    //insercion de los nodos
    //añadimos todos los elementos del articulo
    artVenta.appendChild(artVentaImagen); //img
    artVenta.appendChild(precio); //p
    artVenta.appendChild(unidades); //p
    artVenta.appendChild(totalArtVenta); //p
    artVenta.appendChild(borrarUno); //button
    artVenta.appendChild(borrarTodos); //button
    //colocamos el articulo

    articulos = document.getElementById('carrito').getElementsByTagName("div");
    if (articulos.length == 0) {
        document.getElementById('carrito').appendChild(artVenta);
    } else {
        document.getElementById('carrito').insertBefore(artVenta, document.getElementById('carrito').getElementsByTagName("div")[0]);
    }

    idPortatil = Articulo.id;
    CalcularPrecio(1, idPortatil);
}