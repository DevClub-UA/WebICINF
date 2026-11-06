import styles from "./ActivityCard.module.css"

export function ActivityCard() {
    return (
        <article className={styles.activityCard}>
            <section className={styles.activityCardContent}>
                <p>Evento</p>
                <h3>20 de Noviembre</h3>
                <h4>Congreso</h4>
            </section>
        </article>
    )
}

export function ActivityCardV2() {
    return (
        <article className={styles.activityCardV2}>
            <section className={styles.activityCardContentV2}>
                <p>Evento</p>
                <h3>20 de Noviembre</h3>
                <h4>Congreso</h4>
            </section>
        </article>
    )
}


export default ActivityCard