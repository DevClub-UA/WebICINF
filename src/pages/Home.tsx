import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { MainCard, SecondaryCard } from "../components/NewsCard.tsx"
import { ActivityCard, ActivityCardV2 } from "../components/ActivityCard.tsx"
import InterestGroups from "../components/InterestGroups.tsx"


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
                    <header className="contentHeader">
                        <h2>Noticias y Actividades Recientes</h2>
                        <Link to="#" className="secondaryLink">Todas las Noticias <ArrowRight /></Link>
                    </header>
                    <section className="newsSectionContent">
                        <MainCard />
                        <SecondaryCard />
                    </section>
                    <section className="activitySectionContent">
                        <ActivityCard />
                        <ActivityCard />
                        <ActivityCard />
                    </section>
                    <section className="activitySectionContent">
                        <ActivityCardV2 />
                        <ActivityCardV2 />
                        <ActivityCardV2 />
                    </section>
                </section>
                <section>
                    <h2>Cuerpo Docente y Directiva</h2>
                </section>
                <InterestGroups />
            </div>
        </main>
    )
}

export default Home