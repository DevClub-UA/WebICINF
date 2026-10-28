import { Link } from "react-router"

import styles from "./Footer.module.css"

import UAIcon from "../assets/icons/logo-ua-heraldica-03.png"
import InstagramLogo from "../assets/icons/Instagram_Glyph_White.svg"

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.mainContent}>
                <div className={styles.brandColumn}>
                    <div className={styles.brandContent}>
                        <figure className={styles.logoWrapper}>
                            <img src={UAIcon} alt="Logo Universidad Autónoma de Chile" />
                        </figure>
                        <article className={styles.institutionInfo}>
                            <p>Ingeniería Civil Informatica</p>
                            <p className={styles.universityName}>Universidad Autónoma de Chile</p>
                            <p>Temuco - Talca - Santiago</p>
                        </article>
                    </div>
                    <article className={styles.careerDescription}>
                        <p>Facultad de Ingeniería, Universidad Autónoma de Chile.<br /> Formación universitaria orientada a la Ingeniería de Software y Hardware moderna, Inteligencia Artificial, Ciencias de Datos e IoT.</p>
                    </article>
                    <figure className={styles.socials}>
                        <img src={InstagramLogo} alt="Icono Instagram" />
                    </figure>
                </div>
                <section className={styles.navSection}>
                    <div className={styles.navGroup}>
                        <p className={styles.navTitle}>Enlaces Académicos</p>
                        <nav className={styles.navList}>
                            <Link to="#">Banner UA</Link>
                            <Link to="#">Cuerpo Académico</Link>                    
                            <Link to="#">Noticias</Link>
                            <Link to="#">Publicaciones</Link>
                        </nav>
                    </div>
                    <div className={styles.navGroup}>
                        <p className={styles.navTitle}>Contacto</p>
                        <nav className={styles.navList}>
                            <Link to="#">Banner UA</Link>
                            <Link to="#">Cuerpo Académico</Link>                    
                            <Link to="#">Noticias</Link>
                            <Link to="#">Publicaciones</Link>
                        </nav>
                    </div>
                </section>
            </section>
            <section className={styles.bottomSection}>
                <div>
                    <p>&copy; 2026 Universidad Autónoma de Chile - Ingeniería Civil Informatica</p>
                    <p>Diseño por DevClub <span className={styles.devclubBrand}>UA</span></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer