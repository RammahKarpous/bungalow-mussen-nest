import Slideshow from "../../components/Slideshow"

import terras from '../../assets/images/tuin/terras.jpg'
import tuin from '../../assets/images/tuin/tuin.jpg'
import ligbed from '../../assets/images/tuin/ligbed.jpg'
import terrasEethoek from '../../assets/images/tuin/terras-eethoek.jpg'

const Woonkamer = () => {

    const images = [
        { path: terras, name: 'Terras' },
        { path: tuin, name: 'Tuin' },
        { path: ligbed, name: 'Ligbed' },
        { path: terrasEethoek, name: 'Terras eethoek' },
    ]
    
    return (
        <div className="mt-10 flex flex-col xl:flex-row gap-10">
            <div className="xl:w-7/12">
                <Slideshow images={images} />
            </div>
            <div className="xl:w-3/12">
                <img src={terras} alt={`Terras`} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>De woonkamer heeft heerlijk uitzicht op de tuin en geeft u volledig privacy. Het interieur is met een warme houten pvc vloer, witte muren en natuurlook gordijnen een oase van rust. Een 2-persoonsbank, hokkers-salontafel, vitrinekast, TV, Blu-Ray speler, ronde eettafel, twee eetstoelen en sfeervolle verlichting maken onze bungalow uw thuis.
                </p>

                <p>Wanneer u in huis wilt ontspannen is er een kleine collectie films.De TV (alle nederlandse en enkel duitse zenders) geeft ook toegang tot het gratis gebruik van Internet. Uiteraard hebben wij de nodige informatie over de omgeving voor u al verzameld. Toeristische uitstapjes, boodschappen, uit eten, fietsverhuur etc..
                Daarnaast hebben wij van alle apparatuur een korte gebruiksaanwijzing gemaakt.</p>
            </div>
        </div>
    )
}

export default Woonkamer