import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import HeroWallpaper from "../assets/images/wallpaper1.jpg"

function Home() {
    return (
        <main className="home">
            <header className="hero">    
                <hgroup>
                    <h1>Innovación, Software y Liderazgo Tecnológico</h1>
                    <p>Subtitulo</p>
                </hgroup>
            </header>
            <div className="homeContent">
                <section>
                    <h2>Malla Curricular</h2>
                </section>
                <section>
                    <header>
                        <h2>Noticias y Actividades Recientes</h2>
                        <Link to="#" className="secondaryLink">Todas las Noticias <ArrowRight /></Link>
                    </header>
                </section>
                <section>
                    <h2>Cuerpo Docente y Directiva</h2>
                </section>
                <section>
                    <header>
                        <h2>Grupos de Interés</h2>
                        <section>
                            <button className="groupSectionLink">DevClub</button>
                            <button className="groupSectionLink">PyScience</button>
                            <button className="groupSectionLink">Ciberseguridad</button>
                            <button className="groupSectionLink">Industrial</button>
                        </section>
                    </header>
                </section>
            </div>
        </main>
    )
}

export default Home