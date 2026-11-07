import styles from "./GroupCard.module.css"
import GitLogo from "../assets/icons/GitHub_Invertocat_Black_Clearspace.svg"
/* 
interface GroupCardProps {
    title: string;
    description: string;
}
 */
export function DevClub() {
    return (
        <article className={styles.groupCard}>
            <section className={styles.groupCardInfo}>
                <h3>{"<DevClub />"}</h3>
                <a href="https://github.com/DevClub-UA">
                    <figure className={styles.groupCardSocials}>
                        <img src={GitLogo} alt="" />
                    </figure>
                </a>
                <p className={styles.groupCardDescription}>Grupo de Interes de Ingenieria Civil Informatica, orientado al desarrollo de Software y Robotica.</p>
            </section>
            <figure className={styles.groupCardImages}>
                <div></div>
                <div></div>
            </figure>
        </article>
    )
}

export function PyScience() {
    return (
        <article className={styles.groupCard}>
            <section className={styles.groupCardInfo}>
                <h3>PyScience</h3>
                {/* <a href="https://github.com/DevClub-UA">
                    <figure className={styles.groupCardSocials}>
                        <img src={GitLogo} alt="" />
                    </figure>
                </a> */}
                <p>Grupo de Interes de Ingenieria Civil Informatica, orientado a la ciencia de datos.</p>
            </section>
            <figure className={styles.groupCardImages}>
                <div></div>
                <div></div>
            </figure>
        </article>
    )
}

export function CyberSecurity() {
    return (
        <article className={styles.groupCard}>
            <section className={styles.groupCardInfo}>
                <h3>CiberSeguridad</h3>
                {/* <a href="https://github.com/DevClub-UA">
                    <figure className={styles.groupCardSocials}>
                        <img src={GitLogo} alt="" />
                    </figure>
                </a> */}
                <p>Grupo de Interes de Ingenieria Civil Informatica, orientado a la Ciberseguridad.</p>
            </section>
            <figure className={styles.groupCardImages}>
                <div></div>
                <div></div>
            </figure>
        </article>
    )
}

export function IndustrialGroups() {
    return (
        <article className={styles.groupCard}>
            <section className={styles.groupCardInfo}>
                <h3>Grupos de Interes Ingenieria Civil Industrial</h3>
                {/* <a href="https://github.com/DevClub-UA">
                    <figure className={styles.groupCardSocials}>
                        <img src={GitLogo} alt="" />
                    </figure>
                </a> */}
                <p>Grupos de Interes de Ingenieria Civil Industrial.</p>
            </section>
            <figure className={styles.groupCardImages}>
                <div></div>
                <div></div>
            </figure>
        </article>
    )
}



