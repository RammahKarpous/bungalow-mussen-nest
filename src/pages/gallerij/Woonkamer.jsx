import Slideshow from "../../components/Slideshow"

import woonkamer from '../../assets/images/woonkamer/woonkamer.jpg'
import tv from '../../assets/images/woonkamer/tv-woonkamer.jpg'
import bank from '../../assets/images/woonkamer/bank-woonkamer.jpg'
import eethoek from '../../assets/images/woonkamer/eethoek.jpg'
import eettafel from '../../assets/images/woonkamer/eettafel.jpg'
import uitzicht1 from '../../assets/images/woonkamer/uitzicht1.jpg'
import uitzicht2 from '../../assets/images/woonkamer/uitzicht2.jpg'
import gordijnen from '../../assets/images/woonkamer/gordijnen.jpg'
import gordijnen2 from '../../assets/images/woonkamer/gordijnen2.jpg'

// Templates
import MainTemplate from './../../components/templates/MainTemplate';
import ContentTemplate from './../../components/templates/ContentTemplate';
import SlideshowTemplate from "../../components/templates/SlideshowTemplate"

const Woonkamer = () => {

    const images = [
        { path: woonkamer, name: 'Woonkamer' },
        { path: tv, name: 'Tuin' },
        { path: bank, name: 'Ligbed' },
        { path: eethoek, name: 'eettafel' },
        { path: eettafel, name: 'eettafel' },
        { path: uitzicht1, name: 'Eerste uitzicht' },
        { path: uitzicht2, name: 'Tweede uitzicht' },
        { path: gordijnen, name: 'Gordijnen' },
        { path: gordijnen2, name: 'Gordijnen 2' },
    ]
    
    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>

            <ContentTemplate quaterWidth>
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