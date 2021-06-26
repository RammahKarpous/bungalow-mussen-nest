import plattegrondFoto from '../assets/images/bungalow-plattegrond.png'

import keuken from '../assets/images/keuken/keuken.jpg'
import combidicht from '../assets/images/keuken/combidicht.jpg'
import combi from '../assets/images/keuken/combi.jpg'
import spoelkast from '../assets/images/keuken/spoelkast.jpg'
import vaatwasser from '../assets/images/keuken/vaatwasser.jpg'
import koelkast from '../assets/images/keuken/koelkast.jpg'
import servies from '../assets/images/keuken/servies.jpg'
import Slideshow from "../components/Slideshow"

import PageTemplate from "../components/templates/PageTemplate"
import SlideshowTemplate from './../components/templates/SlideshowTemplate';
import ContentTemplate from "../components/templates/ContentTemplate"
import Button from '../components/Button'
import MainTemplate from '../components/templates/MainTemplate'

import plattegrondPDF from '../assets/downloads/mussen-nest-plattegrond.pdf'

import { defaultTransition } from '../components/animations/transitions'
import { fade } from './../components/animations/variants';
import { motion } from 'framer-motion';

const OverDeBungalow = () => {

    const images = [
        { path: keuken, name: 'Keuken' },
        { path: combidicht, name: 'Combi dicht' },
        { path: combi, name: 'Combi' },
        { path: spoelkast, name: 'Spoelkast' },
        { path: vaatwasser, name: 'Vaatwasser' },
        { path: koelkast, name: 'Koelkast' },
        { path: servies, name: 'Servies' },
    ]

    return (
        <PageTemplate>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fade}

                transition={defaultTransition}>

                <h1>Over De Bungalow</h1>
                
                <p className="mt-4">In het mooie Natuurpark Hoefbos te Otterlo verhuren wij onze volledig gerenoveerde Bungalow mussen-nest. Zelf huren wij al jaren vakantiehuisjes als we er even tussenuit willen. Wij zijn altijd verbaasd hoeveel tijd het kost om alle informatie te vinden over het huisje.Wij verhuren ons huisje voor minimaal 3 nachten, voor €87,50 per nacht en €47,00 voor eindschoonmaak, handdoeken, bedlinnen, etc, is hier bij in begrepen.</p>
                
                <small>(Toeristen belasting gemeente Ede, €1,15 pppn komt hier nog bij.)</small>

                <p><strong>Voor beschikbaarheid en prijsopgave, stuur ons a.u.b. een e-mail, u krijgt direct antwoord.</strong></p>

                <p>Wij proberen op onze site alles te noemen zoals het is, geen verrassingen.</p>

                <ul className="list-disc ml-9">
                    <li>fijne, compleet gerenoveerde bungalow midden in het bos</li>
                    <li>privé parkeerplaats voor de deur</li>
                    <li>volledig voorzien van vloerverwarming</li>
                    <li>woonkamer met uitzicht op de tuin en het bos</li>
                    <li>zonnige tuin met tafels, stoelen, ligbedden en parasol</li>
                    <li>geschikt voor 2 personen</li>
                    <li>op het park zijn geen faciliteiten, dus, rust</li>
                    <li>onze bungalow ligt in het rustigste deel van het bos</li>
                    <li>slaapkamer met badkamer</li>
                    <li>apart toilet</li>
                    <li>moderne keuken met combi-magnetron en afwasmachine</li>
                    <li>rookvrij en huisdieren zijn niet welkom</li>
                    <li>linnengoed en WIFI zijn uiteraard inbegrepen</li>
                </ul>

                <h3 className="mt-10 mb-4">Plattegrond van de bungalow</h3>

                <img src={plattegrondFoto} alt="Plattegrond van de bungalow" />
                <Button to={plattegrondPDF} download text="Plattegrond met afmetingen" type="primary" />

                <h3 className="mt-10 mb-4">Wat is er in onze bungalow aanwezig?</h3>
                <MainTemplate>
                    <SlideshowTemplate>
                        <Slideshow images={images} />
                    </SlideshowTemplate>

                    <ContentTemplate extraClassNames="xl:mt-28">
                    
                    </ContentTemplate>
                </MainTemplate>
            </motion.div>
        </PageTemplate>
    )
}

export default OverDeBungalow
