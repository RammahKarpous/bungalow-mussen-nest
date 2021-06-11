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
import SlideshowTemplate from './../components/templates/Galerij/SlideshowTemplate';
import ContentTemplate from "../components/templates/Galerij/ContentTemplate"
import Button from '../components/Button'
import MainTemplate from '../components/templates/Galerij/MainTemplate'

import plattegrondPDF from '../assets/downloads/mussen-nest-plattegrond.pdf'
import liebherrPDF from '../assets/downloads/liebherr-ik1624-21.pdf'
import vaatwasserPDF from '../assets/downloads/vaatwasser.pdf'
import combiPDF from '../assets/downloads/combi.pdf'

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
            <h1>Over De Bungalow</h1>

            <h3 className="mt-10 mb-4">Plattegrond van de bungalow</h3>
            <img src={plattegrondFoto} alt="Plattegrond van de bungalow" />
            <Button to={plattegrondPDF} download text="Plattegrond met afmetingen" type="primary" />

            <h3 className="mt-10 mb-4">Wat is er in onze bungalow aanwezig?</h3>
            <MainTemplate>
                <SlideshowTemplate>
                    <Slideshow images={images} />
                </SlideshowTemplate>

                <ContentTemplate extraClassNames="xl:mt-28">
                    <h4 className="mt-10 mb-4">Gebruiksaanwijzingen</h4>

                    <div className="flex gap-3 flex-col items-start">
                        <Button to={vaatwasserPDF} download text="Inventum Vaatwasser" type="primary" />
                        <Button to={combiPDF} download text="Inventum Combi magnetron" type="primary" />
                        <Button to={liebherrPDF} download text="Liebherr ik1624-21 koelkast" type="primary" />
                    </div>
                </ContentTemplate>
            </MainTemplate>
        </PageTemplate>
    )
}

export default OverDeBungalow
