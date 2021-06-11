import Slideshow from "../../components/Slideshow"

import slaapkamer from '../../assets/images/slaapkamer/slaapkamer1.jpg'
import slaapkamer2 from '../../assets/images/slaapkamer/slaapkamer2.jpg'
import bed1 from '../../assets/images/slaapkamer/bed1.jpg'
import bed2 from '../../assets/images/slaapkamer/bed2.jpg'
import slaapkamer3 from '../../assets/images/slaapkamer/slaapkamer3.jpg'
import slaapkamer4 from '../../assets/images/slaapkamer/slaapkamer4.jpg'

import MainTemplate from '../../components/templates/Galerij/MainTemplate';
import SlideshowTemplate from "../../components/templates/Galerij/SlideshowTemplate"
import ContentTemplate from '../../components/templates/Galerij/ContentTemplate';

const Slaapkamer = () => {

    const images = [
        { path: slaapkamer, name: 'Slaapkamer vanuit de deur' },
        { path: slaapkamer2, name: 'Slaapkamer vanuit naast de bed' },
        { path: bed1, name: 'Bed eerste uitzicht' }, 
        { path: bed2, name: 'Bed tweede uitzicht' }, 
        { path: slaapkamer3, name: 'Slaapkamer3' },
        { path: slaapkamer4, name: 'Slaapkamer4' },
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

export default Slaapkamer
