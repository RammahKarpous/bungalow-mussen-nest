import Slideshow from "../../components/Slideshow"

import terras from '../../assets/images/tuin/terras.jpg'
import tuin from '../../assets/images/tuin/tuin.jpg'
import ligbed from '../../assets/images/tuin/ligbed.jpg'
import terrasEethoek from '../../assets/images/tuin/terras-eethoek.jpg'

// Templates
import MainTemplate from './../../components/templates/Galerij/MainTemplate';
import ContentTemplate from './../../components/templates/Galerij/ContentTemplate';
import SlideshowTemplate from "../../components/templates/Galerij/SlideshowTemplate"

const Woonkamer = () => {

    const images = [
        { path: terras, name: 'Terras' },
        { path: tuin, name: 'Tuin' },
        { path: ligbed, name: 'Ligbed' },
        { path: terrasEethoek, name: 'Terras eethoek' },
    ]
    
    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>

            <ContentTemplate>
                <img src={images[0].path} alt={images[0].name} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>De woonkamer heeft heerlijk uitzicht op de tuin en geeft u volledig privacy. Het interieur is met een warme houten pvc vloer, witte muren en natuurlook gordijnen een oase van rust. Een 2-persoonsbank, hokkers-salontafel, vitrinekast, TV, Blu-Ray speler, ronde eettafel, twee eetstoelen en sfeervolle verlichting maken onze bungalow uw thuis.
                </p>

                <p>Wanneer u in huis wilt ontspannen is er een kleine collectie films.De TV (alle nederlandse en enkel duitse zenders) geeft ook toegang tot het gratis gebruik van Internet. Uiteraard hebben wij de nodige informatie over de omgeving voor u al verzameld. Toeristische uitstapjes, boodschappen, uit eten, fietsverhuur etc..
                Daarnaast hebben wij van alle apparatuur een korte gebruiksaanwijzing gemaakt.</p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Woonkamer