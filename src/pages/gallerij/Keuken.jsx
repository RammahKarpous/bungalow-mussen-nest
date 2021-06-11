import Slideshow from "../../components/Slideshow"

import keuken from '../../assets/images/keuken/keuken.jpg'
import keukenblok from '../../assets/images/keuken/keukenblok.jpg'
import keukenhal from '../../assets/images/keuken/keukenhal.jpg'
import keukeneethoek from '../../assets/images/keuken/keukeneethoek.jpg'

import MainTemplate from './../../components/templates/Galerij/MainTemplate';
import SlideshowTemplate from "../../components/templates/Galerij/SlideshowTemplate"
import ContentTemplate from './../../components/templates/Galerij/ContentTemplate';

const Keuken = () => {

    const images = [
        { path: keuken, name: 'Keuken' },
        { path: keukenblok, name: 'Keuken blok' },
        { path: keukenhal, name: 'Keuken hal' }, 
        { path: keukeneethoek, name: 'Keuken eethoek' },
    ]

    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>
            <ContentTemplate quaterWidth>
            <img src={images[0].path} alt={images[0].name} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>De zonnige tuin op het zuiden geeft u alle privacy. Er staat een eettafel met 2 stoelen.
                Tevens 2 heerlijke ligbedden met een tafeltje en uiteraard ontbreekt de parasol niet. Dit alles is voorzien van kussens voor een comfortabele zit of lig. Badlakens voor de ligbedden zijn ook aanwezig. Geniet van de rust en fluitende vogels op uw eigen terras. En misschien brengt de eekhoorn u wel een bezoekje!</p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Keuken
