// for (var i = 0; i < list.length; i++) {
//     CrearArticulo();
// }

/**
 *Muestra un nuevo articulo en el catalogo
 *(crea los nodos y les da valor llamando a la lista de Articulos)
 * Los elementos seran hijos de "catalogo" 
 * Varia de CrearArticulo sin Slide en la clase mySlides (para css)
 */
export default function CrearArticulo(indice) {

    // nodo principal (div)
    var art = document.createElement("div");
    art.className = "articulo mySlides fade";
    art.id = list[indice].id;


    // nodo imagen (img)
    var artImagen = document.createElement("img");
    var valorSRC = list[indice].imageLink;
    artImagen.setAttribute("src", valorSRC);
    artImagen.setAttribute("height", "150");

    //nodo precio unitario    (p+texto)                            
    var textPrecio = "Precio: " + list[indice].Precio + "€"; ///////mirar
    var textoPrecio = document.createTextNode(textPrecio); //creamos el nodo que contiene el texto

    var precio = document.createElement("p");
    //// precio.id = "precio" + lista.id; //////mirar
    precio.appendChild(textoPrecio);
    //nodo descripcion    (p+texto)                            
    var text = list[indice].Descripcion; ///////mirar
    var texto = document.createTextNode(text); //creamos el nodo que contiene el texto

    var descripcion = document.createElement("p");
    //// precio.id = "precio" + lista.id; //////mirar
    descripcion.appendChild(texto);

    //insercion de los nodos
    //añadimos todos los elementos del articulo
    art.appendChild(artImagen); //img
    art.appendChild(precio); //p
    art.appendChild(descripcion);

    //colocamos el articulo 
    document.getElementById("catalogo").appendChild(art);

}