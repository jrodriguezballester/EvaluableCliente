for (var i = 0; i < list.length; i++) {
    CrearArticulo();
}

/**
 *Muestra un nuevo articulo en el catalogo
 *(crea los nodos y les da valor llamando a la lista de Articulos)
 * Los elementos seran hijos de "catalogo" 
 *
 */
export default function CrearArticulo() {
    //  console.log("entra en crear articulo");
    // nodo principal (div)
    art = document.createElement("div");
    art.className = "articulo";
    art.id = list[i].id;


    // nodo imagen (img)
    artImagen = document.createElement("img");
    valorSRC = list[i].imageLink;
    artImagen.setAttribute("src", valorSRC);
    artImagen.setAttribute("height", "150");

    //nodo precio unitario    (p+texto)                            
    textPrecio = "Precio: " + list[i].Precio + "€"; ///////mirar
    textoPrecio = document.createTextNode(textPrecio); //creamos el nodo que contiene el texto

    precio = document.createElement("p");
    //// precio.id = "precio" + lista.id; //////mirar
    precio.appendChild(textoPrecio);

    //nodo descripcion    (p+texto)                            
    text = list[i].Descripcion; ///////mirar
    texto = document.createTextNode(text); //creamos el nodo que contiene el texto

    descripcion = document.createElement("p");
    //// precio.id = "precio" + lista.id; //////mirar
    descripcion.appendChild(texto);


    //insercion de los nodos
    //añadimos todos los elementos del articulo
    art.appendChild(artImagen); //img
    art.appendChild(precio); //p
    art.appendChild(descripcion);

    //colocamos el articulo
    if (art != null) {
        document.getElementById("catalogo").appendChild(art);
    }
}