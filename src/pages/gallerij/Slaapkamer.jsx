import Slideshow from "../../components/Slideshow"

import slaapkamer from '../../assets/images/slaapkamer/slaapkamer1.jpg'
import slaapkamer2 from '../../assets/images/slaapkamer/slaapkamer2.jpg'
import bed1 from '../../assets/images/slaapkamer/bed1.jpg'
import bed2 from '../../assets/images/slaapkamer/bed2.jpg'
import slaapkamer3 from '../../assets/images/slaapkamer/slaapkamer3.jpg'
import slaapkamer4 from '../../assets/images/slaapkamer/slaapkamer4.jpg'

import MainTemplate from '../../components/templates/MainTemplate';
import SlideshowTemplate from "../../components/templates/SlideshowTemplate"
import ContentTemplate from '../../components/templates/ContentTemplate';

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

                <p>Slaapkamer met aangrenzende badkamer. SwissSense medium boxspring bed van 180 x 210.
                U heeft 4 hoofdkussens en 2 losse 1-persoonsdekbedden (140x210). Op verzoek is er ook een 2 peroonsdekbed (240x210). De keuze mag u kenbaar maken bij de boeking.
                Aan beide zijden van het bed een leeslampje en plankje voor persoonlijke spullen. Het beddengoed is fris wit en gemaakt van katoensatijn. Dekbedden en kussen hebben een katoenen tijk.
                De vulling is anti allergie. De linnenkast met kluisje, completeren de slaapkamer.
                </p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Slaapkamer
