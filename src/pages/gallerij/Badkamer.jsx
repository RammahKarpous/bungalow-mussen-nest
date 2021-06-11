import Slideshow from "../../components/Slideshow"

import badkamer1 from '../../assets/images/badkamer/badkamer1.jpg'
import badkamer2 from '../../assets/images/badkamer/badkamer2.jpg'
import badkamer3 from '../../assets/images/badkamer/badkamer3.jpg'
import radiator from '../../assets/images/badkamer/radiator.jpg'
import douchkraan from '../../assets/images/badkamer/douchkraan.jpg'
import wasbak from '../../assets/images/badkamer/wasbak.jpg'
import regendouch from '../../assets/images/badkamer/regendouch.jpg'

import MainTemplate from './../../components/templates/Galerij/MainTemplate';
import SlideshowTemplate from "../../components/templates/Galerij/SlideshowTemplate"
import ContentTemplate from './../../components/templates/Galerij/ContentTemplate';

const Badkamer = () => {

    const images = [
        { path: badkamer1, name: 'Badkamer 1' },
        { path: badkamer2, name: 'Badkamer 2' },
        { path: radiator, name: 'Radiator' },
        { path: douchkraan, name: 'Douchkraan' },
        { path: regendouch, name: 'Regendouch' },
        { path: wasbak, name: 'Wasbak' },
        { path: badkamer3, name: 'Badkamer 3' },
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

export default Badkamer
