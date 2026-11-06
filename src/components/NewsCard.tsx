import styles from "./NewsCard.module.css"

export function MainCard() {
    return (
        <article className={styles.mainCard}>
            <section>
                <p>Noticias</p>
                <h3>Exitoso IV Congreso Ingenieria Aplicada</h3>
                <p>Universidad Autónoma de Chile reúne con éxito a la academia y la industria en el IV Congreso de Ingeniería Aplicada</p>
            </section>
        </article>
    )
}

export function SecondaryCard() {
    return (
        <article className={styles.secondaryCard}>
            <section>
                <p>Universidad</p>
                <h3>Universidad Autónoma de Chile se posiciona entre las cinco mejores del país en ranking internacional de sostenibilidad</h3>
                <p>La Universidad Autónoma de Chile obtuvo el quinto lugar a nivel nacional en el UI GreenMetric Sustainable University Rankings 2026...</p>
            </section>
        </article>
    )
}

export default MainCard