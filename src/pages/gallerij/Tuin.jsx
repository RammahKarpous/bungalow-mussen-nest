import Slideshow from "../../components/Slideshow"

import terras from '../../assets/images/tuin/terras.jpg'
import tuin from '../../assets/images/tuin/tuin.jpg'
import ligbed from '../../assets/images/tuin/ligbed.jpg'
import terrasEethoek from '../../assets/images/tuin/terras-eethoek.jpg'

import MainTemplate from './../../components/templates/MainTemplate';
import SlideshowTemplate from "../../components/templates/SlideshowTemplate"
import ContentTemplate from './../../components/templates/ContentTemplate';

const Tuin = () => {

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
                <h3>Tuin</h3>

                <p>De zonnige tuin op het zuiden geeft u alle privacy. Er staat een eettafel met 2 stoelen.
                Tevens 2 heerlijke ligbedden met een tafeltje en uiteraard ontbreekt de parasol niet. Dit alles is voorzien van kussens voor een comfortabele zit of lig. Badlakens voor de ligbedden zijn ook aanwezig. Geniet van de rust en fluitende vogels op uw eigen terras. En misschien brengt de eekhoorn u wel een bezoekje!</p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Tuin
