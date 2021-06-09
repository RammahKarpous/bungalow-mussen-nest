import PageTemplate from "../components/templates/PageTemplate"
import plattegrond from '../assets/images/bungalow-plattegrond.png'

import keuken from '../assets/images/Keuken/keuken.jpg'
import combidicht from '../assets/images/Keuken/combidicht.jpg'
import combi from '../assets/images/Keuken/combi.jpg'
import spoelkast from '../assets/images/Keuken/spoelkast.jpg'
import vaatwasser from '../assets/images/Keuken/vaatwasser.jpg'
import koelkast from '../assets/images/Keuken/koelkast.jpg'
import servies from '../assets/images/Keuken/servies.jpg'
import Slideshow from "../components/Slideshow"
import SlideshowTemplate from './../components/templates/Galerij/SlideshowTemplate';
import ContentTemplate from "../components/templates/Galerij/ContentTemplate"


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

            <h2 className="mt-10 mb-4">Plattegrond van de bungalow</h2>
            <img src={plattegrond} alt="Plattegrond van de bungalow" />

<div>
            <SlideshowTemplate>
                <h2 className="mt-10 mb-4">Wat is er in onze bungalow aanwezig?</h2>
                <Slideshow images={images} />
            </SlideshowTemplate>
            <ContentTemplate>

            </ContentTemplate>
            </div>
        </PageTemplate>
    )
}

export default OverDeBungalow
