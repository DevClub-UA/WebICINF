import { useState } from "react"
import { DevClub, PyScience, CyberSecurity, IndustrialGroups } from "../components/GroupCard.tsx"
import styles from "./InterestGroups.module.css"

function InterestGroups() {
    
    const [devclubIsActive, setDevclubIsActive] = useState(true) 
    const [pyscienceIsActive, setPyscienceIsActive] = useState(false)
    const [cyberSecIsActive, setCyberSecIsActive] = useState(false)
    const [industrialIsActive, setIndustrialIsActive] = useState(false)

    function handleClickDevclub() {
        setDevclubIsActive(true)
        setPyscienceIsActive(false)
        setCyberSecIsActive(false)
        setIndustrialIsActive(false)
    }

    function handleClickPyscience() {
        setDevclubIsActive(false)
        setPyscienceIsActive(true)
        setCyberSecIsActive(false)
        setIndustrialIsActive(false)
    }

    function handleClickCybersec() {
        setDevclubIsActive(false)
        setPyscienceIsActive(false)
        setCyberSecIsActive(true)
        setIndustrialIsActive(false)
    }

    function handleClickIndustrial() {
        setDevclubIsActive(false)
        setPyscienceIsActive(false)
        setCyberSecIsActive(false)
        setIndustrialIsActive(true)
    }

    return (
        <section className={styles.interestGroups}>
            <header className="contentHeader">
                <h2>Grupos de Interés</h2>
                <section className="groupSectionNav">
                    <button className={styles.groupSectionLink} onClick={handleClickDevclub}>DevClub</button>
                    <button className={styles.groupSectionLink} onClick={handleClickPyscience}>PyScience</button>
                    <button className={styles.groupSectionLink} onClick={handleClickCybersec}>Ciberseguridad</button>
                    <button className={styles.groupSectionLink} onClick={handleClickIndustrial}>Industrial</button>
                </section>
            </header>
            <section>
                <p>Comunidades estudiantiles que fomentan el desarrollo de habilidades.</p>
                {devclubIsActive && <DevClub />}
                {pyscienceIsActive && <PyScience />}
                {cyberSecIsActive && <CyberSecurity />} 
                {industrialIsActive && <IndustrialGroups />} 
            </section>
        </section>
    )
}

export default InterestGroups