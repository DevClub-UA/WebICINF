// PAGINA - NOTICIA EN DETALLE
// Por el momento al no tener un backend, solamente se modelara la estructura y el diseño
// en base al prototipo en Figma, aun asi se necesita que esta pagina simule una noticia real
// incorporando: 
// 1. Fondo que ocupe el 100% de la pantalla.
// 2. Generar Titulo, Categoria, Fecha, Autor, Descripcion, Cuerpo de la noticia, imagenes y 
//    tarjetas de noticias recientes con su respectivo titulo, categoria y fecha. Todos estos
//    inventados para simular el como se veria una noticia ya implementada.

import styles from "./NewsDetail.module.css"

function NewsDetail() {
    return (
        <main className={styles.newsDetail}>
            <h1>Noticia en Detalle</h1> 
        </main>
    )
}

export default NewsDetail
