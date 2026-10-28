import { Link, useLocation } from "react-router";
import styles from "./Header.module.css"

import { Moon, Globe, PersonStanding } from "lucide-react";

import LogoICINFWhite from "../assets/icons/ICINF-White.svg"
import LogoICINFBlack from "../assets/icons/ICINF-Black.svg"

function Header() {
    
    const location = useLocation()
    const setLogo = location.pathname === "/" ? LogoICINFWhite : LogoICINFBlack
    const headerStyle = location.pathname === "/" ? styles.header : styles.headerAlternative
    
    return (
        <header className={headerStyle}>
            <Link to="/">
                <figure className={styles.logoWrapper}>
                    <img src={setLogo} alt="Logo Ingeniería Civil Informatica UA" />
                </figure>
            </Link>
            <nav className={styles.navSection}>
                <Link to={"/"} className={styles.navLink}>Malla Curricular</Link>
                <Link to={"/"}>Cuerpo Docente</Link>
                <Link to={"/"}>Comunidad</Link>
                <Link to={"/noticias"}>Noticias</Link>
                <Link to={"/noticia-en-detalle"}>TEST - Noticia en Detalle</Link>
                <Link to={"/facultad"}>TEST - Docente en Detalle</Link>
                <section className={styles.navButtons}>
                    <button><Moon /></button>
                    <button><PersonStanding /></button>
                    <button><Globe /></button>
                </section>    
            </nav>
        </header>
    )
}

export default Header