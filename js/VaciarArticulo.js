/**
 *Elimina el articulo solicitado
 *
 * @param {*} portatil
 */
export default function VaciarArticulo(portatil) {
    idportatil = portatil.id.split(" ")[1]; //obtencion del portatil.id
    document.getElementById("compra" + idportatil).remove();
    PonerPagoTotal();
}